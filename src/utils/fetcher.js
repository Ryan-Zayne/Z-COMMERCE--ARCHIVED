import { axiosInstance } from './axiosInstance';

export const fetcher = (url) => axiosInstance.get(url).then((response) => response.data);
