import { Button } from '@ui/components/nextui/button';
import React from 'react';
import { useCallback } from 'react';

const mockEvent = [
  { title: 'Tempr League:Season 1', name: 'Jolly', game: 0, region: 1, platform: 0 },
  { title: 'rounded-lg', name: '', game: 0, region: 2, platform: 3 },
  { title: 'e:Season 1', name: 'Insti1ct', game: 0, region: 0, platform: 0 },
  { title: 'Tempr Lea', name: 'Insti1ct', game: 0, region: 1, platform: 2 },
  { title: 'Teague:Se1', name: 'Insti1ct', game: 0, region: 1, platform: 1 },
  { title: 'ague:Seas', name: 'Jolly', game: 0, region: 1, platform: 0 },
  { title: 'Tagueon 1', name: '', game: 0, region: 1, platform: 3 },
  { title: 'mee:Sn 1', name: 'Philips', game: 0, region: 0, platform: 1 },
  { title: 'Tpr League:son 1', name: 'Jolly', game: 0, region: 2, platform: 2 },
  { title: 'on 1', name: 'Anna', game: 0, region: 2, platform: 3 },
  { title: 'Teon 1', name: '', game: 0, region: 1, platform: 0 },
  { title: 'empr Ln 1', name: 'Jolly', game: 0, region: 1, platform: 0 },
  { title: 'Teon 1', name: 'Jolly', game: 0, region: 0, platform: 1 },
  { title: 'ue:Season 1', name: 'VIctor', game: 0, region: 2, platform: 2 },
  { title: 'Tempr League:Season 1', name: 'Jolly', game: 0, region: 0, platform: 3 },
  { title: 'emue:as', name: 'Jolly', game: 0, region: 1, platform: 2 },
];

const mockTeam = [
  { title: 'TrueSynergyGaming (Gold)' },
  { title: 'ergyGam' },
  { title: 'ueSyold' },
  { title: 'eSynergyGaming' },
  { title: 'TrueSynergy' },
  { title: 'ueSynming' },
  { title: 'uergyGaming' },
  { title: 'uynergyGamng' },
  { title: 'TrynergyGai' },
  { title: 'ruenergym' },
  { title: 'ueergyGaming' },
  { title: 'eSdfergyming' },
  { title: 'Tring' },
  { title: 'fedng' },
  { title: 'gyGami' },
  { title: 'Fuefifje' },
];

const mockOrganizer = [
  { title: 'TrueSynergyGaming (Gold)' },
  { title: 'ergyGam' },
  { title: 'ueSyold' },
  { title: 'eSynergyGaming' },
  { title: 'TrueSynergy' },
  { title: 'ueSynming' },
  { title: 'uergyGaming' },
  { title: 'uynergyGamng' },
  { title: 'TrynergyGai' },
  { title: 'ruenergym' },
  { title: 'ueergyGaming' },
  { title: 'eSdfergyming' },
  { title: 'Tring' },
  { title: 'fedng' },
  { title: 'gyGami' },
  { title: 'Fuefifje' },
];

const mockPlayer = [
  { title: 'TrueSynergyGaming (Gold)' },
  { title: 'ergyGam' },
  { title: 'ueSyold' },
  { title: 'eSynergyGaming' },
  { title: 'TrueSynergy' },
  { title: 'ueSynming' },
  { title: 'uergyGaming' },
  { title: 'uynergyGamng' },
  { title: 'TrynergyGai' },
  { title: 'ruenergym' },
  { title: 'ueergyGaming' },
  { title: 'eSdfergyming' },
  { title: 'Tring' },
  { title: 'fedng' },
  { title: 'gyGami' },
  { title: 'Fuefifje' },
];

const game = ['R6'],
  region = ['North America', 'Latin America', 'Europe'],
  platform = ['Xbox', 'PC', 'PS4', 'Cross-Platform'];

