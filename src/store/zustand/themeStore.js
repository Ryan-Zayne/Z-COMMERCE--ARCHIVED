import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Store Object Initializtion
const storeObject = (set, get) => ({
	theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
	isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,

	themeActions: {
		switchTheme: () => {
			const newtheme = get().theme === 'dark' ? 'light' : 'dark';
			set({ theme: newtheme });
		},
		toggleDarkMode: () => {
			const newMode = get().theme === 'dark';
			set({ isDarkMode: newMode });
		},
	},
});

// Store hook Creation
export const useThemeStore = create(
	persist(storeObject, {
		name: 'colorScheme',
		partialize: ({ themeActions, ...state }) => state,
	})
);

// Actions hook
export const useThemeActions = () => useThemeStore((state) => state.themeActions);
