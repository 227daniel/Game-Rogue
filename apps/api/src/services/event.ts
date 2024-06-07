import eventModel from '@/models/event';
import { TEvent, TEventCreate, TEventUpdate } from '@repo/types';
import { Types } from 'mongoose';

export const getEventById = async (id: string) => {
  const event = await eventModel.findById(id).populate(['organization', 'teams', 'game']);
  if (event) {
    //@ts-ignore
    if (event?.isDeleted) {
      return null;
    }
  }
  return event;
};

export const getEventByOrganizationId = async (organizationId: string) => {
  const event = await eventModel
    .find({ organizationId, isDeleted: false })
    .populate(['organization', 'teams', 'game']);
  return event;
};

export const createEvent = async (data: TEventCreate) => {
  const newEvent = new eventModel(data);
  await newEvent.save();
  return newEvent;
};

export const updateEventById = async (data: TEventUpdate, id: string | undefined) => {
  const event = await eventModel.findByIdAndUpdate(id, data, { new: true });
  return event;
};

export const deleteEventById = async (id: string | undefined) => {
  const event = await eventModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  return event;
};

export const getAllEvents = async () => {
  const events = await eventModel
    .find({ isDeleted: false })
    .populate(['organization', 'teams', 'game']);
  return events;
};

export const getAllEventsByStatus = async (status: TEvent['status']) => {
  const events = await eventModel
    .find({
      status,
      isDeleted: false,
    })
    .populate(['organization', 'teams', 'game']);
  return events;
};

export const getAllEventsGroupedByStatus = async () => {
  const events = await eventModel.aggregate([
    {
      $lookup: {
        from: 'organizations',
        localField: 'organizationId',
        foreignField: '_id',
        as: 'organization',
      },
    },
    {
      $unwind: {
        path: '$organization',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: '$status',
        events: { $push: '$$ROOT' },
      },
    },
    {
      $project: {
        status: '$_id',
        events: 1,
        _id: 0,
      },
    },
  ]);
  return events;
};

export const getAllOrganizationEventsGroupedByStatus = async (id: string) => {
  const events = await eventModel.aggregate([
    {
      $match: {
        organizationId: new Types.ObjectId(id),
      },
    },
    {
      $lookup: {
        from: 'organizations',
        localField: 'organizationId',
        foreignField: '_id',
        as: 'organization',
      },
    },
    {
      $unwind: {
        path: '$organization',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: '$status',
        events: { $push: '$$ROOT' },
      },
    },
    {
      $project: {
        status: '$_id',
        events: 1,
        _id: 0,
      },
    },
  ]);
  return events;
};
