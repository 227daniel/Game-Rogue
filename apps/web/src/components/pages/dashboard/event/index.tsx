'use client';

import { TEvent } from '@repo/types';
import EventItem from '@/components/events/event-item';

type EventIndexPageComponentProps = {
  events: { events: TEvent[]; status: string }[];
};
export default function EventIndexPageComponent({ events }: EventIndexPageComponentProps) {
  return (
    <div className="flex flex-1">
      {events.map((item) => (
        <div key={item.status}>
          <h1 className="text-lg font-semibold lowercase text-primary">{item.status}</h1>
          <div className="grid grid-cols-3 gap-2">
            {item.events.map((event) => (
              <EventItem key={event._id} data={event} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
