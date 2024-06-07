import { TEventCreate, TEventUpdate, ZEvent } from '@repo/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/config/const';
import {
  createEventRequest,
  getEventsByOrganizationRequest,
  getEventsByStatusRequest,
  getEventsRequest,
  updateEventRequest,
} from '@/request/event';

export const useEvents = () => {
  const queryKey = [QUERY_KEYS.events];
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      return getEventsRequest();
    },
  });
  return { ...query, queryKey };
};

export const useEventsByStatus = (status: 'COMPLETED' | 'UPCOMING' | 'ONGOING') => {
  const queryKey = [QUERY_KEYS.events, status];
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      return getEventsByStatusRequest(status);
    },
  });
  return { ...query, queryKey };
};

export const useEventsByOrganization = (org_id: string) => {
  const queryKey = [QUERY_KEYS.events, org_id];
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      return getEventsByOrganizationRequest(org_id);
    },
  });
  return { ...query, queryKey };
};

export const useUpdateEvent = () => {
  const mutate = useMutation({
    mutationFn: async ({
      _id,
      data,
      files,
    }: {
      _id?: string;
      data: TEventCreate | TEventUpdate;
      files?: {
        event_graphic?: File;
        rulebook_file?: File;
        terms_conditions_file?: File;
        terms_privacy_policy_file?: File;
        event_logo_dark?: File;
        event_logo_light?: File;
      };
    }) => {
      const payload = ZEvent.omit({
        event_graphic: true,
        rulebook_file: true,
        terms_conditions_file: true,
        terms_privacy_policy_file: true,
        event_logo_dark: true,
        event_logo_light: true,
      }).parse(data);
      if (_id) return updateEventRequest(payload, { ...files }, _id);
      return createEventRequest(payload, { ...files });
    },
  });
  return mutate;
};
