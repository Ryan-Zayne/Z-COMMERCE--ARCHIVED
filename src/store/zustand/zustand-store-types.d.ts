//* Global State Types

export type GlobalSlice = {
	isNavShow: boolean;
	isSearchShow: boolean;
	globalActions: {
		toggleNavShow: () => void;
		toggleSearchShow: () => void;
	};
};

export type MediaQuerySlice = {
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
	mediaQueryActions: {
		setIsMobile: () => void;
		setIsTablet: () => void;
		setIsDesktop: () => void;
	};
};

export type GlobalStore = GlobalSlice & MediaQuerySlice;
