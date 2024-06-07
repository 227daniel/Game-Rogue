'use client';

import { cn } from '@ui/lib/utils';
import { LandmarkIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { organizationSidebarRoutes } from '@/config/routes';
import { useOrganization } from '@/store/use-organization';

export default function OrganizationSidebarComponent() {
  const pathname = usePathname();
  const { currentOrganization } = useOrganization();
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="bg-background flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link className="text-muted-foreground flex items-center gap-2 font-semibold" href="/">
          <LandmarkIcon />
          <span className="">Organization</span>
        </Link>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {currentOrganization && (
            <>
              {organizationSidebarRoutes(currentOrganization?._id ?? '').map((item) => (
                <Link
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 transition-all rounded-lg hover:text-foreground',
                    {
                      'text-muted-foreground/80': !pathname.startsWith(item.href),
                      'text-primary': pathname.startsWith(item.href),
                    }
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.component}
                  {item.label}
                </Link>
              ))}
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
