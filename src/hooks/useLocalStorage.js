import { useEffect, useMemo, useRef, useState, useCallback } from 'react';

const useLocalStorage = (key, defualtValue, options = {}) => {
	const isWindowDefined = useMemo(() => typeof window !== 'undefined', []);

	// For custom serializer, logger, parser and syncData value
	const opts = useMemo(
		() => ({
			serializer: JSON.stringify,
			parser: JSON.parse,
			logger: console.log,
			syncData: true,
			...options,
		}),
		[options]
	);

	const { serializer, parser, logger, syncData } = opts;

	const rawValueRef = useRef(null);

	const [value, setValue] = useState(() => {
		if (!isWindowDefined) return defualtValue;

		try {
			rawValueRef.current = window.localStorage.getItem(key);
			const initialState = rawValueRef.current ? parser(rawValueRef.current) : defualtValue;
			return initialState;
		} catch (error) {
			logger(error);
			return defualtValue;
		}
	});

	const updateLocalStorage = useCallback(() => {
		if (!isWindowDefined) return;

		if (value !== undefined) {
			const newValue = serializer(value);
			const oldValue = rawValueRef.current;
			rawValueRef.current = newValue;

			window.localStorage.setItem(key, newValue);
			window.dispatchEvent(
				new StorageEvent('storage', {
					storageArea: window.localStorage,
					url: window.location.href,
					key,
					newValue,
					oldValue,
				})
			);
			// This removes the state value from localStorage if it is set to undefined
		} else {
			window.localStorage.removeItem(key);
			window.dispatchEvent(
				new StorageEvent('storage', {
					storageArea: window.localStorage,
					url: window.location.href,
					key,
				})
			);
		}
	}, [isWindowDefined, key, serializer, value]);

	useEffect(() => {
		try {
			updateLocalStorage();
		} catch (error) {
			logger(error);
		}
	}, [logger, updateLocalStorage]);

	const handleStorageChange = useCallback(
		(event) => {
			if (event.key !== key || event.storageArea !== window.localStorage) return;

			try {
				if (event.newValue !== rawValueRef.current) {
					rawValueRef.current = event.newValue;
					setValue(event.newValue ? parser(event.newValue) : undefined);
				}
			} catch (error) {
				logger(error);
			}
		},
		[key, logger, parser, rawValueRef, setValue]
	);

	// eslint-disable-next-line consistent-return
	useEffect(() => {
		if (syncData) {
			window.addEventListener('storage', handleStorageChange);
			return () => {
				window.removeEventListener('storage', handleStorageChange);
			};
		}
	}, [handleStorageChange, syncData]);

	return [value, setValue];
};

export default useLocalStorage;
