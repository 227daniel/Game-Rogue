'use client';

import { Button } from '@ui/components/ui/button';
import Image from 'next/image';
import EventItem from './event-item';
import { useEventsByStatus } from '@/hooks/use-event';

export function EventsResults(): JSX.Element {
  const { data: completedEvents } = useEventsByStatus('COMPLETED');
  const { data: ongoingEvents } = useEventsByStatus('ONGOING');
  const { data: upcomingEvents } = useEventsByStatus('UPCOMING');
  return (
    <div className="mt-10">
      <div
        className="border-t-1 border-primary py-[10px]"
        style={{
          background: 'linear-gradient(to right, rgb(50, 20, 1) 30%, rgb(168, 73, 0))',
        }}
      >
        <div className="mx-[7%] flex items-center gap-2">
          <Image src="/static/images/games/r6s.webp" height={40} width={40} alt="" />
          <p className="text-xl uppercase text-primary">RAINBOW SIX SIEGE</p>
          <div className="flex flex-1 flex-row-reverse items-center gap-4">
            <Button className="bg-primary uppercase">change region</Button>
            <Button className="bg-primary uppercase">change platform</Button>
            <Button className="bg-primary uppercase">change game</Button>
          </div>
        </div>
      </div>
      <div className="mx-[7%] pb-10">
        <div className="mt-16">
          <div
            className="border-l-[5px] border-primary p-4"
            style={{
              background: 'linear-gradient(to right, rgb(255, 255, 255), rgb(168, 73, 0))',
            }}
          >
            <div className="flex items-center gap-2">
              <Image
                style={{
                  filter: 'invert(1)',
                }}
                src="/static/images/games/r6s.webp"
                height={40}
                width={40}
                alt=""
              />
              <p className="text-xl uppercase text-black">UPCOMING MATCHES</p>
              <div className="flex flex-1 flex-row-reverse items-center gap-4">
                <Button
                  style={{
                    transition:
                      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    boxShadow:
                      'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
                  }}
                  className="bg-black/90 text-[0.875rem] uppercase text-white hover:bg-[#ab5b15]"
                >
                  more matches
                </Button>
              </div>
            </div>
          </div>
          <div className="py-4">
            <h6 className="text-center text-lg text-white">NO MATCHES</h6>
          </div>
        </div>
        <div className="mt-16">
          <div
            className="border-l-[5px] border-primary p-4"
            style={{
              background: 'linear-gradient(to right, rgb(255, 255, 255), rgb(168, 73, 0))',
            }}
          >
            <div className="flex items-center gap-2">
              <Image
                style={{
                  filter: 'invert(1)',
                }}
                src="/static/images/games/r6s.webp"
                height={40}
                width={40}
                alt=""
              />
              <p className="text-xl uppercase text-black">ONGOING EVENTS</p>
              <div className="flex flex-1 flex-row-reverse items-center gap-4">
                <Button
                  style={{
                    transition:
                      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    boxShadow:
                      'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
                  }}
                  className="bg-black/90 text-[0.875rem] uppercase text-white hover:bg-[#ab5b15]"
                >
                  more events
                </Button>
              </div>
            </div>
          </div>
          {ongoingEvents && ongoingEvents?.length > 0 ? (
            <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {ongoingEvents?.map((event, i) => <EventItem key={`event-${i}`} data={event} />)}
            </div>
          ) : (
            <div className="py-4">
              <h6 className="text-center text-lg text-white">NO EVENTS</h6>
            </div>
          )}
        </div>
        <div className="mt-16">
          <div
            className="border-l-[5px] border-primary p-4"
            style={{
              background: 'linear-gradient(to right, rgb(255, 255, 255), rgb(168, 73, 0))',
            }}
          >
            <div className="flex items-center gap-2">
              <Image
                style={{
                  filter: 'invert(1)',
                }}
                src="/static/images/games/r6s.webp"
                height={40}
                width={40}
                alt=""
              />
              <p className="text-xl uppercase text-black">UPCOMING EVENTS</p>
              <div className="flex flex-1 flex-row-reverse items-center gap-4">
                <Button
                  style={{
                    transition:
                      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    boxShadow:
                      'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
                  }}
                  className="bg-black/90 text-[0.875rem] uppercase text-white hover:bg-[#ab5b15]"
                >
                  more events
                </Button>
              </div>
            </div>
          </div>
          {upcomingEvents && upcomingEvents?.length > 0 ? (
            <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {upcomingEvents?.map((event, i) => <EventItem key={`event-${i}`} data={event} />)}
            </div>
          ) : (
            <div className="py-4">
              <h6 className="text-center text-lg text-white">NO EVENTS</h6>
            </div>
          )}
        </div>
        <div className="mt-16">
          <div
            className="border-l-[5px] border-primary p-4"
            style={{
              background: 'linear-gradient(to right, rgb(255, 255, 255), rgb(168, 73, 0))',
            }}
          >
            <div className="flex items-center gap-2">
              <Image
                style={{
                  filter: 'invert(1)',
                }}
                src="/static/images/games/r6s.webp"
                height={40}
                width={40}
                alt=""
              />
              <p className="text-xl uppercase text-black">COMPLETED EVENTS</p>
              <div className="flex flex-1 flex-row-reverse items-center gap-4">
                <Button
                  style={{
                    transition:
                      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    boxShadow:
                      'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
                  }}
                  className="bg-black/90 text-[0.875rem] uppercase text-white hover:bg-[#ab5b15]"
                >
                  more events
                </Button>
              </div>
            </div>
          </div>
          {completedEvents && completedEvents?.length > 0 ? (
            <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {completedEvents?.map((event, i) => <EventItem key={`event-${i}`} data={event} />)}
            </div>
          ) : (
            <div className="py-4">
              <h6 className="text-center text-lg text-white">NO EVENTS</h6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
