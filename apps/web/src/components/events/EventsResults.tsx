'use client';

import { Button } from '@ui/components/ui/button';
import { format } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';

const events_dummy_data = [
  {
    banner_image: '/static/images/home/banner_image.png',
    logo: '/static/images/home/dark_logo.png',
    platform: 'PC',
    region: 'North America',
    title: 'Cross-group even-keeled forecast',
    teams: 2,
    prize_pool: 413085,
    start_date: new Date('2023-09-04'),
    end_date: new Date('2025-04-05'),
    color_primary: '#f5851f',
    color_secondary: '#ab5a15',
    color_tertiary: '#f5851f',
    game_logo: '/static/images/games/r6s.webp',
    game_name: 'R6',
  },
  {
    banner_image: '/static/images/home/banner_image.png',
    logo: '/static/images/home/dark_logo.png',
    platform: 'PC',
    region: 'North America',
    title: 'Profit-focused systematic structure',
    teams: 3,
    prize_pool: 320301,
    start_date: new Date('2023-10-15'),
    end_date: new Date('2025-03-21'),
    color_primary: '#bab347',
    color_secondary: '#625052',
    color_tertiary: '#7c1f46',
    game_logo: '/static/images/games/r6s.webp',
    game_name: 'R6',
  },
  {
    banner_image: '/static/images/home/banner_image.png',
    logo: '/static/images/home/dark_logo.png',
    platform: 'Console',
    region: 'North America',
    title: 'Secured background frame',
    teams: 0,
    prize_pool: 207307,
    start_date: new Date('2024-04-18'),
    end_date: new Date('2024-09-23'),
    color_primary: '#047501',
    color_secondary: '#9606df',
    color_tertiary: '#d4f7b6',
    game_logo: '/static/images/games/r6s.webp',
    game_name: 'R6',
  },
];

export function EventsResults(): JSX.Element {
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
          <p className="text-primary text-xl uppercase">RAINBOW SIX SIEGE</p>
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
            className="border-primary border-l-[5px] p-4"
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
            className="border-primary border-l-[5px] p-4"
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
          <div className="py-4">
            <h6 className="text-center text-lg text-white">NO EVENTS</h6>
          </div>
        </div>
        <div className="mt-16">
          <div
            className="border-primary border-l-[5px] p-4"
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
          {events_dummy_data.length > 0 ? (
            <div className="mt-4 grid grid-cols-3 gap-6">
              {events_dummy_data.map((event, i) => (
                <EventItem key={`event-${i}`} {...event} />
              ))}
            </div>
          ) : (
            <div className="py-4">
              <h6 className="text-center text-lg text-white">NO EVENTS</h6>
            </div>
          )}
        </div>
        <div className="mt-16">
          <div
            className="border-primary border-l-[5px] p-4"
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
          <div className="py-4">
            <h6 className="text-center text-lg text-white">NO EVENTS</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

type RGB = {
  r: number;
  g: number;
  b: number;
};

function hexToRgb(hex: string): RGB | null {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '');

  // Parse the hex string
  let bigint: number;
  if (hex.length === 3) {
    bigint = parseInt(
      hex
        .split('')
        .map((char) => char + char)
        .join(''),
      16
    );
  } else if (hex.length === 6) {
    bigint = parseInt(hex, 16);
  } else {
    // Invalid hex string length
    return null;
  }

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

type EventItemProps = {
  banner_image: string;
  logo: string;
  platform: string;
  region: string;
  title: string;
  teams: number;
  prize_pool: number;
  start_date: Date;
  end_date: Date;
  color_primary: string;
  color_secondary: string;
  color_tertiary: string;
  game_logo: string;
  game_name: string;
};

function EventItem({
  banner_image,
  color_primary,
  end_date,
  logo,
  platform,
  prize_pool,
  region,
  start_date,
  teams,
  game_logo,
  game_name,
  title,
}: EventItemProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href="#"
      className={'border-3'}
      style={{
        borderColor: color_primary,
        backgroundColor: !isHovered ? `transparent` : `${color_primary}10`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <div
          className="flex h-[180px] items-center gap-2 border-b-DEFAULT border-gray-800 p-2"
          style={{
            background: `url("${banner_image}") center center / cover`,
          }}
        ></div>
      </div>
      <div className="px-4 pb-0 pt-2">
        <div className="w-[calc(100% + 8px)] -ml-2 -mt-2 flex">
          <div className="pl-2 pt-2">
            <div className="flex items-center gap-2 overflow-hidden">
              <Image src={logo} width={40} height={40} alt="" className="object-cover" />
              <div className="w-[250px] overflow-hidden">
                <h4
                  style={{
                    color: color_primary,
                  }}
                  className="whitespace-nowrap text-2xl font-semibold"
                >
                  {title}
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
                  src={game_logo}
                  width={30}
                  height={30}
                  className="ml-[5px] mr-[-6px] text-[#e0e0e0]"
                  alt=""
                />
                <span className="px-2">{game_name}</span>
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
                backgroundColor: `rgba(${hexToRgb(color_primary)?.r}, ${hexToRgb(color_primary)?.g}, ${hexToRgb(color_primary)?.b}, 0.2)`,
                borderColor: `rgba(${hexToRgb(color_primary)?.r}, ${hexToRgb(color_primary)?.g}, ${hexToRgb(color_primary)?.b}, 0.3)`,
              }}
            >
              <h6
                className="border-b-DEFAULT text-center text-[1.25rem] text-white"
                style={{
                  borderColor: `rgba(${hexToRgb(color_primary)?.r}, ${hexToRgb(color_primary)?.g}, ${hexToRgb(color_primary)?.b}, 0.3)`,
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
                backgroundColor: color_primary,
              }}
              className="text-sm uppercase text-black"
            >
              View now
            </Button>
          </div>
          <div className="grid max-w-full grid-rows-2">
            <p className="text-center text-[1rem]">Teams</p>
            <h6 className="-mt-2 text-center text-[1.25rem] text-white">{teams}</h6>
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
