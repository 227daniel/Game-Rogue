import type { AxiosError } from 'axios';
import { notFound } from 'next/navigation';
import DashboardPageWrapperComponent from '@/components/layout/dashboard/page';
import SingleOrganizationPageComponent from '@/components/pages/dashboard/organization/single';
import { getSelf } from '@/request/auth';
import { getOrganizationRequest } from '@/request/organization';

interface PageProps {
  params: { id: string };
}
export default async function OrganizationPage(props: PageProps) {
  const { id } = props.params;
  const self = await getSelf();
  const organization = await getOrganizationRequest(id).catch((error: AxiosError) => {
    if (error.response?.status === 404) return notFound();
    throw error;
  });
  const isOrganizer = self._id === organization?.userId;
  return (
    <DashboardPageWrapperComponent title={organization.name}>
      <SingleOrganizationPageComponent
        id={id}
        organization={organization}
        isOrganizer={isOrganizer}
      />
    </DashboardPageWrapperComponent>
  );
}
