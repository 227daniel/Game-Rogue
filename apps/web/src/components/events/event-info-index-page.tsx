'use client';

import { Tab, Tabs } from '@ui/components/nextui/tabs';
import Image from 'next/image';
import Footer from '../Homepage/Footer';
import EventInfo from './event-info';
import EventParticipants from './event-participants';
import { hexToRgb } from '@/utils/hex-to-rgb';

const data = {
  banner_image: '/static/images/home/banner_image.png',
  logo: '/static/images/home/dark_logo.png',
  platform: 'Console',
  region: 'North America',
  title: 'Secured background frame',
  teams: 0,
  prize_pool: 207307,
  start_date: new Date('2024-04-18'),
  end_date: new Date('2024-09-23'),
  color_primary: '#f5851f',
  color_secondary: '#ab5a15',
  color_tertiary: '#d4f7b6',
  game_logo: '/static/images/games/r6s.webp',
  game_name: 'R6',
};

export default function EventInfoIndexPage(): JSX.Element {
  return (
    <main className="mt-16 flex-1 bg-black">
      <div
        style={{
          filter: `drop-shadow(rgb(${hexToRgb(data.color_primary)?.r}, ${hexToRgb(data.color_primary)?.g}, ${hexToRgb(data.color_primary)?.b}) 0px 6px 0px)`,
        }}
      >
        <div
          className="h-[300px]"
          style={{
            background: `url("${data.banner_image}") center center / cover`,
            clipPath: 'polygon(0px 0px, 100% 0px, 100% 83%, 0px 100%)',
          }}
        ></div>
      </div>
      <div className="flex h-[100px] items-end justify-between gap-4 px-[10%]">
        <div className="relative flex items-end gap-4">
          <Image
            alt=""
            width={200}
            height={200}
            className="absolute left-0 size-[200px] rounded-full bg-black object-cover outline outline-2 outline-[#f5831f80]"
            src={data.logo}
          />
          <div className="mb-6 ml-[215px]">
            <h4
              className="text-[2.125rem] font-semibold"
              style={{
                color: data.color_primary,
              }}
            >
              $15,000 LAN Qualifiers I
            </h4>
            <h5
              className="text-[1.5rem]"
              style={{
                color: data.color_secondary,
              }}
            >
              Game Rogue
            </h5>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-[100px] w-full px-6 lg:max-w-[1200px]">
        <Tabs
          aria-label="Event"
          color="primary"
          variant="underlined"
          classNames={{
            tabList: 'gap-6 w-full lg:w-[1200px] relative rounded-none p-0 border-b border-divider',
            cursor: 'w-full bg-primary',
            tab: 'w-fit px-4 py-3 max-w-[360px] min-w-[90px] h-12',
            tabContent: 'group-data-[selected=true]:text-primary',
            base: 'w-full',
          }}
          defaultSelectedKey="info"
        >
          <Tab
            key="info"
            title={
              <div className="flex items-center justify-center uppercase">
                <span>info</span>
              </div>
            }
          >
            <EventInfo />
          </Tab>
          <Tab
            key="course"
            title={
              <div className="flex items-center justify-center uppercase">
                <span>course</span>
              </div>
            }
          >
            <div>COURSE</div>
          </Tab>
          <Tab
            key="participants"
            title={
              <div className="flex items-center justify-center uppercase">
                <span>participants</span>
              </div>
            }
          >
            <EventParticipants />
          </Tab>
          <Tab
            key="policies"
            title={
              <div className="flex items-center justify-center uppercase">
                <span>policies</span>
              </div>
            }
          >
            <div>POLICIES</div>
          </Tab>
        </Tabs>
      </div>
      <Footer />
    </main>
  );
}
