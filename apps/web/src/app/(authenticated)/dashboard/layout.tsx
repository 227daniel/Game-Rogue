import { Spinner } from '@ui/components/ui/spinner';
import { type ReactNode, Suspense } from 'react';
import DashboardLayoutComponent from '@/components/layout/dashboard';

export default function DashboardLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <DashboardLayoutComponent>
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </DashboardLayoutComponent>
  );
}
