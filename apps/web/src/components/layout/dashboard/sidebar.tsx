'use client';

import { ScrollShadow } from '@ui/components/nextui/scroll-shadow';
import ProfileAvatarComponent from '@ui/components/shared/profile-avatar';
import { Separator } from '@ui/components/ui/separator';
import { Spinner } from '@ui/components/ui/spinner';
import { Tooltip, TooltipContent, TooltipTrigger } from '@ui/components/ui/tooltip';
import { CastleIcon, LandmarkIcon, PlusCircleIcon, Settings } from '@ui/icons';
import { cn } from '@ui/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SidebarItemComponent from './sidebar-item';
import { maxOrganizationCnt, SiteDefaultIcons, siteTitle } from '@/config/const';
import { dashboardRoutes } from '@/config/routes';
import { useAuthOrganizations } from '@/hooks/use-organization';
import { useAuthTeams } from '@/hooks/use-team';

export default function DashboardLayoutSidebarComponent(): JSX.Element {
  const pathname = usePathname();
  const {
    data: organizations,
    isPending: isOrganizationsPending,
    error: organizationsError,
  } = useAuthOrganizations();
  const { data: teams, isPending: isTeamsPending, error: teamsError } = useAuthTeams();
  return (
    <aside className="bg-background fixed inset-y-0 left-0 z-10 h-screen w-14">
      <ScrollShadow
        as="div"
        hideScrollBar
        className="relative flex h-screen w-full flex-col border-r p-2"
      >
        <nav className="flex flex-col items-center gap-4 py-2">
          <Link
            className="text-primary-foreground bg-primary group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold sm:hidden md:size-8 md:text-base"
            href="#"
          >
            <SiteDefaultIcons />
            <span className="sr-only">{siteTitle}</span>
          </Link>
          {dashboardRoutes.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  className={cn(
                    'flex items-center justify-center transition-colors rounded-lg h-9 w-9 hover:text-foreground md:h-8 md:w-8',
                    {
                      'text-muted-foreground': !pathname.startsWith(item.href),
                      'text-primary': pathname.startsWith(item.href),
                    }
                  )}
                  href={item.href}
                >
                  {item.component}
                  <span className="sr-only">{item.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{item.title}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <Separator orientation="horizontal" />
        <ScrollShadow
          as="nav"
          hideScrollBar
          className="flex min-h-[100px] flex-1 flex-col items-center gap-2 py-2"
        >
          <SidebarItemComponent
            title="Team"
            href="/dashboard/team"
            isActive={pathname == '/dashboard/team'}
            icon={<CastleIcon className="size-5" />}
          />
          {isTeamsPending ? (
            <Spinner />
          ) : teamsError ? (
            <span>{teamsError.message}</span>
          ) : teams.length > 0 ? (
            <div className="flex flex-col items-center gap-2">
              {teams.map((item) => (
                <SidebarItemComponent
                  key={item._id}
                  title={item.name}
                  href={`/dashboard/team/${item._id}`}
                  icon={
                    <ProfileAvatarComponent
                      src={item.image}
                      color="primary"
                      isBordered={pathname.startsWith(`/dashboard/team/${item._id}`)}
                      name={item.name}
                      size="sm"
                      radius="full"
                    />
                  }
                />
              ))}
            </div>
          ) : null}
          <SidebarItemComponent
            title="Create Team"
            href="/dashboard/team/new"
            isActive={pathname.startsWith('/dashboard/team/new')}
            icon={<PlusCircleIcon className="size-5" />}
          />
        </ScrollShadow>
        <Separator orientation="horizontal" />
        <nav className="flex flex-col items-center gap-2 py-2">
          <SidebarItemComponent
            title="Organization"
            href="/dashboard/organization"
            isActive={pathname == '/dashboard/organization'}
            icon={<LandmarkIcon className="size-5" />}
          />
          {isOrganizationsPending ? (
            <Spinner />
          ) : organizationsError ? (
            <span>{organizationsError.message}</span>
          ) : organizations.length > 0 ? (
            <div className="flex flex-col items-center gap-2">
              {organizations.map((item) => (
                <SidebarItemComponent
                  key={item._id}
                  title={item.name}
                  href={`/dashboard/organization/${item._id}`}
                  icon={
                    <ProfileAvatarComponent
                      src={item.image}
                      color="primary"
                      isBordered={pathname.startsWith(`/dashboard/organization/${item._id}`)}
                      name={item.name}
                      size="sm"
                      radius="full"
                    />
                  }
                />
              ))}
            </div>
          ) : null}
          {!isOrganizationsPending &&
            !organizationsError &&
            organizations.length < maxOrganizationCnt && (
              <SidebarItemComponent
                title="Create Organization"
                href="/dashboard/organization/new"
                isActive={pathname.startsWith('/dashboard/organization/new')}
                icon={<PlusCircleIcon className="size-5" />}
              />
            )}
        </nav>
        <Separator orientation="horizontal" />
        <nav className="flex flex-col items-center gap-4 py-1">
          <SidebarItemComponent
            title="Settings"
            href="/dashboard/settings"
            isActive={pathname.startsWith('/dashboard/settings')}
            icon={<Settings className="size-5" />}
          />
        </nav>
      </ScrollShadow>
    </aside>
  );
}
