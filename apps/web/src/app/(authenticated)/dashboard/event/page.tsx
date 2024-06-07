import DashboardPageWrapperComponent from '@/components/layout/dashboard/page';
import EventIndexPageComponent from '@/components/pages/dashboard/event';

export default function DashboardEventsHomePage() {
  return (
    <DashboardPageWrapperComponent title="Events">
      <EventIndexPageComponent />
    </DashboardPageWrapperComponent>
  );
}
