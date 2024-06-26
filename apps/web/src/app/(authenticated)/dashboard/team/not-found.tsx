import { Button } from '@ui/components/nextui/button';
import Link from 'next/link';
import DashboardPageWrapperComponent from '@/components/layout/dashboard/page';

export default function NotFoundPage() {
  return (
    <DashboardPageWrapperComponent title="Not Found">
      <div className="flex w-full flex-col items-center gap-4">
        <div className="text-xl font-bold">Page Not Found</div>
        <Button color="warning" as={Link} href="/dashboard/team">
          Go to the index
        </Button>
      </div>
    </DashboardPageWrapperComponent>
  );
}
