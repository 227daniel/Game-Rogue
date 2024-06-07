import { Spinner } from '@ui/components/ui/spinner';
import { type ReactNode, Suspense } from 'react';
import SettingsLayoutComponent from '@/components/layout/dashboard/settings';

export default function SettingsLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <SettingsLayoutComponent>
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </SettingsLayoutComponent>
  );
}
