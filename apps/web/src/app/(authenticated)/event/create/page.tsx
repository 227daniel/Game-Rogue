/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@ui/components/ui/button';
import { Calendar } from '@ui/components/ui/calendar';
import { Input } from '@ui/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ui/components/ui/select';
import { Textarea } from '@ui/components/ui/textarea';
import { cn } from '@ui/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon, Pencil, PlusIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { ColorPicker } from '@/components/color-picker';

const orgs_data = [
  {
    label: 'Eurogames',
    value: 'eurogames',
  },
  {
    label: 'Asiagames',
    value: 'asiagames',
  },
  {
    label: 'Afrigames',
    value: 'afrigames',
  },
];

const event_format_data = [
  {
    label: 'League',
    value: 'league',
  },
  {
    label: 'Tournament',
    value: 'tournament',
  },
];

const course_type_data = [
  {
    label: 'Single Elimination',
    value: 'single_elimination',
  },
  {
    label: 'Double Elimination',
    value: 'double_elimination',
  },
  {
    label: 'Ladder Elimination',
    value: 'ladder_elimination',
  },
  {
    label: 'Pyramid Elimination',
    value: 'pyramid_elimination',
  },
  {
    label: '2 Division Split Elimination',
    value: '2_division_split_elimination',
  },
  {
    label: 'Baku Elimination',
    value: 'baku_elimination',
  },
];

const seed_type_data = [
  {
    label: 'Manual',
    value: 'manual',
  },
  {
    label: 'Random',
    value: 'random',
  },
];

const game_data = [
  {
    label: 'Rainbow six siege',
    value: 'rainbow_six_siege',
  },
];

const time_zones_data = [
  {
    label: 'Atlantic Standard Time',
    value: 'atlantic_standard_time',
  },
  {
    label: 'Eastern Standard Time',
    value: 'eastern_standard_time',
  },
  {
    label: 'Central Standard Time',
    value: 'central_standard_time',
  },
  {
    label: 'Mountain Standard Time',
    value: 'mountain_standard_time',
  },
  {
    label: 'Pacific Standard Time',
    value: 'pacific_standard_time',
  },
  {
    label: 'Alaskan Standard Time',
    value: 'alaskan_standard_time',
  },
];

const platform_data = [
  {
    label: 'Xbox',
    value: 'xbox',
  },
  {
    label: 'PC',
    value: 'PC',
  },
  {
    label: 'PS4',
    value: 'PS4',
  },
  {
    label: 'Cross Platform',
    value: 'cross_platform',
  },
];

