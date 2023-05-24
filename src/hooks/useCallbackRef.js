import { useRef, useEffect, useCallback } from 'react';

const useCallbackRef = (callbackFn, deps = []) => {
	const callbackRef = useRef(callbackFn);

	//* useEffect hook to save the latest callback function to the ref
	useEffect(() => {
		callbackRef.current = callbackFn;
	}, [callbackFn]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useCallback((...args) => callbackRef.current(...args), deps);
};

export { useCallbackRef };
