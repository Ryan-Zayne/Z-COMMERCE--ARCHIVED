import { useQueries, useQuery } from '@tanstack/react-query';
import { fetcher } from '../../utils/fetcher';
import { transformData } from '../../utils/transFormData';

const useFetch = ({ key, url, staleTime }) => {
	const queryResult = useQuery({
		// eslint-disable-next-line @tanstack/query/exhaustive-deps
		queryKey: key,
		queryFn: () => fetcher(url),
		staleTime,
		select: transformData,
	});

	return queryResult;
};

const useFetchMultiple = (queryList = []) => {
	const queryResults = useQueries({
		queries: queryList,
	});

	return queryResults;
};

export { useFetch, useFetchMultiple };
