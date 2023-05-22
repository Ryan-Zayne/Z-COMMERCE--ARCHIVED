import { useState } from 'react';

/**
 * A custom hook that returns a value from a store and syncs it
 * with a local state.
 * This hook solves NextJs mount hydration issue.
 * @param {function} useStore - A hook that returns state object from
 * the store.
 * @param {function} storeCallback - A callback function that returns the specific state
 * from the store object.
 * @returns {*} - The state value from the store.
 */
const useFromStore = (useStore, storeCallback) => {
	// Get the state value from the store
	const stateFromStore = useStore(storeCallback);
	// Declare a state variable and a function to update it
	const [state, setState] = useState(null);

	// Update the state whenever the stateFromStore value changes
	if (stateFromStore != null && stateFromStore !== state) {
		setState(stateFromStore);
	}

	// Return the current state value
	return state;
};

export { useFromStore };
