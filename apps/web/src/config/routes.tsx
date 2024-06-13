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
import { Calendar, Edit, Ticket, Users } from 'lucide-react';

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

export const organizationSidebarRoutes = (org_id: string) => {
  return [
    {
      label: 'Events',
      component: <TrophyIcon />,
      href: `/dashboard/organization/${org_id}/event`,
    },
    {
      label: 'Matches',
      component: <SwordsIcon />,
      href: `/dashboard/organization/${org_id}/match`,
    },
    {
      label: 'Tickets',
      component: <Ticket />,
      href: `/dashboard/organization/${org_id}/ticket`,
    },
    {
      label: 'Staff',
      component: <Users />,
      href: `/dashboard/organization/${org_id}/staff`,
    },
    {
      label: 'Participants',
      component: <Users />,
      href: `/dashboard/organization/${org_id}/participant`,
    },
    {
      label: 'Event Calendar',
      component: <Calendar />,
      href: `/dashboard/organization/${org_id}/event-calendar`,
    },
    {
      label: 'Event Format',
      component: <TrophyIcon />,
      href: `/dashboard/organization/${org_id}/event-format`,
    },
    {
      label: 'Edit Organization',
      component: <Edit />,
      href: `/dashboard/organization/${org_id}/edit`,
    },
  ];
};
