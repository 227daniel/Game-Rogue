import DefaultLayoutComponent from '@/components/layout/default';
import { SidebarLayout } from '@/components/pages/organizer/layout';

type RogueSocialPageLayoutProps = {
  children: React.ReactNode;
};

export default function RogueSocialPageLayout({
  children,
}: RogueSocialPageLayoutProps): JSX.Element {
  return (
    <DefaultLayoutComponent>
      <SidebarLayout>{children}</SidebarLayout>
    </DefaultLayoutComponent>
  );
}
