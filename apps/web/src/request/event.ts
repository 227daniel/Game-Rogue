import { TApiResponse, TEvent, TEventCreate, TEventUpdate, TOrganization } from '@repo/types';
import { AxiosError } from 'axios';
import apiClient from '@/utils/api-client';

export const createEventRequest = async (
  payload: TEventCreate,
  files: {
    event_graphic?: File;
    rulebook_file?: File;
    terms_conditions_file?: File;
    terms_privacy_policy_file?: File;
    event_logo_dark?: File;
    event_logo_light?: File;
  }
) => {
  const formData = new FormData();
  if (files?.event_graphic) formData.append('event_graphic', files.event_graphic);
  if (files?.event_logo_dark) formData.append('event_logo_dark', files.event_logo_dark);
  if (files?.event_logo_light) formData.append('event_logo_light', files.event_logo_light);
  if (files?.rulebook_file) formData.append('rulebook_file', files.rulebook_file);
  if (files?.terms_conditions_file)
    formData.append('terms_conditions_file', files.terms_conditions_file);
  if (files?.terms_privacy_policy_file)
    formData.append('terms_privacy_policy_file', files.terms_privacy_policy_file);
  Object.entries(payload).forEach((val) => formData.append(val[0], val[1].toString()));
  return apiClient
    .post('/event', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .catch((error: AxiosError) => {
      throw new Error(
        // @ts-expect-error self defined
        (error.response?.data?.message ?? error.message) as string
      );
    });
};
export const updateEventRequest = async (
  payload: TEventUpdate,
  files: {
    event_graphic?: File;
    rulebook_file?: File;
    terms_conditions_file?: File;
    terms_privacy_policy_file?: File;
    event_logo_dark?: File;
    event_logo_light?: File;
  },
  id: string
) => {
  const formData = new FormData();
  if (files?.event_graphic) formData.append('event_graphic', files.event_graphic);
  if (files?.event_logo_dark) formData.append('event_logo_dark', files.event_logo_dark);
  if (files?.event_logo_light) formData.append('event_logo_light', files.event_logo_light);
  if (files?.rulebook_file) formData.append('rulebook_file', files.rulebook_file);
  if (files?.terms_conditions_file)
    formData.append('terms_conditions_file', files.terms_conditions_file);
  if (files?.terms_privacy_policy_file)
    formData.append('terms_privacy_policy_file', files.terms_privacy_policy_file);
  Object.entries(payload).forEach((val) => formData.append(val[0], val[1].toString()));
  return apiClient
    .put(`/event/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .catch((error: AxiosError) => {
      throw new Error(
        // @ts-expect-error self defined
        (error.response?.data?.message ?? error.message) as string
      );
    });
};

export const getEventRequest = async (id: string) => {
  return await apiClient
    .get(`/event/id/${id}`)
    .then((res) => res.data as TApiResponse<TEvent & { organization: TOrganization }>)
    .then((data) => data.data);
};

export const getEventsByOrganizationRequest = async (org_id: string) => {
  return await apiClient
    .get(`/event/organization/${org_id}`)
    .then((res) => res.data as TApiResponse<TEvent[]>)
    .then((data) => data.data);
};

export const getEventsRequest = async () => {
  return await apiClient
    .get(`/event`)
    .then((res) => res.data as TApiResponse<TEvent[]>)
    .then((data) => data.data);
};

export const getEventsByStatusRequest = async (status: TEvent['status']) => {
  return await apiClient
    .get(`/event?status=${status}`)
    .then((res) => res.data as TApiResponse<TEvent[]>)
    .then((data) => data.data);
};

export const getEventsGroupedByStatusRequest = async () => {
  return await apiClient
    .get(`/event/status/grouped`)
    .then((res) => res.data as TApiResponse<{ events: TEvent[]; status: string }[]>)
    .then((data) => data.data);
};

export const getOrganizationEventsGroupedByStatusRequest = async (org_id: string) => {
  return await apiClient
    .get(`/event/organization/${org_id}/status/grouped`)
    .then((res) => res.data as TApiResponse<{ events: TEvent[]; status: string }[]>)
    .then((data) => data.data);
};

export const deleteEventRequest = async (id: string) => {
  return await apiClient
    .delete(`/event/${id}`)
    .then((res) => res.data as TApiResponse<TEvent>)
    .then((data) => data.data);
};
