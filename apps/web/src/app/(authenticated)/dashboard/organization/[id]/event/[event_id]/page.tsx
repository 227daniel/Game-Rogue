import { notFound } from 'next/navigation';
import DashboardPageWrapperComponent from '@/components/layout/dashboard/page';
import SingleEventPageComponent from '@/components/pages/dashboard/event/single';
import { getSelf } from '@/request/auth';
import { getEventRequest } from '@/request/event';

export default async function EventViewPage(props: { params: { event_id: string } }) {
  const event_id = props.params.event_id;
  const event = await getEventRequest(event_id);
  if (!event) return notFound();
  const self = await getSelf();
  const isOrganizer = self._id === event?.organization.userId;
  return (
    <DashboardPageWrapperComponent title={event.name}>
      <SingleEventPageComponent id={event_id} event={event} isOrganizer={isOrganizer} />
    </DashboardPageWrapperComponent>
  );
}
