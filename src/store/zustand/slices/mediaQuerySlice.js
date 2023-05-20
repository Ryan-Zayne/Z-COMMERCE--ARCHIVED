import { desktopQuery, mobileQuery, tabletQuery } from '../../../utils/constants';

export const createMediaQuerySlice = (set) => ({
	isMobile: mobileQuery.matches,
	isTablet: tabletQuery.matches,
	isDesktop: desktopQuery.matches,

	mediaQueryActions: {
		setIsMobile: () => set({ isMobile: mobileQuery.matches }),
		setIsTablet: () => set({ isTablet: tabletQuery.matches }),
		setIsDesktop: () => set({ isDesktop: desktopQuery.matches }),
	},
});
