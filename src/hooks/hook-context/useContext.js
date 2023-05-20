import { useContext as useReactContext } from 'react';
import { getErrorMessage } from '../../utils/getErrorMessage';

const useContext = (Context) => {
	const context = useReactContext(Context);

	const { strict, hookName, providerName, errorMessage } = context;

	if (!context && strict) {
		const error = new Error(errorMessage || getErrorMessage(hookName, providerName));
		error.name = 'ContextError';
		Error.captureStackTrace?.(error, useContext);
		throw error;
	}

	return context;
};

export default useContext;
