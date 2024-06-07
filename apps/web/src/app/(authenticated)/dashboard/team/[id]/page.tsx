import { AxiosError } from 'axios';
import { notFound } from 'next/navigation';
import DashboardPageWrapperComponent from '@/components/layout/dashboard/page';
import SingleTeamPageComponent from '@/components/pages/dashboard/team/single';
import { getSelf } from '@/request/auth';
import { getTeamRequest } from '@/request/team';

export default async function TeamViewPage(props: { params: { id: string } }) {
  const id = props.params.id;
  const team = await getTeamRequest(id).catch((error: AxiosError) => {
    if (error.response?.status === 404) return notFound();
    throw error;
  });
  const self = await getSelf();
  const isOrganizer = self._id === team.userId;
  return (
    <DashboardPageWrapperComponent title={team.name}>
      <SingleTeamPageComponent id={id} team={team} isOrganizer={isOrganizer} />
    </DashboardPageWrapperComponent>
  );
}
