'use client';

import { ArrowLeftToLine } from '@repo/ui/icons';
import { Button } from '@ui/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@ui/components/ui/sheet';
import { useParams } from 'next/navigation';
import { type ReactNode, useEffect } from 'react';
import TeamLayoutSidebarComponent from './sidebar';
import { useTeams } from '@/hooks/use-team';
import { useTeam } from '@/store/use-team';

export default function TeamLayoutComponent({ children }: { children: ReactNode }): JSX.Element {
  const { setCurrentTeam } = useTeam();
  const { data: teams } = useTeams();
  const { id } = useParams();

  useEffect(() => {
    setCurrentTeam(teams?.find((item) => item._id === id));
    return () => {
      setCurrentTeam(undefined);
    };
  }, [id, teams, setCurrentTeam]);

  return (
    <div className="grid size-full flex-1 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="bg-muted/40 hidden border-r md:block">
        <TeamLayoutSidebarComponent />
      </div>
      <div className="relative flex flex-col gap-2 p-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="shrink-0 md:hidden" size="icon" variant="ghost">
              <ArrowLeftToLine className="size-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col px-0" side="left">
            <TeamLayoutSidebarComponent />
          </SheetContent>
        </Sheet>
        {children}
      </div>
    </div>
  );
}
