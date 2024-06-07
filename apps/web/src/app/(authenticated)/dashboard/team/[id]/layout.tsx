import { ReactNode } from 'react';
import TeamLayoutComponent from '@/components/layout/dashboard/team';

export default function TeamLayout({ children }: { children: ReactNode }) {
  return <TeamLayoutComponent>{children}</TeamLayoutComponent>;
}
