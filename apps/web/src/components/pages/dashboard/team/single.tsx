import { TTeam } from '@repo/types';

export default function SingleTeamPageComponent(props: {
  id: string;
  isOrganizer: boolean;
  team: TTeam;
}) {
  const { team } = props;
  return <div className="flex flex-1 flex-col gap-2">{team.name}</div>;
}
