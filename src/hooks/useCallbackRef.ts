import { assertRef } from '@/global-helpers.types';
import { useCallback, useEffect, useRef } from 'react';

const useCallbackRef = <V, R>(callbackFn: (value: V) => R, deps: React.DependencyList = []) => {
	const callbackRef = useRef(callbackFn);

	//* useEffect hook to save the latest callback function to the ref
	useEffect(() => {
		callbackRef.current = callbackFn;
	}, [callbackFn]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const savedCallback = useCallback((value?: V) => callbackRef.current(assertRef(value)), deps);

	return savedCallback;
};

export { useCallbackRef };
