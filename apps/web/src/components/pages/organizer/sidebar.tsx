'use client';

import { useState } from 'react';
import { Menu, MenuItem } from './menu-item';
import UserAvatar from './user-avatar';

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

export function Sidebar(): JSX.Element {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="bg-primary/5 flex h-auto w-[300px] flex-col shadow-md">
      <div className="flex items-center justify-center gap-5 py-4">
        <UserAvatar active />
        <UserAvatar active={false} image={'/static/images/home/dark_logo.png'} />
      </div>
      <div className="flex items-center justify-center border-b-DEFAULT border-[#757575] py-4">
        {/* <SelectButton data={select_button_data} /> */}
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
