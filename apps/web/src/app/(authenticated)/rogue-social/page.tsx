'use client';
import React, { ReactNode, useCallback, useState } from 'react';
import Messages from '../../../components/message/Messages';
import Discover from './discover';
import Featured from './featured';
import Footer from './footer';
import Home from './home';
import Leaderboard from './leaderboard';
import NavBar from './navbar';
import Notifications from './notifications';
import Settings from './settings';
import Team from './team'

export default function App({ children }: { children: ReactNode }): JSX.Element {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChangeTab = useCallback((index: number) => {
    setTabIndex(index);
  }, []);

  const MainComponents = [
    { label: 'home', com: <Home /> },
    { label: 'featured', com: <Featured /> },
    { label: 'discover', com: <Discover /> },
    { label: 'notifications', com: <Notifications /> },
    { label: 'leaderboard', com: <Leaderboard /> },
    { label: 'my team', com: <><Team /></> },
    { label: 'profile', com: <></> },
    { label: 'settings', com: <><Settings /></> },
  ];
  return (
    <>
      <br />
      <br />
      <Messages />
      <div className="flex flex-col">
        <div className="flex w-full flex-col">
          <div className="grid grid-cols-5">
            <div className="col-span-1 bg-gradient-to-b from-black to-[rgb(40,22,12)]">
              <NavBar changeTab={(index) => handleChangeTab(index)} />
            </div>
            <div className="col-span-4">{MainComponents[tabIndex].com}</div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
