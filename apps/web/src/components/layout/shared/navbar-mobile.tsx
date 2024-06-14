'use client';

import { Input } from '@repo/ui/components/nextui/input';
import { Button } from '@ui/components/nextui/button';
import { SearchIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEventHandler, KeyboardEventHandler, useCallback, useEffect, useState } from 'react';
import NavItem from '@/components/Header/NavItem';
import NavItemAuth from '@/components/Header/NavItemAuth';
import NavVerticalItem from '@/components/Header/NavVerticalItem';
import { BarsIcon } from '@/components/icons/icons';

// Mapping paths to page names
const pathToPageMap: { [key: string]: string } = {
  '/': 'home',
  '/dashboard/event': 'event',
  '/event/create': 'event',
  '/event': 'event',
  '/match/upcoming': 'event',
  '/event/upcoming': 'event',
  '/event/ongoing': 'event',
  '/event/completed': 'event',
  '/rogue-social/manage-accounts': 'rogue-social',
  '/rogue-social': 'rogue-social',
  '/rogue-social/organizer': 'rogue-social',
  '/tv': 'rogue-tv',
  '/article': 'articles',
  '/shop': 'shop',
  '/organizer': 'organizer',
  '/video-editor': 'tools',
  '/wiki': 'tools',
  '/faqs': 'tools',
  '/team/create': 'plus-plans',
  '/organizer/create': 'plus-plans',
  '/auth/signup': 'auth',
  '/auth/signin': 'auth',
};
export default function SharedNavbarMobileComponent(): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  const handleClickHome = () => {
    router.push('/');
  };
  const handleClickEvent = () => {
    router.push('/event');
  };
  const handleClickRogueSocial = () => {
    router.push('/rogue-social');
  };
  const handleClickOrganize = () => {
    router.push('/dashboard/organizer');
  };
  const handleClickTools = () => setCurrentPage('');
  const handleClickPlusPlans = () => setCurrentPage('plus-plans');

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value;
    router.push('/' + val);
    setSearch(val);
  };

  const handleSearchKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      router.push('/' + search);
    }
  };

  useEffect(() => {
    if (pathname in pathToPageMap) {
      setCurrentPage(pathToPageMap[pathname]);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showHeaderBar = useCallback(() => {
    const temp = isShow;
    setIsShow(!temp);
  }, [isShow]);

  return (
    <div>
      <nav
        className={`fixed left-0 top-0 z-[1000]  ${isShow ? 'block' : 'hidden'} h-full bg-black shadow-xl transition-all duration-300 max-sm:w-1/2 sm:w-[300px]`}
      >
        <div className="bg-background sticky top-[150px] z-50 flex h-16 items-center gap-4 shadow-xl">
          <div className="w-full items-center justify-between gap-1 space-x-4 px-2">
            <div className="items-center justify-start gap-1">
              {/* <div className="relative flex h-10 items-end gap-1 pr-4">
                <video
                  autoPlay
                  loop
                  muted
                  poster="/static/images/home/gr_letters.png"
                  className="h-full"
                >
                  <source src="/static/videos/gr_letters.webm" type="video/webm" />
                </video>
                <Image
                  src="/static/images/home/gr_letters.png"
                  alt=""
                  width={40}
                  height={40}
                  className="brightness-10 absolute left-0 top-0 hidden bg-white"
                />
                <div className="text-sm font-bold leading-none text-white">
                  OB
                  <br />
                  1.0
                </div>
              </div> */}
              <div className="search-box w-full">
                <Input
                  id="search"
                  name="search"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearchChange}
                  onKeyUp={handleSearchKeyUp}
                  height="40px"
                  startContent={<SearchIcon size={18} color="white" />}
                />
              </div>
              <NavVerticalItem
                name="HOME"
                active={currentPage === 'home'}
                handleClick={handleClickHome}
              />
              <NavVerticalItem
                name="Events"
                active={currentPage === 'event'}
                handleClick={handleClickEvent}
                isDropdown={true}
                items={[
                  {
                    name: 'Matches',
                    key: 'upcoming-matches',
                    isLink: true,
                    to: '/match/upcoming',
                  },
                  {
                    name: 'Events',
                    key: 'upcoming-events',
                    isLink: true,
                    to: '/event/upcoming',
                  },
                  {
                    name: 'Live Events',
                    key: 'ongoing-events',
                    isLink: true,
                    to: '/event/ongoing',
                  },
                  {
                    name: 'Past Events',
                    key: 'completed-events',
                    isLink: true,
                    to: '/event/completed',
                  },
                ]}
              />
              <NavVerticalItem
                name="Rogue Social"
                active={currentPage === 'rogue-social'}
                handleClick={handleClickRogueSocial}
                isDropdown={true}
                items={[
                  {
                    name: 'MANAGE ACCOUNTS',
                    key: 'manage-accounts',
                    isLink: true,
                    to: '/rogue-social/manage-accounts',
                  },
                  {
                    name: 'LEADERBOARD',
                    key: 'leaderboard',
                    isLink: true,
                    to: '/rogue-social?tab=4',
                  },
                ]}
              />
              <NavVerticalItem name="ROGUE TV" handleClick={() => router.push('/tv')} />
              <NavVerticalItem name="ARTICLES" handleClick={() => router.push('/article')} />
              <NavVerticalItem
                name="SHOP"
                handleClick={() => {
                  router.push('/shop');
                }}
              />
            </div>
          </div>
        </div>
      </nav>
      <nav className={`fixed left-0 top-0 z-[1001] w-full shadow-xl transition-all duration-300`}>
        <div className="bg-background border-b-3 border-primary sticky top-0 z-50 flex h-16 items-center justify-end gap-4 shadow-xl">
          <Button isIconOnly onClick={showHeaderBar}>
            <BarsIcon />
          </Button>
          <div className="flex-1">
            <div className="flex items-center justify-end gap-1">
              <NavItem
                name="Organize"
                active={currentPage === 'organizer'}
                handleClick={handleClickOrganize}
                isDropdown={true}
                items={[
                  {
                    name: 'My Organization',
                    key: 'my-organizer',
                    isLink: true,
                    to: '/dashboard/rogue-social/organizer',
                  },
                  {
                    name: 'Producer Dashboard',
                    key: 'producer-dashboard',
                    isLink: true,
                    to: '/',
                  },
                ]}
              />
              <NavItem
                name="Tools"
                active={currentPage === 'tool'}
                handleClick={handleClickTools}
                isDropdown={true}
                items={[
                  {
                    name: 'Video Editor',
                    key: 'video-editor',
                    isLink: true,
                    to: '/video-editor',
                  },
                  {
                    name: 'Customize',
                    key: 'customize',
                    isLink: true,
                    to: '/',
                  },
                  {
                    name: 'Create Article',
                    key: 'create-article',
                    isLink: true,
                    to: '/',
                  },
                  {
                    name: '_divider',
                    key: 'divider',
                  },
                  {
                    name: 'WIKI',
                    key: 'wiki',
                    isLink: true,
                    to: '/wiki',
                  },
                  {
                    name: 'FAQS',
                    key: 'faqs',
                    isLink: true,
                    to: '/faqs',
                  },
                ]}
              />
              <NavItem
                name="Plus Plans"
                active={currentPage === 'plus-plans'}
                handleClick={handleClickPlusPlans}
                isDropdown={true}
                items={[
                  {
                    name: 'Player Plus',
                    key: 'add-player',
                    isLink: true,
                    to: '/',
                  },
                  {
                    name: 'Team Plus',
                    key: 'add-team',
                    isLink: true,
                    to: '/team/create',
                  },
                  {
                    name: 'Organizer Plus',
                    key: 'add-organizer',
                    isLink: true,
                    to: '/organizer/create',
                  },
                ]}
              />
            </div>
          </div>
          <NavItemAuth
            name="Auth"
            handleClick={handleClickEvent}
            isDropdown={true}
            items={[
              {
                name: 'Sign up',
                key: 'sign-up',
                isLink: true,
                to: '/auth/signup',
              },
              {
                name: 'Login',
                key: 'login',
                isLink: true,
                to: '/auth/signin',
              },
            ]}
          />
        </div>
      </nav>
      {/* <nav
        className={`fixed left-0 top-0 z-50 hidden w-full shadow-xl transition-all duration-300 lg:block ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="bg-background border-b-3 border-primary sticky top-0 z-50 flex h-16 items-center gap-4 shadow-xl">
          <div className="w-full items-center justify-between gap-1 space-x-4 px-2">
            <div className="items-center justify-start gap-1">
              <div className="relative flex h-10 items-end gap-1 pr-4">
                <video
                  autoPlay
                  loop
                  muted
                  poster="/static/images/home/gr_letters.png"
                  className="h-full"
                >
                  <source src="/static/videos/gr_letters.webm" type="video/webm" />
                </video>
                <Image
                  src="/static/images/home/gr_letters.png"
                  alt=""
                  width={40}
                  height={40}
                  className="brightness-10 absolute left-0 top-0 hidden bg-white"
                />
                <div className="text-sm font-bold leading-none text-white">
                  OB
                  <br />
                  1.0
                </div>
              </div>
              <div className="search-box w-80">
                <Input
                  id="search"
                  name="search"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearchChange}
                  onKeyUp={handleSearchKeyUp}
                  height="40px"
                  startContent={<SearchIcon size={18} color="white" />}
                />
              </div>
              <NavItem name="HOME" active={currentPage === 'home'} handleClick={handleClickHome} />
              <NavItem
                name="Events"
                active={currentPage === 'event'}
                handleClick={handleClickEvent}
                isDropdown={true}
                items={[
                  {
                    name: 'Matches',
                    key: 'upcoming-matches',
                    isLink: true,
                    to: '/match/upcoming',
                  },
                  {
                    name: 'Events',
                    key: 'upcoming-events',
                    isLink: true,
                    to: '/event/upcoming',
                  },
                  {
                    name: 'Live Events',
                    key: 'ongoing-events',
                    isLink: true,
                    to: '/event/ongoing',
                  },
                  {
                    name: 'Past Events',
                    key: 'completed-events',
                    isLink: true,
                    to: '/event/completed',
                  },
                ]}
              />
              <NavItem
                name="Rogue Social"
                active={currentPage === 'rogue-social'}
                handleClick={handleClickRogueSocial}
                isDropdown={true}
                items={[
                  {
                    name: 'MANAGE ACCOUNTS',
                    key: 'manage-accounts',
                    isLink: true,
                    to: '/rogue-social/manage-accounts',
                  },
                  {
                    name: 'LEADERBOARD',
                    key: 'leaderboard',
                    isLink: true,
                    to: '/rogue-social?tab=4',
                  },
                ]}
              />
              <NavItem name="ROGUE TV" handleClick={() => router.push('/tv')} />
              <NavItem name="ARTICLES" handleClick={() => router.push('/article')} />
              <NavItem
                name="SHOP"
                handleClick={() => {
                  router.push('/shop');
                }}
              />
            </div>
            <div className="flex items-center justify-end gap-1">
              <NavItem
                name="Organize"
                active={currentPage === 'organizer'}
                handleClick={handleClickOrganize}
                isDropdown={true}
                items={[
                  {
                    name: 'My Organization',
                    key: 'my-organizer',
                    isLink: true,
                    to: '/dashboard/rogue-social/organizer',
                  },
                  {
                    name: 'Producer Dashboard',
                    key: 'producer-dashboard',
                    isLink: true,
                    to: '/',
                  },
                ]}
              />
              <NavItem
                name="Tools"
                active={currentPage === 'tool'}
                handleClick={handleClickTools}
                isDropdown={true}
                items={[
                  {
                    name: 'Video Editor',
                    key: 'video-editor',
                    isLink: true,
                    to: '/video-editor',
                  },
                  {
                    name: 'Customize',
                    key: 'customize',
                    isLink: true,
                    to: '/',
                  },
                  {
                    name: 'Create Article',
                    key: 'create-article',
                    isLink: true,
                    to: '/',
                  },
                  {
                    name: '_divider',
                    key: 'divider',
                  },
                  {
                    name: 'WIKI',
                    key: 'wiki',
                    isLink: true,
                    to: '/wiki',
                  },
                  {
                    name: 'FAQS',
                    key: 'faqs',
                    isLink: true,
                    to: '/faqs',
                  },
                ]}
              />
              <NavItem
                name="Plus Plans"
                active={currentPage === 'plus-plans'}
                handleClick={handleClickPlusPlans}
                isDropdown={true}
                items={[
                  {
                    name: 'Player Plus',
                    key: 'add-player',
                    isLink: true,
                    to: '/',
                  },
                  {
                    name: 'Team Plus',
                    key: 'add-team',
                    isLink: true,
                    to: '/team/create',
                  },
                  {
                    name: 'Organizer Plus',
                    key: 'add-organizer',
                    isLink: true,
                    to: '/organizer/create',
                  },
                ]}
              />
              <NavItemAuth
                name="Auth"
                handleClick={handleClickEvent}
                isDropdown={true}
                items={[
                  {
                    name: 'Sign up',
                    key: 'sign-up',
                    isLink: true,
                    to: '/auth/signup',
                  },
                  {
                    name: 'Login',
                    key: 'login',
                    isLink: true,
                    to: '/auth/signin',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </nav> */}
    </div>
  );
}
