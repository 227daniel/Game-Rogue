import { TApiResponse, TTeam, TTeamCreate, TTeamUpdate, TTeamUpdateParticipant } from '@repo/types';
import { AxiosError } from 'axios';
import apiClient from '@/utils/api-client';

export const getTeamsRequest = async () => {
  return await apiClient
    .get('/team')
    .then((res) => res.data as TApiResponse<TTeam[]>)
    .then((data) => data.data);
};

export const getTeamRequest = async (id: string) => {
  return await apiClient
    .get(`/team/${id}`)
    .then((res) => res.data as TApiResponse<TTeam>)
    .then((data) => data.data);
};

export const getAuthTeamsRequest = async () => {
  return await apiClient
    .get('/auth/team')
    .then((res) => res.data as TApiResponse<TTeam[]>)
    .then((data) => data.data);
};

export const createTeamRequest = async (
  payload: TTeamCreate,
  files?: { image?: File; banner?: File }
) => {
  const formData = new FormData();
  if (files?.image) formData.append('image', files.image);
  if (files?.banner) formData.append('banner', files.banner);
  Object.entries(payload).forEach((val) => formData.append(val[0], val[1].toString()));
  return apiClient
    .post('/team', formData, {
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

export const updateTeamRequest = async (
  payload: TTeamUpdate,
  files?: { image?: File; banner?: File }
) => {
  const formData = new FormData();
  if (files?.image) formData.append('image', files.image);
  if (files?.banner) formData.append('banner', files.banner);
  Object.entries(payload).forEach((val) => formData.append(val[0], val[1].toString()));
  return apiClient
    .put(`/team/${payload._id}`, formData, {
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

export const updateTeamParticipantRequest = async (id: string, payload: TTeamUpdateParticipant) => {
  return apiClient.put(`/team/${id}/participant`, payload);
};
