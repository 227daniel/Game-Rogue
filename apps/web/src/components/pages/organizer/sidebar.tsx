'use client';

import { UserIcon } from '@/components/icons/icons';
import { Button } from '@ui/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@ui/components/ui/dropdown-menu';
import { cn } from '@ui/lib/utils';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MdChevronRight } from 'react-icons/md';
//TODO: move components to separate files

type Menu = {
  label: string;
  links: ({ label: string; link?: string } | 'divider')[];
};

const menu_data: Menu[] = [
  {
    label: 'Event Terminal',
    links: [
      {
        label: 'Matches',
      },
      {
        label: 'Tickets',
      },
      {
        label: 'Staff',
      },
      {
        label: 'Participants',
      },
      {
        label: 'Edit Events',
      },
      'divider',
      {
        label: 'Event Calendar',
      },
      {
        label: 'Event Format',
      },
      'divider',
      {
        label: 'Organiser+',
      },
    ],
  },
  {
    label: 'Plus Terminal',
    links: [
      {
        label: 'Staff Finder+',
      },
      {
        label: 'Team Finder+',
      },
      {
        label: 'Production Finder+',
      },
      {
        label: 'Sponsor Finder+',
      },
      'divider',
      {
        label: 'Discord API & Bot',
      },
      'divider',
      {
        label: 'Graphic Generator',
      },
    ],
  },
  {
    label: 'Marketing Terminal',
    links: [
      {
        label: 'Inbox',
      },
      {
        label: 'Email Tools',
      },
      {
        label: 'Automations',
      },
      'divider',
      {
        label: 'Twitter (X) Tools',
      },
      {
        label: 'Instagram Tools',
      },
      {
        label: 'Discord Tools',
      },
      'divider',
      {
        label: 'Marketing Calendar',
      },
      {
        label: 'Set Post Templates',
      },
    ],
  },
  {
    label: 'Payments Terminal',
    links: [
      {
        label: 'Update Payment Method',
      },
      {
        label: 'Transactions',
      },
    ],
  },
  {
    label: 'Analytics',
    links: [],
  },
];

const select_button_data = {
  event_organizer: [{ label: 'eurogames' }],
  organization: [{ label: 'eurogames' }],
  teams: [{ label: 'web1' }],
};

export function Sidebar(): JSX.Element {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="bg-primary/5 flex h-auto w-[300px] flex-col shadow-md">
      <div className="flex items-center justify-center gap-5 py-4">
        <UserAvatar active />
        <UserAvatar active image={'/static/images/home/dark_logo.png'} />
        {/* <Image src="/static/images/avatar/default.png" height={100} width={100} alt="user avatar" /> */}
      </div>
      <div className="flex items-center justify-center border-b-DEFAULT border-[#757575] py-4">
        <SelectButton data={select_button_data} />
      </div>
      {menu_data.map((menu, i) => (
        <MenuItem
          open={selected === menu.label}
          toggleOpen={() => {
            if (selected === menu.label) {
              setSelected(null);
            } else {
              setSelected(menu.label);
            }
          }}
          key={`menu-${i}`}
          data={menu}
        />
      ))}
    </div>
  );
}

type UserAvatarProps = {
  active: boolean;
  image?: string;
};

function UserAvatar({ active, image }: UserAvatarProps): JSX.Element {
  return (
    <div
      className={cn(
        'relative flex size-[100px] items-center justify-center rounded-full',
        image === undefined ? 'bg-[#757575]' : 'bg-white'
      )}
    >
      {!image && <UserIcon className="size-18 text-[#121212]" />}
      {image && (
        <Image
          src={image}
          alt=""
          height={100}
          className="size-full rounded-full bg-transparent object-cover"
          width={100}
        />
      )}
      {active && <span className="user_avater_badge"></span>}
    </div>
  );
}

type SelectButtonProps = {
  data: {
    event_organizer: { label: string }[];
    organization: { label: string }[];
    teams: { label: string }[];
  };
};

export function SelectButton({ data }: SelectButtonProps): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-primary uppercase text-white">
          EuroGames
          <ChevronDown className="ml-2 size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
        }}
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-primary">Event Organizers</DropdownMenuLabel>
          {data.event_organizer.map((organizer, i) => (
            <DropdownMenuItem key={`item-${i}`}>
              <span>{organizer.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-primary">Organizations</DropdownMenuLabel>
          {data.organization.map((organizer, i) => (
            <DropdownMenuItem key={`item-${i}`}>
              <span>{organizer.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-primary">Teams</DropdownMenuLabel>
          {data.teams.map((organizer, i) => (
            <DropdownMenuItem key={`item-${i}`}>
              <span>{organizer.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type MenuItemProps = {
  data: Menu;
  open: boolean;
  toggleOpen: () => void;
};

function MenuItem({ data: { label, links }, open, toggleOpen }: MenuItemProps): JSX.Element {
  return (
    <div className={cn('w-full', open && 'bg-primary/20')}>
      <div className="flex items-center justify-between px-7 py-4 text-lg">
        <p className="text-[15px] text-white">{label}</p>
        {links.length > 0 && (
          <button
            onClick={toggleOpen}
            className="rounded-full p-2 text-white duration-200 hover:bg-white/10 active:bg-white/20 active:transition-colors"
          >
            <MdChevronRight
              className={cn('text-white rotate-90 className size-4', open && '-rotate-90')}
            />
          </button>
        )}
      </div>
      {open && (
        <div className="flex flex-col justify-start">
          {links.map((link, i) => {
            if (link === 'divider') {
              return <div className="h-[0.5px] w-full bg-white/20" key={`link-${i}`}></div>;
            } else {
              return (
                <Link
                  key={`link-${i}`}
                  className="flex w-full px-7 py-4 text-start text-[14px] text-white/80 duration-200 hover:bg-white/10 hover:transition-colors"
                  href={link.link !== undefined ? link.link : '#'}
                >
                  {link.label}
                </Link>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
