import { baseURL } from './constants';

export const fetcher = async (url) => {
	const response = await fetch(`${baseURL}/${url}`);

	return response.json();
};
