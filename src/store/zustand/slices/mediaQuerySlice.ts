import { desktopQuery, mobileQuery, tabletQuery } from '@/utils/constants';
import { StateCreator } from 'zustand';
import { GlobalStore, MediaQuerySlice } from '../zustand-store-types';

export const createMediaQuerySlice: StateCreator<GlobalStore, [], [], MediaQuerySlice> = (set) => ({
	isMobile: mobileQuery.matches,
	isTablet: tabletQuery.matches,
	isDesktop: desktopQuery.matches,

	mediaQueryActions: {
		setIsMobile: () => set({ isMobile: mobileQuery.matches }),
		setIsTablet: () => set({ isTablet: tabletQuery.matches }),
		setIsDesktop: () => set({ isDesktop: desktopQuery.matches }),
	},
});
