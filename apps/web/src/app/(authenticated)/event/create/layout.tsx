import { SidebarLayout } from '@/components/pages/organizer/layout';

type CreateEventPageLayoutProps = {
  children: React.ReactNode;
};

export default function CreateEventPageLayout({
  children,
}: CreateEventPageLayoutProps): JSX.Element {
  return <SidebarLayout>{children}</SidebarLayout>;
}
