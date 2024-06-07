import DashboardPageWrapperComponent from '@/components/layout/dashboard/page';
import EventCreatePageComponent from '@/components/pages/dashboard/event/create';

export default function EventCreatePage(props: { searchParams: { organizationId?: string } }) {
  const {
    searchParams: { organizationId },
  } = props;
  console.log(organizationId);
  return (
    <DashboardPageWrapperComponent title="Create Event">
      <EventCreatePageComponent organizationId={organizationId} />
    </DashboardPageWrapperComponent>
  );
}
