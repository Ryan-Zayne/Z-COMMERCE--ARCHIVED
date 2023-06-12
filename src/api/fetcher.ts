import { baseURL } from '@/utils/constants';
import { ResponseData } from '../store/react-query/query-hook-types';

export const fetcher = async <TData = ResponseData>(url: string): Promise<TData> => {
	const response = await fetch(`${baseURL}/${url}`);

	return response.json();
};
