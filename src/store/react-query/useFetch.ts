import { fetcher } from '@/api/fetcher';
import { QueryFunction, useQueries, useQuery } from '@tanstack/react-query';
import { transformData } from './helpers';
import { ResponseData } from './query-hook.types';

type FetchOptions = {
	key: string[];
	url: string;
	staleTime?: number;
};

type QueryListParam = Array<{
	queryKey: string[];
	queryFn: QueryFunction<ResponseData, QueryListParam[number]['queryKey']>;
	select: typeof transformData;
	staleTime?: number;
}>;

const useFetch = ({ key, url, staleTime }: FetchOptions) =>
	useQuery({
		// eslint-disable-next-line @tanstack/query/exhaustive-deps
		queryKey: key,
		queryFn: () => fetcher(url),
		staleTime,
		select: transformData,
	});

const useFetchMultiple = (queryList: QueryListParam) =>
	useQueries({
		queries: queryList,
	});

export { useFetch, useFetchMultiple };
