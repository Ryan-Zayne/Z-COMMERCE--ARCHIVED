import { useQueries, useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../utils/axiosInstance';

const useFetch = ({ key, url }) => {
	const fetcher = () => axiosInstance.get(url).then((response) => response.data);
	const queryResult = useQuery({ queryKey: key, queryFn: fetcher });

	return queryResult;
};

const useFetchMultiple = (queryList = []) => {
	const queryResults = useQueries({
		queries: queryList,
	});

	return queryResults;
};

export { useFetch, useFetchMultiple };
