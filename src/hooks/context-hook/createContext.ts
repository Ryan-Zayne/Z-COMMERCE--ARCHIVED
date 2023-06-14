import { createContext as createReactContext, useContext as useReactContext } from 'react';
import { getErrorMessage } from './getErrorMessage';

export type ContextHookType<IObject> = {
	name?: string;
	strict?: boolean;
	hookName?: string;
	providerName?: string;
	errorMessage?: string;
	defaultValue: IObject;
};

const createContext = <T extends object | null>(options: ContextHookType<T>) => {
	const {
		name = 'Unnamed Context',
		strict = true,
		hookName = 'Unnamed Context hook',
		providerName = 'Unnamed Provider',
		errorMessage,
		defaultValue,
	} = options ?? {};

	const Context = createReactContext<T>(defaultValue);

	Context.displayName = name;

	const useContext = () => {
		const context = useReactContext(Context);

		if (context === null && strict) {
			const error = new Error(errorMessage ?? getErrorMessage(hookName, providerName));
			error.name = 'ContextError';
			Error.captureStackTrace?.(error, useContext);
			throw error;
		}

		return context;
	};

	return [Context.Provider, useContext] as const;
};

export default createContext;
