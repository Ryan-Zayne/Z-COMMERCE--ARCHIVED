import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Store Object Initializtion
const themeStoreObject = (set, get) => ({
	theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
	isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,

	themeActions: {
		toggleTheme: () => {
			const newtheme = get().theme === 'dark' ? 'light' : 'dark';
			set({ theme: newtheme });
			document.documentElement.setAttribute('data-theme', newtheme);

			document.documentElement.classList.add('theme-transition');
			const timeoutId = setTimeout(() => {
				document.documentElement.classList.remove('theme-transition');
				clearTimeout(timeoutId);
			}, 2000);
		},

		toggleIsDarkMode: () => {
			const newMode = get().theme === 'dark';
			set({ isDarkMode: newMode });
		},
	},
});

// Store hook Creation
export const useThemeStore = create(
	persist(themeStoreObject, {
		name: 'colorScheme',
		partialize: ({ themeActions, ...state }) => state,
	})
);

// Actions hook
export const useThemeActions = () => useThemeStore((state) => state.themeActions);
