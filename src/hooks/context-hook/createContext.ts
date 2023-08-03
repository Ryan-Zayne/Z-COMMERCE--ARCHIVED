import { createContext as createReactContext, useContext as useReactContext } from 'react';
import { getErrorMessage } from './getErrorMessage';

export type ContextHookType<TContext> = {
	name?: string;
	strict?: boolean;
	hookName?: string;
	providerName?: string;
	errorMessage?: string;
	defaultValue: TContext;
};

const createContext = <TContextObject extends object | null>(options: ContextHookType<TContextObject>) => {
	const {
		name = 'Unnamed Context',
		strict = true,
		hookName = 'Unnamed Context hook',
		providerName = 'Unnamed Provider',
		errorMessage,
		defaultValue,
	} = options ?? {};

	const Context = createReactContext<TContextObject>(defaultValue);
	Context.displayName = name;

	// Extending useContext
	const useContext = () => {
		const contextValue = useReactContext(Context);

		if (strict && contextValue === null) {
			const error = new Error(errorMessage ?? getErrorMessage(hookName, providerName));
			error.name = 'ContextError';
			Error.captureStackTrace?.(error, useContext);
			throw error;
		}

		return contextValue;
	};

	return [Context.Provider, useContext] as const;
};

export default createContext;
