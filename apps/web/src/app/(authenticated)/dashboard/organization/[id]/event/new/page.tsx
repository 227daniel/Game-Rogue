import DashboardPageWrapperComponent from '@/components/layout/dashboard/page';
import EventCreatePageComponent from '@/components/pages/dashboard/event/create';

export default function EventCreatePage(props: { params: { id?: string } }) {
  const {
    params: { id },
  } = props;
  console.log(id);
  return (
    <DashboardPageWrapperComponent title="Create Event">
      <EventCreatePageComponent organizationId={id} />
    </DashboardPageWrapperComponent>
  );
}
