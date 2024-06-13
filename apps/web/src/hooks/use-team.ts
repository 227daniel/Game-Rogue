import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/config/const';
import { getAuthTeamsRequest, getTeamsRequest } from '@/request/team';

export const useTeams = () => {
  const queryKey = [QUERY_KEYS.teams];
  const query = useQuery({
    queryKey,
    queryFn: getTeamsRequest,
  });
  return { ...query, queryKey };
};

export const useAuthTeams = () => {
  const queryKey = [QUERY_KEYS.auth_teams];
  const query = useQuery({
    queryKey,
    queryFn: getAuthTeamsRequest,
  });
  return { ...query, queryKey };
};
