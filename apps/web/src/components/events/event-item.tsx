'use client';

import { TEvent } from '@repo/types';
import { Button } from '@ui/components/ui/button';
import { format } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';
import { hexToRgb } from '@/utils/hex-to-rgb';

type EventItemProps = { data: TEvent };

export default function EventItem({
  data: {
    end_date,
    platform,
    prize_pool,
    region,
    start_date,
    event_branding_primary_color,
    event_graphic,
    event_logo_dark,
    name,
    team_limit,
    _id,
  },
}: EventItemProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={`/event/${_id}`}
      className={'border-3'}
      style={{
        borderColor: event_branding_primary_color,
        backgroundColor: !isHovered ? `transparent` : `${event_branding_primary_color}10`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <div
          className="flex h-[180px] items-center gap-2 border-b-DEFAULT border-gray-800 p-2"
          style={{
            background: `url("${event_graphic}") center center / cover`,
          }}
        ></div>
      </div>
      <div className="px-4 pb-0 pt-2">
        <div className="w-[calc(100% + 8px)] -ml-2 -mt-2 flex">
          <div className="pl-2 pt-2">
            <div className="flex items-center gap-2 overflow-hidden">
              <Image
                src={event_logo_dark ?? '/static/images/home/dark_logo.png'}
                width={40}
                height={40}
                alt=""
                className="object-cover"
              />
              <div className="w-[200px] overflow-hidden lg:w-[250px]">
                <h4
                  style={{
                    color: event_branding_primary_color,
                  }}
                  className="whitespace-nowrap text-2xl font-semibold"
                >
                  {name}
                </h4>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <div
                style={{
                  transition:
                    'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  backdropFilter: 'blur(2px)',
                }}
                className="inline-flex h-6 max-w-full items-center justify-center whitespace-nowrap rounded-xl bg-[#393d40] text-[0.8rem] text-white"
              >
                <Image
                  src={'/static/images/games/r6s.webp'}
                  width={30}
                  height={30}
                  className="ml-[5px] mr-[-6px] text-[#e0e0e0]"
                  alt=""
                />
                <span className="px-2">{'R6'}</span>
              </div>
              <div
                style={{
                  transition:
                    'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  backdropFilter: 'blur(2px)',
                }}
                className="inline-flex h-6 max-w-full items-center justify-center whitespace-nowrap rounded-xl bg-[#393d40] text-[0.8rem] text-white"
              >
                <span className="px-2">{platform}</span>
              </div>
              <div
                style={{
                  transition:
                    'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  backdropFilter: 'blur(2px)',
                }}
                className="inline-flex h-6 max-w-full items-center justify-center whitespace-nowrap rounded-xl bg-[#393d40] text-[0.8rem] text-white"
              >
                <span className="px-2">{region}</span>
              </div>
            </div>
          </div>
          <div className="w-[100px] pl-2 pt-2">
            <div
              className="rounded-[10px] border-2"
              style={{
                backgroundColor: `rgba(${hexToRgb(event_branding_primary_color)?.r}, ${hexToRgb(event_branding_primary_color)?.g}, ${hexToRgb(event_branding_primary_color)?.b}, 0.2)`,
                borderColor: `rgba(${hexToRgb(event_branding_primary_color)?.r}, ${hexToRgb(event_branding_primary_color)?.g}, ${hexToRgb(event_branding_primary_color)?.b}, 0.3)`,
              }}
            >
              <h6
                className="border-b-DEFAULT text-center text-[1.25rem] text-white"
                style={{
                  borderColor: `rgba(${hexToRgb(event_branding_primary_color)?.r}, ${hexToRgb(event_branding_primary_color)?.g}, ${hexToRgb(event_branding_primary_color)?.b}, 0.3)`,
                }}
              >
                {format(start_date, 'MMM')}
              </h6>
              <div className="-mt-3 flex items-center justify-center">
                <h4 className="text-[2.125rem] font-bold text-white">{format(start_date, 'dd')}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pb-1 pt-0">
        <div className="flex w-full items-center gap-4 text-[#d3d3d3]">
          <div className="w-[100px]">
            <p className="font-[1rem]">Date:</p>
          </div>
          <div className="max-w-full">
            <p className="text-[0.875rem]">
              {format(start_date, "dd'.' MMM'.' yyyy")} - {format(end_date, "dd'.' MMM'.' yyyy")}
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-3 items-center pt-2 text-[#d3d3d3]">
          <div className="max-w-full">
            <Button
              style={{
                backgroundColor: event_branding_primary_color,
              }}
              className="text-sm uppercase text-black"
            >
              View now
            </Button>
          </div>
          <div className="grid max-w-full grid-rows-2">
            <p className="text-center text-[1rem]">Teams</p>
            <h6 className="-mt-2 text-center text-[1.25rem] text-white">{team_limit}</h6>
          </div>
          <div className="grid max-w-full grid-rows-2">
            <p className="text-center text-[1rem]">Prize Pool</p>
            <h6 className="-mt-2 text-center text-[1.25rem] text-white">
              ${prize_pool.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </h6>
          </div>
        </div>
      </div>
    </a>
  );
}
