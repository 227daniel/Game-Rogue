import eventModel from '@/models/event';
import { TEventCreate, TEventUpdate } from '@repo/types';

export const getEventById = async (id: string) => {
  const event = await eventModel.findById(id).populate('organization');
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
    .populate('organization');
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
  const events = await eventModel.find({ isDeleted: false }).populate('organization');
  return events;
};

export type EventStatus = 'COMPLETED' | 'UPCOMING' | 'ONGOING';

export const getAllEventsByStatus = async (status: EventStatus) => {
  const currentDate = new Date();

  if (status === 'COMPLETED') {
    const events = await eventModel
      .find({ end_date: { $lt: currentDate }, isDeleted: false })
      .populate('organization');
    return events;
  } else if (status === 'UPCOMING') {
    const events = await eventModel
      .find({ start_date: { $gt: currentDate }, isDeleted: false })
      .populate('organization');
    return events;
  } else if (status === 'ONGOING') {
    const events = await eventModel
      .find({
        start_date: { $lte: currentDate },
        end_date: { $gte: currentDate },
        isDeleted: false,
      })
      .populate('organization');
    return events;
  }
};
