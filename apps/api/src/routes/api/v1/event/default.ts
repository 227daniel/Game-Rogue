import {
  createEvent,
  deleteEventById,
  EventStatus,
  getAllEvents,
  getAllEventsByStatus,
  getEventById,
  getEventByOrganizationId,
  updateEventById,
} from '@/services/event';
import { removeFromGoogleStorage } from '@/utils/storage';
import { log } from '@repo/logger';
import { TApiResponse, TEvent, ZEvent, ZEventUpdate } from '@repo/types';
import type { Request, Response, Express } from 'express';
import path from 'path';

export const getEventByIdController = async (req: Request, res: Response) => {
  const eventId = req.params.id;
  const event = await getEventById(eventId);
  return res.json({
    data: event,
    success: true,
    message: 'success',
  } as TApiResponse<TEvent>);
};

export const getEventByOrganizationIdController = async (req: Request, res: Response) => {
  const organizationId = req.params.organizationId;
  const events = await getEventByOrganizationId(organizationId);
  return res.json({
    data: events,
    success: true,
    message: 'success',
  } as TApiResponse<TEvent[]>);
};

export const createEventController = async (req: Request, res: Response) => {
  try {
    if (req.files) {
      const files = req.files as { [key: string]: Express.Multer.File[] };
      const event_graphic = files['event_graphic']?.[0];
      const event_logo_dark = files['event_logo_dark']?.[0];
      const event_logo_light = files['event_logo_light']?.[0];
      const rulebook_file = files['rulebook_file']?.[0];
      const terms_conditions_file = files['terms_conditions_file']?.[0];
      const terms_privacy_policy_file = files['terms_privacy_policy_file']?.[0];
      if (event_graphic) {
        req.body.event_graphic = path
          .join('/uploads', event_graphic.destination)
          .replace(/\\/g, '/');
      }
      if (event_logo_dark) {
        req.body.event_logo_dark = path
          .join('/uploads', event_logo_dark.destination)
          .replace(/\\/g, '/');
      }
      if (event_logo_light) {
        req.body.event_logo_light = path
          .join('/uploads', event_logo_light.destination)
          .replace(/\\/g, '/');
      }
      if (rulebook_file) {
        req.body.rulebook_file = path
          .join('/uploads', rulebook_file.destination)
          .replace(/\\/g, '/');
      }
      if (terms_conditions_file) {
        req.body.terms_conditions_file = path
          .join('/uploads', terms_conditions_file.destination)
          .replace(/\\/g, '/');
      }
      if (terms_privacy_policy_file) {
        req.body.terms_privacy_policy_file = path
          .join('/uploads', terms_privacy_policy_file.destination)
          .replace(/\\/g, '/');
      }
    }

    req.body.team_limit = parseInt(req.body?.team_limit ?? '0');
    req.body.entry_fee = parseInt(req.body?.entry_fee ?? '0');
    req.body.prize_pool = parseInt(req.body?.prize_pool ?? '0');
    req.body.start_date = new Date(req.body?.start_date ?? Date.now());
    req.body.end_date = new Date(req.body?.end_date ?? Date.now());
    req.body.registration_opens_date = new Date(req.body?.registration_opens_date ?? Date.now());
    req.body.registration_ends_date = new Date(req.body?.registration_ends_date ?? Date.now());
    const payload = ZEvent.safeParse(req.body);
    if (payload.success === true) {
      const event = await createEvent(payload.data);
      return res.json({
        data: event,
        success: true,
        message: 'success',
      } as TApiResponse<TEvent>);
    } else {
      return res.status(400).json({
        success: false,
        message: payload.error.errors[0].path + ': ' + payload.error.errors[0].message,
      } as TApiResponse<any>);
    }
  } catch (err) {
    log(err);
    return res.status(500).json({
      success: false,
      // @ts-expect-error
      code: err.code,
      // @ts-expect-error
      message: err.message,
    });
  }
};

