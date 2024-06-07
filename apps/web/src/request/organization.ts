import { TApiResponse, TOrganization, TOrganizationCreate, TOrganizationUpdate } from '@repo/types';
import { AxiosError } from 'axios';
import apiClient from '@/utils/api-client';

export const getOrganizationRequest = async (id: string) => {
  return await apiClient
    .get(`/organization/${id}`)
    .then((res) => res.data as TApiResponse<TOrganization>)
    .then((data) => data.data);
};

export const createOrganizationRequest = async (
  payload: TOrganizationCreate,
  files: { image?: File; banner?: File }
) => {
  const formData = new FormData();
  if (files?.image) formData.append('image', files.image);
  if (files?.banner) formData.append('banner', files.banner);
  Object.entries(payload).forEach((val) => formData.append(val[0], val[1].toString()));
  return apiClient.post('/organization', formData).catch((error: AxiosError) => {
    throw new Error(
      // @ts-expect-error self defined
      (error.response?.data?.message ?? error.message) as string
    );
  });
};

export const updateOrganizationRequest = async (
  payload: TOrganizationUpdate,
  files: { image?: File; banner?: File }
) => {
  const formData = new FormData();
  if (files?.image) formData.append('image', files.image);
  if (files?.banner) formData.append('banner', files.banner);
  Object.entries(payload).forEach((val) => formData.append(val[0], val[1].toString()));
  return apiClient.put(`/organization/${payload._id}`, formData).catch((error: AxiosError) => {
    throw new Error(
      // @ts-expect-error self defined
      (error.response?.data?.message ?? error.message) as string
    );
  });
};
