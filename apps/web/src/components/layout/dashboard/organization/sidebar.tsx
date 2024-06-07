'use client';

import { TOrganization } from '@repo/types';
import { useState } from 'react';
import { Menu, MenuItem } from '@/components/pages/organizer/menu-item';
import SelectButton from '@/components/pages/organizer/select-button';
import UserAvatar from '@/components/pages/organizer/user-avatar';
import { useProfile } from '@/hooks/use-profile';

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

export default function OrganizationSidebarComponent() {
  const { data } = useProfile();
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedOrg, setSelectedOrg] = useState<TOrganization | null>(null);
  return (
    <div className="flex size-full flex-col shadow-md">
      <div className="flex items-center justify-center gap-5 py-4">
        <UserAvatar isUser image={data?.image} active />
        <UserAvatar
          active={false}
          image={selectedOrg ? selectedOrg.image : '/static/images/home/dark_logo.png'}
        />
      </div>
      <div className="flex items-center justify-center border-b-DEFAULT border-[#757575] py-4">
        <SelectButton setSelectedOrg={setSelectedOrg} />
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
