import { useEffect } from 'react';
import { useMediaQueryActions } from '../zustand-store/globalStore';
import { desktopQuery, mobileQuery, tabletQuery } from '../zustand-store/slices/mediaQuerySlice';

const useMediaQuery = () => {
	const { setIsMobile, setIsTablet, setIsDesktop } = useMediaQueryActions();

	useEffect(() => {
		mobileQuery.addEventListener('change', setIsMobile);
		tabletQuery.addEventListener('change', setIsTablet);
		desktopQuery.addEventListener('change', setIsDesktop);

		return () => {
			mobileQuery.removeEventListener('change', setIsMobile);
			tabletQuery.removeEventListener('change', setIsTablet);
			desktopQuery.removeEventListener('change', setIsDesktop);
		};

	}, [setIsDesktop, setIsMobile, setIsTablet]);
};
export default useMediaQuery;
