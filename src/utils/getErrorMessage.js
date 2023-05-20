export const getErrorMessage = (hook, provider) => {
	return `${hook} returned "undefined". Seems you forgot to wrap component within ${provider}`;
};
