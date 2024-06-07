import {
  AppWindow,
  HomeIcon,
  MedalIcon,
  Package,
  PlusCircle,
  Settings,
  SwordsIcon,
  TrophyIcon,
  User,
} from '@ui/icons';

export const siteRoutes = [
  { title: 'Dashboard', href: '/dashboard', component: <Package /> },
  { title: 'TV', href: '/tv', component: <Package /> },
  { title: 'Admin', href: '/admin', component: <AppWindow /> },
];

export const dashboardRoutes = [
  { title: 'Home', href: '/dashboard/home', component: <HomeIcon /> },
  { title: 'Events', href: '/dashboard/event', component: <TrophyIcon /> },
  { title: 'Matches', href: '/dashboard/match', component: <SwordsIcon /> },
  { title: 'Standing', href: '/dashboard/standing', component: <MedalIcon /> },
];

export const settingsRoutes = [
  { title: 'General', href: '/dashboard/settings/general', component: <Settings /> },
  { title: 'Profile', href: '/dashboard/settings/profile', component: <User /> },
  { title: 'Appearance', href: '/dashboard/settings/appearance', component: <AppWindow /> },
  { title: 'TV', href: '/dashboard/settings/broadcast', component: <Package /> },
];

export const teamRoutes = [
  { title: 'Create Team', href: '/dashboard/team/new', component: <PlusCircle /> },
];
