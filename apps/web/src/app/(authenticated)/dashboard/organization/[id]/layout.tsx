import { ReactNode } from 'react';
import OrganizationLayoutComponent from '@/components/layout/dashboard/organization';

export default function OrganizationLayout({ children }: { children: ReactNode }) {
  return <OrganizationLayoutComponent>{children}</OrganizationLayoutComponent>;
}
