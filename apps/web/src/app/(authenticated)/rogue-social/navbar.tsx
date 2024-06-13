'use client';

import { Button } from '@ui/components/nextui/button';
import React, { useCallback } from 'react';
import {
  BellIcon,
  CogIcon,
  HomeIcon,
  SearchIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from '@/components/icons/icons';

const rogueTab = [
  { label: 'HOME', icon: <HomeIcon color="#FFFFFF" />, selectedIcon: <HomeIcon color="orange" /> },
  {
    label: 'FEATURED',
    icon: <HomeIcon color="#FFFFFF" />,
    selectedIcon: <HomeIcon color="orange" />,
  },
  {
    label: 'DISCOVER',
    icon: <SearchIcon color="#FFFFFF" />,
    selectedIcon: <SearchIcon color="orange" />,
  },
  {
    label: 'NOTIFICATIONS',
    icon: <BellIcon color="#FFFFFF" />,
    selectedIcon: <BellIcon color="orange" />,
  },
  {
    label: 'LEADERBOARD',
    icon: <UserGroupIcon color="#FFFFFF" />,
    selectedIcon: <UserGroupIcon color="orange" />,
  },
  {
    label: 'MY TEAM',
    icon: <UsersIcon color="#FFFFFF" />,
    selectedIcon: <UsersIcon color="orange" />,
  },
  {
    label: 'PROFILE',
    icon: <UserIcon color="#FFFFFF" />,
    selectedIcon: <UserIcon color="orange" />,
  },
  {
    label: 'SETTINGS',
    icon: <CogIcon color="#FFFFFF" />,
    selectedIcon: <CogIcon color="orange" />,
  },
];
type PropsType = {
  changeTab: (index: number) => void;
};

export default function navBar(props: PropsType) {
  const [tabState, setTabState] = React.useState(0);
  const { changeTab } = props;

  const handleClickTabMenu = useCallback(
    (i: number) => () => {
      setTabState(i);
      changeTab(i);
    },
    [changeTab]
  );
  return (
    <div>
      {rogueTab.map((item, i) =>
        tabState === i ? (
          <Button
            key={i}
            variant="ghost"
            style={{

              color: '#FFFFFFB3',
              width: '100%',
              display: 'block',
              textAlign: 'left',
              fontSize: '24px',
              lineHeight: '30px',
              minHeight: '72px',
              padding: '9px 40px',
              border: "none",
              borderRight: 'solid orange',
              borderRadius: 0,
            }}
            onClick={handleClickTabMenu(i)}
          >
            <div className="flex text-orange-400">
              {item.selectedIcon}&nbsp;&nbsp;
              {item.label}
            </div>
          </Button>
        ) : (
          <Button
            key={i}
            variant="ghost"
            style={{
              border: "none",
              color: '#FFFFFFB3',
              width: '100%',
              display: 'block',
              textAlign: 'left',
              fontSize: '24px',
              lineHeight: '30px',
              minHeight: '72px',
              padding: '9px 40px',
            }}
            onClick={handleClickTabMenu(i)}
          >
            <div className="flex">
              {item.icon}&nbsp;&nbsp;
              {item.label}
            </div>
          </Button>
        )
      )}
    </div>
  );
}
