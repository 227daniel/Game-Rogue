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

export default function NavBar(props: PropsType) {
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
    <>
      <div className="max-sm:hidden sm:hidden md:hidden lg:block">
        {rogueTab.map((item, i) =>
          tabState === i ? (
            <Button
              key={i}
              variant="ghost"
              className="border-r-solid block min-h-[72px] w-full rounded-none border-r-orange-400 px-[20px] py-[9px] text-left text-[#FFFFFFB3] lg:text-[16px] 2xl:text-[20px]"
              onClick={handleClickTabMenu(i)}
            >
              <div className="flex text-orange-400">
                {item.selectedIcon}&nbsp;
                <span className="">{item.label}</span>
              </div>
            </Button>
          ) : (
            <Button
              key={i}
              variant="ghost"
              className="block min-h-[72px] w-full  px-[20px] py-[9px] text-left text-[#FFFFFFB3] xl:text-[16px] 2xl:text-[20px]"
              onClick={handleClickTabMenu(i)}
            >
              <div className="flex">
                {item.icon}&nbsp;
                <span className="">{item.label}</span>
              </div>
            </Button>
          )
        )}
      </div>
      <div className=" border-b border-b-gray-400 py-3 text-center max-sm:block sm:block md:block lg:hidden">
        <div className="grid grid-cols-8">
          {rogueTab.map((item, i) => (
            <span key={i} className="col-span-1">
              {tabState === i ? (
                <Button
                  isIconOnly
                  variant="bordered"
                  className="border border-solid border-gray-400 text-left text-[#FFFFFFB3]"
                  onClick={handleClickTabMenu(i)}
                >
                  <div className="text-orange-400">{item.selectedIcon}</div>
                </Button>
              ) : (
                <Button
                  isIconOnly
                  key={i}
                  variant="bordered"
                  className="border border-solid border-gray-400 text-left text-[#FFFFFFB3] "
                  onClick={handleClickTabMenu(i)}
                >
                  <div className="">{item.icon}</div>
                </Button>
              )}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
