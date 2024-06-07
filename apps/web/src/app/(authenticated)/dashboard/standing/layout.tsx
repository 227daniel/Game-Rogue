import { Spinner } from '@ui/components/ui/spinner';
import { ReactNode, Suspense } from 'react';

export default function DashboardStandingLayout({ children }: { children: ReactNode }) {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
}
