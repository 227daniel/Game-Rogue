/* eslint-disable react/no-unescaped-entities */
'use client';

import { ColorPicker } from '@/components/color-picker';
import { Button } from '@ui/components/ui/button';
import { Input } from '@ui/components/ui/input';

export default function RogueSocialPage(): JSX.Element {
  return (
    <div className="flex w-full flex-col justify-start p-6">
      <div
        className="flex w-full flex-col justify-start rounded-[4px] bg-black p-8 px-6 pb-4 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          backgroundColor: 'rgb(24, 14, 5)',
        }}
      >
        <div className="-mt-6 flex flex-col gap-6">
          <h6 className="mt-6 text-xl">Register Organization </h6>
          <div>
            <p className="text-left text-base text-white/70">Organization Name</p>
            <p className="mb-2 mt-4 text-left text-xs text-white/70">
              Controls the publically visible name of this organization.
            </p>
            <Input
              className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-2 py-6 text-white hover:border-white"
              id="event_name"
            />
          </div>
          <div>
            <p className="mb-2 text-left text-base text-white/70">Tagline</p>
            <Input
              className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-2 py-6 text-white hover:border-white"
              id="event_name"
            />
          </div>
          <div>
            <p className="text-left text-base text-white">Rogue ID</p>
            <p className="my-2 text-left text-xs text-white/70">
              Controls the publically visible name of this organization.
            </p>
            <Input
              className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-2 py-6 text-white hover:border-white"
              id="event_name"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <div className="mb-2">
                <p className="text-[1rem] font-[500] text-white">Primary</p>
              </div>
              <ColorPicker defaultColor="#f5851f" />
            </div>
            <div>
              <div className="mb-2">
                <p className="text-[1rem] font-[500] text-white">Secondary</p>
              </div>
              <ColorPicker defaultColor="#ab5a15" />
            </div>
            <div>
              <div className="mb-2">
                <p className="text-[1rem] font-[500] text-white">Tertiary</p>
              </div>
              <ColorPicker defaultColor="#f5851f" />
            </div>
          </div>
          <div className="flex justify-start">
            <Button
              disabled
              className="bg-primary uppercase disabled:bg-[#ffffff1f] disabled:text-white/30"
            >
              register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
