'use client';

import type { ReactNode } from 'react';
import SharedNavbarTvComponent from '../shared/navbar-tv';

export default function DefaultLayoutTvComponent({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="bg-muted/40 relative flex min-h-screen flex-col overflow-auto">
      <SharedNavbarTvComponent />
      <main className="flex flex-1 flex-col gap-4 overflow-auto">{children}</main>
    </div>
  );
}
