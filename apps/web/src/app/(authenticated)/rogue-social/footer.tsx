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
      <div className="border-t-solid flex space-x-48 border-t-[3px] border-t-orange-500 pl-[170px] pt-[70px]">
        {navs.map((item, i) => (
          <div key={i} className="space-y-3 text-center">
            {item.label.map((secondItem, index) =>
              index === 0 ? (
                <>
                  <button key={index}>
                    <h1 className="text-[25px] font-bold uppercase text-orange-400">
                      {secondItem}
                    </h1>
                  </button>
                  <br />
                </>
              ) : (
                <>
                  <button key={index}>
                    <h1 className="text-[25px] font-bold uppercase">{secondItem}</h1>
                  </button>
                  <br />
                </>
              )
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 px-52">
        <div className=" flex">
          <img src="static/images/home/security.png" />
          <div className="flex-1">
            <img src="static/images/home/lock.png" />
          </div>
          <img src="static/images/home/paypal.png" />
          <img src="static/images/home/card.png" />
        </div>
        <hr className="mt-5 border-2 border-white" />
        <div className="grid grid-cols-12 pt-8">
          <div className="col-span-4">
            <img src="static/images/home/gr_letters.png" />
          </div>
          <div className="col-span-4 text-center">
            <span className="text-center text-[18px]">Game Rogue, LLC</span>
            <br />
            <span className="text-center text-[18px]">2023 &copy;</span>
            <br />
            <br />
            <span className="text-center text-[18px]">OPEN BETA 1.0</span>
          </div>
          <div className="col-span-4">
            <div className="flex justify-end gap-3">
              <a
                href="#"
                className="bg-foreground flex h-[35px] w-[40px] items-center justify-center rounded-sm p-1"
              >
                <DiscordIcon />
              </a>
              <a
                href="#"
                className="bg-foreground flex h-[35px] w-[40px] items-center justify-center rounded-sm p-1"
              >
                <TiktokIcon />
              </a>
              <a
                href="#"
                className="bg-foreground flex h-[35px] w-[40px] items-center justify-center rounded-sm p-1"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="bg-foreground flex h-[35px] w-[40px] items-center justify-center rounded-sm p-1"
              >
                <YoutubeIcon />
              </a>
              <a
                href="#"
                className="bg-foreground flex h-[35px] w-[40px] items-center justify-center rounded-sm p-1"
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
