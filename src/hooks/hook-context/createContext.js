import { createContext as createReactContext } from 'react';

const createContext = ({
	name,
	strict = true,
	hookName = 'useContext',
	providerName = 'Provider',
	errorMessage,
	...initialContext
}) => {
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