export const updateEventByIdController = async (req: Request, res: Response) => {
  try {
    const item = await getEventById(req.params.id);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'not found',
      });
    }
    req.body.userId = String(res.locals.user._id);
    if (req.files) {
      const files = req.files as { [key: string]: Express.Multer.File[] };
      const event_graphic = files['event_graphic']?.[0];
      const event_logo_dark = files['event_logo_dark']?.[0];
      const event_logo_light = files['event_logo_light']?.[0];
      const rulebook_file = files['rulebook_file']?.[0];
      const terms_conditions_file = files['terms_conditions_file']?.[0];
      const terms_privacy_policy_file = files['terms_privacy_policy_file']?.[0];
      if (event_graphic) {
        req.body.event_graphic = path
          .join('/uploads', event_graphic.destination)
          .replace(/\\/g, '/');
        if (item.event_graphic) await removeFromGoogleStorage({ url: item.event_graphic });
      }
      if (event_logo_dark) {
        req.body.event_logo_dark = path
          .join('/uploads', event_logo_dark.destination)
          .replace(/\\/g, '/');
        if (item.event_logo_dark) await removeFromGoogleStorage({ url: item.event_logo_dark });
      }
      if (event_logo_light) {
        req.body.event_logo_light = path
          .join('/uploads', event_logo_light.destination)
          .replace(/\\/g, '/');
        if (item.event_logo_light) await removeFromGoogleStorage({ url: item.event_logo_light });
      }
      if (rulebook_file) {
        req.body.rulebook_file = path
          .join('/uploads', rulebook_file.destination)
          .replace(/\\/g, '/');
        if (item.rulebook_file) await removeFromGoogleStorage({ url: item.rulebook_file });
      }
      if (terms_conditions_file) {
        req.body.terms_conditions_file = path
          .join('/uploads', terms_conditions_file.destination)
          .replace(/\\/g, '/');
        if (item.terms_conditions_file)
          await removeFromGoogleStorage({ url: item.terms_conditions_file });
      }
      if (terms_privacy_policy_file) {
        req.body.terms_privacy_policy_file = path
          .join('/uploads', terms_privacy_policy_file.destination)
          .replace(/\\/g, '/');
        if (item.terms_privacy_policy_file)
          await removeFromGoogleStorage({ url: item.terms_privacy_policy_file });
      }
    }

    if (req.body?.team_limit) {
      req.body.team_limit = parseInt(req.body?.team_limit ?? '0');
    }
    if (req.body?.entry_fee) {
      req.body.entry_fee = parseInt(req.body?.entry_fee ?? '0');
    }
    if (req.body?.prize_pool) {
      req.body.prize_pool = parseInt(req.body?.prize_pool ?? '0');
    }
    if (req.body?.start_date) {
      req.body.start_date = new Date(req.body?.start_date ?? Date.now());
    }
    if (req.body?.end_date) {
      req.body.end_date = new Date(req.body?.end_date ?? Date.now());
    }
    if (req.body?.registration_opens_date) {
      req.body.registration_opens_date = new Date(req.body?.registration_opens_date ?? Date.now());
    }
    if (req.body?.registration_ends_date) {
      req.body.registration_ends_date = new Date(req.body?.registration_ends_date ?? Date.now());
    }

    const payload = ZEventUpdate.safeParse(req.body);
    if (payload.success === true) {
      const event = await updateEventById(payload.data, item.id);
      return res.json({
        data: event,
        success: true,
        message: 'success',
      } as TApiResponse<TEvent>);
    } else {
      return res.status(400).json({
        success: false,
        message: payload.error.errors[0].path + ': ' + payload.error.errors[0].message,
      } as TApiResponse<any>);
    }
  } catch (err) {
    log(err);
    return res.status(500).json({
      success: false,
      // @ts-expect-error
      code: err.code,
      // @ts-expect-error
      message: err.message,
    });
  }
};

export const deleteEventByIdController = async (req: Request, res: Response) => {
  const item = await getEventById(req.params.id);
  if (!item) {
    return res.status(404).json({
      success: false,
      message: 'not found',
    });
  }
  if (item.event_graphic) await removeFromGoogleStorage({ url: item.event_graphic });
  if (item.event_logo_dark) await removeFromGoogleStorage({ url: item.event_logo_dark });
  if (item.event_logo_light) await removeFromGoogleStorage({ url: item.event_logo_light });
  if (item.rulebook_file) await removeFromGoogleStorage({ url: item.rulebook_file });
  if (item.terms_conditions_file)
    await removeFromGoogleStorage({ url: item.terms_conditions_file });
  if (item.terms_privacy_policy_file)
    await removeFromGoogleStorage({ url: item.terms_privacy_policy_file });

  const event = await deleteEventById(item.id);
  return res.json({
    data: event,
    success: true,
    message: 'success',
  } as TApiResponse<TEvent>);
};

export const getAllEventsController = async (req: Request, res: Response) => {
  const events = await getAllEvents();
  return res.json({
    data: events,
    success: true,
    message: 'success',
  } as TApiResponse<TEvent[]>);
};

export const getAllEventsByStatusController = async (req: Request, res: Response) => {
  const status = req.query.status as EventStatus;
  const events = await getAllEventsByStatus(status);
  return res.json({
    data: events,
    success: true,
    message: 'success',
  } as TApiResponse<TEvent[]>);
};