const region_data = [
  {
    label: 'North America',
    value: 'north_america',
  },
  {
    label: 'Latin America',
    value: 'latin_america',
  },
  {
    label: 'Europe',
    value: 'europe',
  },
];
export default function OrganisePage(): JSX.Element {
  return (
    <div className="flex w-full flex-col justify-start">
      <div
        className="flex w-full flex-col justify-start px-6 pb-4"
        style={{
          background: 'linear-gradient(to top, rgb(74, 40, 7) -20%, rgb(34, 18, 4) 80%)',
        }}
      >
        <h1 className="mb-4 mt-10 text-[2.2rem] font-bold uppercase italic tracking-tight">
          REGISTER AN EVENT
        </h1>
        <div
          className="mb-6 w-full rounded-md bg-[#180e05] px-7 py-4 shadow-md"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          }}
        >
          <div className="mb-8 w-full">
            <h6 className="my-4 text-[1.25rem] text-white">Event Logo</h6>
            <div className="flex w-full items-center justify-center gap-6">
              <div className="flex items-start gap-2">
                <div className="flex flex-col justify-start gap-4">
                  <label htmlFor="dark_upload">
                    <input
                      type="file"
                      accept="image/*"
                      name="dark_upload"
                      id="dark_upload"
                      hidden
                    />
                    <Button className="bg-primary uppercase">upload dark logo</Button>
                  </label>
                  <Button className="bg-primary uppercase">remove dark logo</Button>
                </div>
                <div className="flex h-[180px] flex-col justify-end">
                  <Image
                    className="mt-auto"
                    src="/static/images/home/gr_letters.png"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex flex-col justify-start gap-4">
                  <label htmlFor="light_upload">
                    <input
                      type="file"
                      accept="image/*"
                      name="light_upload"
                      id="light_upload"
                      hidden
                    />
                    <Button type="submit" className="bg-primary uppercase">
                      upload light logo
                    </Button>
                  </label>
                  <Button className="bg-primary uppercase">remove light logo</Button>
                </div>
                <div className="flex h-[180px] flex-col justify-end">
                  <Image
                    className="mt-auto"
                    src="/static/images/home/gr_letters.png"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 w-full">
            <h6 className="my-6 text-[1.25rem] text-white">Event Graphic</h6>
            <div className="relative w-full">
              <Image
                src={'/static/images/home/banner_image.png'}
                className="h-[300px] w-full max-w-full rounded-md border-DEFAULT border-white/20 object-cover"
                height={300}
                width={1000}
                alt=""
              />
              <label
                htmlFor="banner_upload"
                className="absolute bottom-4 right-4 cursor-pointer rounded-full p-2 text-white duration-200 hover:bg-white/10 active:bg-white/20 active:transition-colors"
              >
                <Pencil className="size-6" />
                <input
                  type="file"
                  accept="image/*"
                  name="banner_upload"
                  id="banner_upload"
                  hidden
                />
              </label>
            </div>
          </div>
          <div className="mb-8 w-full">
            <div className="grid w-full items-center gap-1.5">
              <h6 className="text-[1.25rem] text-white">
                Organization
                <span className="text-primary"> * </span>
              </h6>
              <CustomSelect data={orgs_data} />
            </div>
          </div>
          <div className="mb-8 w-full">
            <div className="grid w-full items-center gap-1.5">
              <h6 className="text-[1.25rem] text-white">
                Event Name
                <span className="text-primary"> * </span>
              </h6>
              <Input
                className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-2 py-6 text-white hover:border-white"
                id="event_name"
              />
            </div>
          </div>
          <div className="mb-8 w-full">
            <div className="grid w-full items-center gap-1.5">
              <h6 className="text-[1.25rem] text-white">
                Tagline
                <span className="text-primary"> * </span>
              </h6>
              <Textarea
                className="mt-1 h-[300px] w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-2 py-6 text-white"
                id="event_name"
              />
            </div>
          </div>
          <div className="mb-8 grid w-full grid-cols-2 gap-4">
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  Event Format
                  <span className="text-primary"> * </span>
                </h6>
                <CustomSelect data={event_format_data} />
              </div>
            </div>
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  Course Type
                  <span className="text-primary"> * </span>
                </h6>
                <CustomSelect data={course_type_data} />
              </div>
            </div>
          </div>
          <div className="mb-8 grid w-full grid-cols-2 gap-4">
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  Seed Type
                  <span className="text-primary"> * </span>
                </h6>
                <CustomSelect data={seed_type_data} />
              </div>
            </div>
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  Course Type
                  <span className="text-primary"> * </span>
                </h6>
                <CustomSelect data={course_type_data} />
              </div>
            </div>
          </div>
          <div className="mb-8 grid w-full grid-cols-2 gap-4">
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  Start Date
                  <span className="text-primary"> * </span>
                </h6>
                <CustomInputDatePicker />
              </div>
            </div>
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  End Date
                  <span className="text-primary"> * </span>
                </h6>
                <CustomInputDatePicker />
              </div>
            </div>
          </div>
          <div className="mb-8 grid w-full grid-cols-2 gap-4">
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  Registration Opens
                  <span className="text-primary"> * </span>
                </h6>
                <CustomInputDatePicker />
              </div>
            </div>
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  Registration Ends
                  <span className="text-primary"> * </span>
                </h6>
                <CustomInputDatePicker />
              </div>
            </div>
          </div>
          <div className="mb-8 grid w-full grid-cols-2 gap-4">
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  Prize Pool
                  <span className="text-primary"> * </span>
                </h6>
                <div className="relative w-full">
                  <p className="absolute left-2 top-[0.8rem] text-[1rem] text-[#ffffffb3]">$</p>
                  <Input
                    className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-2 py-6 pl-6 text-white hover:border-white"
                    id="event_name"
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  Entry Fee
                  <span className="text-primary ml-1 cursor-pointer text-[1rem]">
                    Link your pay-out method
                  </span>
                  <span className="text-primary"> * </span>
                </h6>
                <div className="relative w-full">
                  <p className="absolute left-2 top-[0.8rem] text-[1rem] text-[#ffffffb3]">$</p>
                  <Input
                    className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-2 py-6 pl-6 text-white hover:border-white"
                    id="event_name"
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 grid w-full grid-cols-2 gap-4">
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  Game
                  <span className="text-primary"> * </span>
                </h6>
                <CustomSelect data={game_data} />
              </div>
            </div>
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  Platform
                  <span className="text-primary"> * </span>
                </h6>
                <CustomSelect data={platform_data} />
              </div>
            </div>
          </div>
          <div className="mb-8 grid w-full grid-cols-2 gap-4">
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  Region
                  <span className="text-primary"> * </span>
                </h6>
                <CustomSelect data={region_data} />
              </div>
            </div>
            <div className="w-full">
              <div className="grid w-full items-center gap-1.5">
                <h6 className="text-[1.25rem] text-white">
                  Time Zone
                  <span className="text-primary"> * </span>
                </h6>
                <CustomSelect data={time_zones_data} />
              </div>
            </div>
          </div>
          <div className="mb-8 grid w-full grid-cols-3 gap-4">
            <div>
              <div className="mb-10">
                <p className="text-[1.25rem] font-[500] text-white">Add a Rulebook</p>
                <h6 className="text-left text-[0.875rem] font-[500] text-[#808080]">
                  Publicly shared (.pdf) and must be accepted by competitors.
                </h6>
              </div>
              <div>
                <Button
                  className="border-primary/50 hover:text-primary hover:bg-primary/20 w-full bg-transparent uppercase"
                  variant={'outline'}
                >
                  <PlusIcon className="mr-2 size-3" />
                  upload
                </Button>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <p className="text-[1.25rem] font-[500] text-white">Add Terms and Conditions</p>
                <h6 className="text-left text-[0.875rem] font-[500] text-[#808080]">
                  Must be accepted by competitors and is displayed alongside rulebooks.
                </h6>
              </div>
              <div>
                <Button
                  className="border-primary/50 hover:text-primary hover:bg-primary/20 w-full bg-transparent uppercase"
                  variant={'outline'}
                >
                  <PlusIcon className="mr-2 size-3" />
                  upload
                </Button>
              </div>
            </div>
            <div>
              <div className="mb-[1.2rem]">
                <p className="text-[1.25rem] font-[500] text-white">Add Privacy Policy</p>
                <h6 className="text-left text-[0.875rem] font-[500] text-[#808080]">
                  Must be accepted by competitors and is displayed alongside rulebooks and terms and
                  conditions.
                </h6>
              </div>
              <div>
                <Button
                  className="border-primary/50 hover:text-primary hover:bg-primary/20 w-full bg-transparent uppercase"
                  variant={'outline'}
                >
                  <PlusIcon className="mr-2 size-3" />
                  upload
                </Button>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h6 className="text-[1.25rem] text-white">
              Event Branding
              <span className="text-primary ml-1 cursor-pointer text-[1rem]">
                It is highly recommended that each color is different.
              </span>
            </h6>
            <div className="mt-6 grid w-full grid-cols-3 gap-4">
              <div>
                <div className="mb-9">
                  <p className="text-[1rem] font-[500] text-white">Primary</p>
                  <h6 className="text-left text-[0.875rem] font-[500] text-[#808080]">
                    This changes the color of your event card's border, event title, button colors,
                    and content block titles.
                  </h6>
                </div>
                <ColorPicker defaultColor="#f5851f" />
                <div></div>
              </div>
              <div>
                <div className="mb-4">
                  <p className="text-[1rem] font-[500] text-white">Secondary</p>
                  <h6 className="text-left text-[0.875rem] font-[500] text-[#808080]">
                    This changes the color of the event graphic border, text inside content blocks,
                    text inside event cards, text inside buttons, and text inside drop-down menus.
                  </h6>
                </div>
                <ColorPicker defaultColor="#ab5a15" />
                <div></div>
              </div>
              <div>
                <div className="mb-9">
                  <p className="text-[1rem] font-[500] text-white">Tertiary</p>
                  <h6 className="text-left text-[0.875rem] font-[500] text-[#808080]">
                    This changes the background of event pages, the background of event cards, and
                    the background of drop-down menus.
                  </h6>
                </div>
                <ColorPicker defaultColor="#f5851f" />
                <div></div>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <Button className="bg-primary uppercase">register</Button>
          </div>
        </div>
      </div>
      <div className="bg-primary/5 relative flex w-full items-center justify-end py-8 pr-4 shadow-md">
        <div className="absolute left-1/2 -translate-x-1/2">
          <p className="text-xl text-white">Welcome to Game Rogue</p>
        </div>
        <Image src="/static/images/home/gr_letters.png" alt="" width={100} height={100} />
      </div>
    </div>
  );
}

type CustomSelectProps = {
  data: { label: string; value: string }[];
};

function CustomSelect({ data }: CustomSelectProps): JSX.Element {
  return (
    <Select>
      <SelectTrigger
        id="custom_select"
        className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-8 py-6 text-white hover:border-white"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((item, i) => (
            <SelectItem key={`item-${i}`} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function CustomInputDatePicker() {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'w-full flex justify-between border items-center rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-4 py-3 text-white hover:border-white'
          )}
        >
          {date ? format(date, 'PPpp') : format(new Date(), 'PPP')}
          <CalendarIcon className="mr-2 size-6" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
