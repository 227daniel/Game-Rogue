'use client';

import type { ReactNode } from 'react';
import SharedNavbarComponent from '../shared/navbar';
import SharedNavbarMobileComponent from '../shared/navbar-mobile';

export default function DefaultLayoutComponent({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>
      <div className="bg-muted/40 relative flex flex-col max-sm:hidden sm:hidden md:hidden lg:block">
        <SharedNavbarComponent />
        <main className="flex h-full flex-1 flex-col gap-4 overflow-hidden">{children}</main>
      </div>
      <div className="bg-muted/40 relative flex flex-col max-sm:block sm:block md:block lg:hidden">
        <SharedNavbarMobileComponent />
        <main className="flex h-full flex-1 flex-col gap-4 overflow-hidden">{children}</main>
      </div>
    </>
  );
}
