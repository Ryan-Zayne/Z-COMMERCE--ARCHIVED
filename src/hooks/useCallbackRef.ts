import { assertRef } from '@/global-type-helpers';
import { useCallback, useEffect, useRef } from 'react';
/* eslint-disable react-hooks/exhaustive-deps */

/**
 * Custom hook that returns a memoized version of the callback function.
 * The callback function is saved in a ref to persist across renders.
 * If the callback function changes, the ref is updated.


 * @param callbackFn The callback function to memoize.
 * @param deps The dependency list for the useCallback hook.
 * @returns The memoized callback function.
 */

const useCallbackRef = <TValue, TResult>(
	callbackFn: (value: TValue) => TResult,
	deps: React.DependencyList = []
) => {
	const callbackRef = useRef(callbackFn);

	// useEffect hook to save the latest callback function to the ref
	useEffect(() => {
		callbackRef.current = callbackFn;
	}, [callbackFn]);

	const savedCallback = useCallback((value?: TValue) => callbackRef.current(assertRef(value)), deps);

	return savedCallback;
};

export { useCallbackRef };
