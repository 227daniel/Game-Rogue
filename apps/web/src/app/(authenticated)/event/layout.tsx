import DefaultLayoutComponent from '@/components/layout/default';

type EventPageLayoutProps = {
  children: React.ReactNode;
};

export default function EventPageLayout({ children }: EventPageLayoutProps): JSX.Element {
  return <DefaultLayoutComponent>{children}</DefaultLayoutComponent>;
}
