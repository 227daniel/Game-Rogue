import { notFound } from 'next/navigation';
import DashboardPageWrapperComponent from '@/components/layout/dashboard/page';
import EventUpdatePageComponent from '@/components/pages/dashboard/event/edit';
import { getEventRequest } from '@/request/event';

export default async function EventEditPage(props: { params: { event_id: string } }) {
  const {
    params: { event_id },
  } = props;
  const event = await getEventRequest(event_id);

  if (!event) {
    return notFound();
  }
  return (
    <DashboardPageWrapperComponent title="Edit Event">
      <EventUpdatePageComponent initialData={event} />
    </DashboardPageWrapperComponent>
  );
}
