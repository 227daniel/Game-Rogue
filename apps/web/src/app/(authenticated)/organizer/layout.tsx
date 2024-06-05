import DefaultLayoutComponent from "@/components/layout/default";
import { SidebarLayout } from "@/components/pages/organizer/layout";

type OrganiserPageLayoutProps = {
  children: React.ReactNode;
};

export default function OrganiserPageLayout({children}: OrganiserPageLayoutProps): JSX.Element {
  return (
    <DefaultLayoutComponent>
      <SidebarLayout>
        {children}
      </SidebarLayout>
    </DefaultLayoutComponent>
  );
}
