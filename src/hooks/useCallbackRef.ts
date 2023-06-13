/* eslint-disable react-hooks/exhaustive-deps */
import { assertDefined } from '@/global-helpers.types.';
import { useCallback, useEffect, useRef } from 'react';

const useCallbackRef = <V, R>(callbackFn: (value: V) => R, deps: React.DependencyList = []) => {
	const callbackRef = useRef(callbackFn);

	//* useEffect hook to save the latest callback function to the ref
	useEffect(() => {
		callbackRef.current = callbackFn;
	}, [callbackFn]);

	const savedCallback = useCallback((value?: V) => callbackRef.current(assertDefined(value)), deps);

	return savedCallback;
};

export { useCallbackRef };
