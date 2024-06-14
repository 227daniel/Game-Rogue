'use client';

import type { ReactNode } from 'react';
import SharedNavbarMobileComponent from '../shared/navbar-mobile';

export default function DefaultLayoutMobileComponent({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="bg-muted/40 relative flex flex-col">
      <SharedNavbarMobileComponent />
      <main className="flex h-full flex-1 flex-col gap-4 overflow-hidden">{children}</main>
    </div>
  );
}
