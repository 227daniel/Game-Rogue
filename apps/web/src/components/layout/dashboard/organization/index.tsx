'use client';

import { Button } from '@ui/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@ui/components/ui/sheet';
import { ArrowLeftToLine } from 'lucide-react';
import { useParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import OrganizationSidebarComponent from './sidebar';
import { useOrganizations } from '@/hooks/use-organization';
import { useOrganization } from '@/store/use-organization';

export default function OrganizationLayoutComponent({ children }: { children: ReactNode }) {
  const { setCurrentOrganization } = useOrganization();
  const { data: organizations } = useOrganizations();
  const { id } = useParams();

  useEffect(() => {
    setCurrentOrganization(organizations?.find((item) => item._id === id));
    return () => {
      setCurrentOrganization(undefined);
    };
  }, [id, organizations, setCurrentOrganization]);

  return (
    <div className="grid size-full flex-1 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="bg-muted/40 hidden border-r md:block">
        <OrganizationSidebarComponent />
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
            <OrganizationSidebarComponent />
          </SheetContent>
        </Sheet>
        {children}
      </div>
    </div>
  );
}
