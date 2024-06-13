'use client';

import type { ReactNode } from 'react';
import SharedNavbarComponent from '../shared/navbar';

export default function DefaultLayoutComponent({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="bg-muted/40 relative flex flex-col">
      <SharedNavbarComponent />
      <main className="flex h-full flex-1 flex-col gap-4 overflow-hidden">{children}</main>
    </div>
  );
}