export default function Discover() {
  const [eventView, setEventView] = React.useState(false);
  const [teamView, setTeamView] = React.useState(false);
  const [orgView, setOrgView] = React.useState(false);
  const [playerView, setPlayerView] = React.useState(false);

  const handleEventView = useCallback(() => {
    const temp = eventView;
    setEventView(!temp);
  }, [eventView]);

  const handleTeamView = useCallback(() => {
    const temp = teamView;
    setTeamView(!temp);
  }, [teamView]);

  const handleOrgView = useCallback(() => {
    const temp = orgView;
    setOrgView(!temp);
  }, [orgView]);

  const handlePlayerView = useCallback(() => {
    const temp = playerView;
    setPlayerView(!temp);
  }, [playerView]);

  return (
    <div className="py-[32px]">
      <div className="event mb-[16px] rounded-lg border border-solid  border-gray-800 py-[10px]">
        <div className="headEvent flex px-[32px] pb-2">
          <h2 className="flex-1 text-[24px] text-orange-400">Event</h2>
          <Button
            className="bg-orange-400 uppercase text-black max-sm:text-[10px] sm:text-[12px] md:text-[16px]"
            onClick={handleEventView}
          >
            {!eventView ? 'View all' : 'View Less'}
          </Button>
        </div>
        <hr className="border-gray-800" />
        {mockEvent.map((item, i) => {
          return (
            <>
              {i < 10 || (i >= 10 && eventView === true) ? (
                <button
                  key={i}
                  className="mb-[10px] flex w-full items-center px-[32px] py-[16px] hover:bg-[#190D03] max-sm:space-x-4 sm:space-x-8"
                >
                  <h2 className="max-sm:text-[12px] sm:text-[16px] md:text-[20px]">{item.title}</h2>
                  <p className="max-sm:text-[10px] sm:text-[12px] md:text-[16px]">{item.name}</p>
                  <div className="rounded-2xl bg-gray-600 px-2 py-1 max-sm:text-[12px] sm:text-[16px] md:text-[20px]">
                    {game[item.game]}
                  </div>
                  <div className="rounded-2xl bg-gray-600 px-2 py-1 max-sm:text-[12px] sm:text-[16px] md:text-[20px]">
                    {platform[item.platform]}
                  </div>
                  <div className="rounded-2xl bg-gray-600 px-2 py-1 max-sm:text-[12px] sm:text-[16px] md:text-[20px]">
                    {region[item.region]}
                  </div>
                </button>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </div>

      <div className="team rounded-lg border border-solid border-gray-800  py-[10px]">
        <div className="headEvent flex px-[32px] pb-2">
          <h2 className="flex-1 text-[24px] text-orange-400">Team</h2>
          <Button
            className="bg-orange-400 uppercase text-black max-sm:text-[10px] sm:text-[12px] md:text-[16px]"
            onClick={handleTeamView}
          >
            {!teamView ? 'View all' : 'View Less'}
          </Button>
        </div>
        <hr className="border-gray-800" />
        {mockTeam.map((item, i) => {
          return (
            <>
              {i < 10 || (i >= 10 && teamView === true) ? (
                <button
                  key={i}
                  className="mb-[10px] flex w-full items-center space-x-8 px-[32px] py-[16px] hover:bg-[#190D03]"
                >
                  <h2 className="max-sm:text-[12px] sm:text-[16px] md:text-[20px]">{item.title}</h2>
                </button>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </div>

      <div className="organizer rounded-lg border border-solid border-gray-800  py-[10px]">
        <div className="headEvent flex px-[32px] pb-2">
          <h2 className="flex-1 text-[24px] text-orange-400">Organizer</h2>
          <Button
            className="bg-orange-400 uppercase text-black max-sm:text-[10px] sm:text-[12px] md:text-[16px]"
            onClick={handleOrgView}
          >
            {!orgView ? 'View all' : 'View Less'}
          </Button>
        </div>
        <hr className="border-gray-800" />
        {mockOrganizer.map((item, i) => {
          return (
            <>
              {i < 10 || (i >= 10 && orgView === true) ? (
                <button
                  key={i}
                  className="mb-[10px] flex w-full items-center space-x-8 px-[32px] py-[16px] hover:bg-[#190D03]"
                >
                  <h2 className="max-sm:text-[12px] sm:text-[16px] md:text-[20px]">{item.title}</h2>
                </button>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </div>

      <div className="player rounded-lg border border-solid border-gray-800  py-[10px]">
        <div className="headEvent flex px-[32px] pb-2">
          <h2 className="flex-1 text-[24px] text-orange-400">Player</h2>
          <Button
            className="bg-orange-400 uppercase text-black max-sm:text-[10px] sm:text-[12px] md:text-[16px]"
            onClick={handlePlayerView}
          >
            {!playerView ? 'View all' : 'View Less'}
          </Button>
        </div>
        <hr className="border-gray-800" />
        {mockPlayer.map((item, i) => {
          return (
            <>
              {i < 10 || (i >= 10 && playerView === true) ? (
                <button
                  key={i}
                  className="mb-[10px] flex w-full items-center space-x-8 px-[32px] py-[16px] hover:bg-[#190D03]"
                >
                  <h2 className="max-sm:text-[12px] sm:text-[16px] md:text-[20px]">{item.title}</h2>
                </button>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
