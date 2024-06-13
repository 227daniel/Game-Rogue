import DashboardPageWrapperComponent from '@/components/layout/dashboard/page';
import EventIndexPageComponent from '@/components/pages/dashboard/event';
import { getOrganizationEventsGroupedByStatusRequest } from '@/request/event';

type DashboardEventsOrganizationHomePageProps = {
  params: {
    id: string;
  };
};

export default async function DashboardEventsOrganizationHomePage({
  params: { id },
}: DashboardEventsOrganizationHomePageProps) {
  const events = await getOrganizationEventsGroupedByStatusRequest(id);
  console.log(events);
  return (
    <DashboardPageWrapperComponent title="Events">
      <EventIndexPageComponent events={events} />
    </DashboardPageWrapperComponent>
  );
}
