export const mobileQuery = window.matchMedia('(max-width: 767px)');
export const tabletQuery = window.matchMedia('(min-width: 768px)');
export const desktopQuery = window.matchMedia('(min-width: 1000px)');

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
