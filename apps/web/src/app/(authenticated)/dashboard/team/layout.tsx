import { Spinner } from '@ui/components/ui/spinner';
import { ReactNode, Suspense } from 'react';

export default function TeamLayout({ children }: { children: ReactNode }) {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
}
