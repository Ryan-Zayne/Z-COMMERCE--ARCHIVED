/* eslint-disable consistent-return */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

/**
 * Custom hook for reading and writing to local storage
 * @param {string} key - The key to use for the local storage item
 * @param {*} defaultValue - The default value to use if the local storage item is empty
 * @param {Object} options - Optional configuration for the hook
 * @param {function} options.stringifier - Custom serializer function for the data being stored
 * @param {function} options.parser - Custom parser function for the data being read from storage
 * @param {function} options.logger - Custom logger function for errors
 * @param {boolean} options.syncData - Whether or not to sync changes across tabs (default is true)
 * @returns {Array} An array containing the current value and a function to update the value
 */
const useLocalStorage = (key, defaultValue, options = {}) => {
	const isWindowDefined = useMemo(() => typeof window !== 'undefined', []);

	//* For custom serializer, logger, parser and syncData value
	const opts = useMemo(
		() => ({
			stringifier: JSON.stringify,
			parser: JSON.parse,
			logger: console.log,
			syncData: true,
			...options,
		}),
		[options]
	);

	const { stringifier, parser, logger, syncData } = opts;

	//* Use a ref to store the raw value from local storage, as well as to
	//* track the previous value when syncing across tabs
	const rawValueRef = useRef(null);

	// Use state to store the current value, and attempt to load it from
	// local storage if it exists
	const [value, setValue] = useState(() => {
		if (!isWindowDefined) return defaultValue;

		try {
			rawValueRef.current = window.localStorage.getItem(key);
			const initialState = rawValueRef.current ? parser(rawValueRef.current) : defaultValue;
			return initialState;
		} catch (error) {
			logger(error);
			return defaultValue;
		}
	});

	//* Function for updating the local storage item whenever the value changes
	const updateLocalStorage = useCallback(() => {
		if (!isWindowDefined) return;

		if (value !== undefined) {
			const newValue = stringifier(value);
			const oldValue = rawValueRef.current;
			rawValueRef.current = newValue;

			// Set the local storage item and dispatch a storage event to sync
			// across tabs
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
		} else {
			//* If the value is undefined, remove the local storage item and dispatch
			//* a storage event to sync across tabs
			window.localStorage.removeItem(key);
			window.dispatchEvent(
				new StorageEvent('storage', {
					storageArea: window.localStorage,
					url: window.location.href,
					key,
				})
			);
		}
	}, [isWindowDefined, key, stringifier, value]);

	//* Update the local storage item whenever the value changes
	useEffect(() => {
		try {
			updateLocalStorage();
		} catch (error) {
			logger(error);
		}
	}, [logger, updateLocalStorage]);

	useEffect(() => {
		//* Function for handling storage events and syncing across tabs
		const handleStorageChange = (event) => {
			if (event.key !== key || event.storageArea !== window.localStorage) return;

			try {
				if (event.newValue !== rawValueRef.current) {
					rawValueRef.current = event.newValue;
					setValue(event.newValue ? parser(event.newValue) : undefined);
				}
			} catch (error) {
				logger(error);
			}
		};

		//* Add the storage event listener for syncing across tabs
		if (syncData) {
			window.addEventListener('storage', handleStorageChange);
			return () => {
				window.removeEventListener('storage', handleStorageChange);
			};
		}
	}, [key, logger, parser, syncData]);

	const removeValue = useCallback(() => {
		try {
			window.localStorage.removeItem(key);
			setValue(undefined);
		} catch {
			// If user is in private mode or has storage restriction
			// localStorage can throw.
		}
	}, [key]);

	return [value, setValue, removeValue];
};

export { useLocalStorage };
