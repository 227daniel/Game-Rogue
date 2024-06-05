import { Sidebar } from './sidebar';

type SidebarLayoutProps = {
  children: React.ReactNode;
};

export function SidebarLayout({ children }: SidebarLayoutProps): JSX.Element {
  return (
    <div className="flex size-full flex-1 overflow-auto pt-16">
      <Sidebar />
      <main className="flex flex-1">{children}</main>
    </div>
  );
}
