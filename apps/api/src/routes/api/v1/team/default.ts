import teamModel from '@/models/team';
import { removeFromGoogleStorage } from '@/utils/storage';
import { ZTeamCreate, ZTeamUpdate, ZTeamUpdateParticipant } from '@repo/types';
import { Request, Response, Express } from 'express';
import { isValidObjectId } from 'mongoose';
import path from 'path';

export const getTeams = async (req: Request, res: Response) => {
  const teams = await teamModel.find({ isActive: true }).populate(['user', 'game', 'participants']);
  return res.json({
    success: true,
    data: teams,
  });
};

export const getTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id || !isValidObjectId(id)) throw new Error('Invalid Request');
  const team = await teamModel.findById(id).populate(['user', 'game', 'participants']);
  return res.json({
    success: true,
    data: team,
  });
};

export const createTeam = async (req: Request, res: Response) => {
  if (req.files) {
    const files = req.files as { [key: string]: Express.Multer.File[] };
    const banner = files['banner']?.[0];
    const image = files['image']?.[0];
    if (banner) {
      req.body.banner = path.join('/uploads', banner.destination).replace(/\\/g, '/');
    }
    if (image) {
      req.body.image = path.join('/uploads', image.destination).replace(/\\/g, '/');
    }
  }
  console.log(req.body.name);
  const payload = ZTeamCreate.safeParse(req.body);
  if (payload.success) {
    const item = await teamModel.create(payload.data);
    return res.json({
      success: true,
      message: 'success',
      data: item,
    });
  } else {
    return res.status(400).json({
      success: false,
      message: payload.error.errors[0].path + ': ' + payload.error.errors[0].message,
      data: null,
    });
  }
};

export const updateTeam = async (req: Request, res: Response) => {
  const id = req.params.id;
  const item = await teamModel.findById(id);
  if (!item)
    return res.status(404).json({
      success: false,
      message: 'Game not found',
      data: null,
    });
  if (req.files) {
    const files = req.files as { [key: string]: Express.Multer.File[] };
    const banner = files['banner']?.[0];
    const image = files['image']?.[0];
    if (banner) {
      req.body.banner = path.join('/uploads', banner.destination).replace(/\\/g, '/');
      if (item.banner) await removeFromGoogleStorage({ url: item.banner });
    }
    if (image) {
      req.body.image = path.join('/uploads', image.destination).replace(/\\/g, '/');
      if (item.image) await removeFromGoogleStorage({ url: item.image });
    }
  }
  const payload = ZTeamUpdate.safeParse(req.body);
  if (payload.success) {
    await item.updateOne(payload.data);
    return res.json({
      success: true,
      message: 'success',
      data: item,
      payload: payload.data,
    });
  } else {
    return res.status(400).json({
      success: false,
      message: payload.error.errors[0].path + ': ' + payload.error.errors[0].message,
    });
  }
};

export const updateTeamParticipant = async (req: Request, res: Response) => {
  const id = req.params.id;
  const item = await teamModel.findById(id).populate('participants');
  if (!item)
    return res.status(404).json({
      success: false,
      message: 'not found',
    });
  const payload = ZTeamUpdateParticipant.safeParse(req.body);
  if (payload.success) {
    const { userId, kick } = payload.data;
    const participantIds = item.participantIds;
    const idx = participantIds.findIndex((item) => item.userId === userId);
    if (kick) {
      await item.updateOne(
        {
          participantIds: participantIds.filter((item) => item.userId !== userId),
        },
        { new: true, upsert: true }
      );
    } else {
      if (idx < 0) {
        await item.updateOne(
          { $addToSet: { participantIds: payload.data } },
          { new: true, upsert: true }
        );
      } else {
        participantIds[idx] = { ...participantIds[idx], ...payload.data };
        await item.updateOne({ participantIds }, { new: true, upsert: true });
      }
    }
    return res.json({
      success: true,
      message: 'success',
      data: payload.data,
    });
  } else {
    return res.status(400).json({
      success: false,
      message: payload.error.errors[0].path + ': ' + payload.error.errors[0].message,
    });
  }
};

export const deleteTeam = async (req: Request, res: Response) => {
  const id = req.params.id;
  const item = await teamModel.findById(id);
  if (!item)
    return res.status(404).json({
      success: false,
      message: 'Game not found',
      data: null,
    });
  await item.updateOne({ isActive: false }, { new: true });
  return res.json({
    success: true,
    message: 'success',
  });
};
