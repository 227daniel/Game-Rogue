import { LayoutDashboard } from '@ui/icons';

export const siteTitle = 'My Site';
export function SiteDefaultIcons({ className = 'w-4 h-4' }: { className?: string }): JSX.Element {
  return (
    <LayoutDashboard
      absoluteStrokeWidth
      className={className}
      fill="currentColor"
      fillOpacity={1}
    />
  );
}

export const maxOrganizationCnt = 3;

export const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const QUERY_KEYS = {
  profile: 'profile',
  organizations: 'organizations',
  auth_organization: 'auth_organization',
  games: 'games',
  teams: 'teams',
  auth_teams: 'auth_teams',
  events: 'events',
};

export const isDev = process.env.NODE_ENV !== 'production';

export const authConfig = {
  secret: process.env.AUTH_SECRET || 'secret',
  google: { clientId: process.env.AUTH_GOOGLE_ID!, secret: process.env.AUTH_GOOGLE_SECRET! },
};

export const liveKitConfig = {
  apiUrl: process.env.LIVEKIT_API_URL!,
  apiKey: process.env.LIVEKIT_API_KEY!,
  secretKey: process.env.LIVEKIT_SECRET_KEY!,
  wsUrl: process.env.NEXT_PUBLIC_LIVEKIT_WS_URL!,
};

export const stripeConfig = {
  publishKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
};

export const orgs_data = [
  {
    label: 'Eurogames',
    value: 'eurogames',
  },
  {
    label: 'Asiagames',
    value: 'asiagames',
  },
  {
    label: 'Afrigames',
    value: 'afrigames',
  },
];

export const event_format_data = [
  {
    label: 'League',
    value: 'league',
  },
  {
    label: 'Tournament',
    value: 'tournament',
  },
];

export const course_type_data = [
  {
    label: 'Single Elimination',
    value: 'single_elimination',
  },
  {
    label: 'Double Elimination',
    value: 'double_elimination',
  },
  {
    label: 'Ladder Elimination',
    value: 'ladder_elimination',
  },
  {
    label: 'Pyramid Elimination',
    value: 'pyramid_elimination',
  },
  {
    label: '2 Division Split Elimination',
    value: '2_division_split_elimination',
  },
  {
    label: 'Baku Elimination',
    value: 'baku_elimination',
  },
];

export const seed_type_data = [
  {
    label: 'Manual',
    value: 'manual',
  },
  {
    label: 'Random',
    value: 'random',
  },
];

export const game_data = [
  {
    label: 'Rainbow six siege',
    value: 'rainbow_six_siege',
  },
];

export const time_zones_data = [
  {
    label: 'Atlantic Standard Time',
    value: 'atlantic_standard_time',
  },
  {
    label: 'Eastern Standard Time',
    value: 'eastern_standard_time',
  },
  {
    label: 'Central Standard Time',
    value: 'central_standard_time',
  },
  {
    label: 'Mountain Standard Time',
    value: 'mountain_standard_time',
  },
  {
    label: 'Pacific Standard Time',
    value: 'pacific_standard_time',
  },
  {
    label: 'Alaskan Standard Time',
    value: 'alaskan_standard_time',
  },
];

export const platform_data = [
  {
    label: 'Xbox',
    value: 'xbox',
  },
  {
    label: 'PC',
    value: 'PC',
  },
  {
    label: 'PS4',
    value: 'PS4',
  },
  {
    label: 'Cross Platform',
    value: 'cross_platform',
  },
];

export const region_data = [
  {
    label: 'North America',
    value: 'north_america',
  },
  {
    label: 'Latin America',
    value: 'latin_america',
  },
  {
    label: 'Europe',
    value: 'europe',
  },
];
