import type { TApiResponse, TUser } from '@repo/types';
import apiClient from '@/utils/api-client';

export const getSelf = async (): Promise<TUser> => {
  return await apiClient
    .get(`/auth/profile`)
    .then((res) => res.data as TApiResponse<TUser>)
    .then((data) => data.data);
};
