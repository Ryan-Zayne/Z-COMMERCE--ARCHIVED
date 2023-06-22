import { useEffect, useRef } from 'react';
import { useCallbackRef } from './useCallbackRef';

/*
A thin wrapper around “useEffect” which
will only fire when the value changes,
and not on mount.
*/

const useEffectOnChange = <TReturn>(callback: () => TReturn, deps: React.DependencyList) => {
	const hasMounted = useRef(false);

	const savedCallback = useCallbackRef(callback);

	useEffect(() => {
		if (!hasMounted.current) {
			hasMounted.current = true;
			return;
		}

		savedCallback();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);
};

export default useEffectOnChange;
