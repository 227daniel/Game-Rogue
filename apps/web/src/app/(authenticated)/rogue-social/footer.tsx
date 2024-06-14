'use client';

import React from 'react';
import {
  DiscordIcon,
  InstagramIcon,
  TiktokIcon,
  TwitchIcon,
  YoutubeIcon,
} from '@/components/icons/social';

const navs = [
  { label: ['home', 'about us', 'tickets', 'wiki', 'faqs', 'search'] },
  { label: ['events', 'featured', 'live now', 'ongoing', 'upcoming', 'past'] },
  { label: ['shop', 'rogue merch', 'team merch', 'customize'] },
  { label: ['my team', 'my matches', 'my profile', 'articles', 'sponsor'] },
  { label: ['organizer', 'dashboard', 'match chats', 'go live', 'community', 'create'] },
];

export default function Footer() {
  return (
    <div className="pb-5">
      <div className="border-t-solid grid grid-cols-10  border-t-[3px] border-t-orange-500  pt-[70px]">
        {navs.map((item, i) => (
          <div key={i} className="col-span-2 space-y-3 text-center">
            {item.label.map((secondItem, index) =>
              index === 0 ? (
                <>
                  <button key={index}>
                    <h1 className="font-bold uppercase text-orange-400 max-sm:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[25px]">
                      {secondItem}
                    </h1>
                  </button>
                  <br />
                </>
              ) : (
                <>
                  <button key={index}>
                    <h1 className="font-bold uppercase  max-sm:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[25px]">
                      {secondItem}
                    </h1>
                  </button>
                  <br />
                </>
              )
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 max-sm:px-10 sm:px-32 md:px-32 lg:px-52">
        <div className=" flex">
          <img
            src="static/images/home/security.png"
            className="max-sm:size-[35px] sm:size-[35px] md:size-[50px] lg:size-fit"
          />
          <div className="flex-1">
            <img
              src="static/images/home/lock.png"
              className="max-sm:h-[35px] max-sm:w-[50px] sm:h-[35px] sm:w-[50px] md:h-[50px] md:w-[70px] lg:size-fit"
            />
          </div>
          <img
            src="static/images/home/paypal.png"
            className="max-sm:h-[35px] max-sm:w-[85px] sm:h-[35px] sm:w-[85px] md:h-[50px] md:w-[120px] lg:size-fit"
          />
          <img
            src="static/images/home/card.png"
            className="max-sm:h-[35px] max-sm:w-[50px] sm:h-[35px] sm:w-[50px] md:h-[50px] md:w-[70px] lg:size-fit"
          />
        </div>
        <hr className="mt-5 border-2 border-white" />
        <div className="grid grid-cols-12 pt-8">
          <div className="col-span-4">
            <img
              src="static/images/home/gr_letters.png"
              className="max-sm:h-[20px] max-sm:w-[30px] sm:h-[25px] sm:w-[38px] md:h-[30px] md:w-[50px] lg:size-fit"
            />
          </div>
          <div className="col-span-4 text-center">
            <span className="text-center max-sm:text-[12px] sm:text-[14px] md:text-[18px]">
              Game Rogue, LLC
            </span>
            <br />
            <span className="text-center max-sm:text-[12px] sm:text-[14px] md:text-[18px]">
              2023 &copy;
            </span>
            <br />
            <br />
            <span className="text-center max-sm:text-[12px] sm:text-[14px] md:text-[18px]">
              OPEN BETA 1.0
            </span>
          </div>
          <div className="col-span-4">
            <div className="flex justify-end max-sm:gap-1 sm:gap-2">
              <a
                href="#"
                className="bg-foreground flex  items-center justify-center rounded-sm p-1 max-sm:size-[16px] sm:size-[20px] md:size-[24px] lg:size-[30px] xl:size-[40px]"
              >
                <DiscordIcon />
              </a>
              <a
                href="#"
                className="bg-foreground flex  items-center justify-center rounded-sm p-1 max-sm:size-[16px] sm:size-[20px] md:size-[24px] lg:size-[30px] xl:size-[40px]"
              >
                <TiktokIcon />
              </a>
              <a
                href="#"
                className="bg-foreground flex  items-center justify-center rounded-sm p-1 max-sm:size-[16px] sm:size-[20px] md:size-[24px] lg:size-[30px] xl:size-[40px]"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="bg-foreground flex  items-center justify-center rounded-sm p-1 max-sm:size-[16px] sm:size-[20px] md:size-[24px] lg:size-[30px] xl:size-[40px]"
              >
                <YoutubeIcon />
              </a>
              <a
                href="#"
                className="bg-foreground flex  items-center justify-center rounded-sm p-1 max-sm:size-[16px] sm:size-[20px] md:size-[24px] lg:size-[30px] xl:size-[40px]"
              >
                <TwitchIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
