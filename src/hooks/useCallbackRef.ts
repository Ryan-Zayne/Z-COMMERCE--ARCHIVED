import { useCallback, useEffect, useRef } from 'react';

const useCallbackRef = <T extends (...args: any[]) => unknown>(
	callbackFn: T | undefined,
	deps: React.DependencyList = []
) => {
	const callbackRef = useRef(callbackFn);

	//* useEffect hook to save the latest callback function to the ref
	useEffect(() => {
		callbackRef.current = callbackFn;
	}, [callbackFn]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useCallback(((...callbackArgs) => callbackRef.current?.(...callbackArgs)) as T, deps);
};

export { useCallbackRef };
