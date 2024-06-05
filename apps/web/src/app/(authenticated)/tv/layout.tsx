import DefaultLayoutTvComponent from '@/components/layout/default/index-tv';
import TVLayoutComponent from '@/components/layout/tv';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps): JSX.Element {
  return (
    <DefaultLayoutTvComponent>
      <TVLayoutComponent>{children}</TVLayoutComponent>
    </DefaultLayoutTvComponent>
  );
}
