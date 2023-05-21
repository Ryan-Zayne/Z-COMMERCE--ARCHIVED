import { createContext as createReactContext } from 'react';

const createContext = (options) => {
	const {
		name = 'Unnamed Context',
		strict = true,
		hookName = 'Unnamed Context hook',
		providerName = 'Unnamed Provider',
		errorMessage,
		...initialContext
	} = options;

	const contextValues = {
		name,
		strict,
		hookName,
		providerName,
		errorMessage,
		initialContext,
	};

	const Context = createReactContext(contextValues);
	Context.displayName = name;

	return Context;
};

export default createContext;
