import DefaultLayoutComponent from '@/components/layout/default';

type RogueSocialProps = {
  children: React.ReactNode;
};

export default function RogueSocial({ children }: RogueSocialProps): JSX.Element {
  return <DefaultLayoutComponent>{children}</DefaultLayoutComponent>;
}
