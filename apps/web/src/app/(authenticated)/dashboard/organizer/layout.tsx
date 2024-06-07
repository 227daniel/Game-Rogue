import OrganizationLayoutComponent from '@/components/layout/dashboard/organization';

type OrganiserPageLayoutProps = {
  children: React.ReactNode;
};

export default function OrganiserPageLayout({ children }: OrganiserPageLayoutProps): JSX.Element {
  return <OrganizationLayoutComponent>{children}</OrganizationLayoutComponent>;
}
