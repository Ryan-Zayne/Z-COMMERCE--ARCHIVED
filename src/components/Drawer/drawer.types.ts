import { ReactPropsWithChildren } from '@/global-helpers.types.';
import { StoreApi } from 'zustand';

// Drawer store types
export type DrawerStore = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	onToggle?: () => void;
};
export type DrawerProviderProps = ReactPropsWithChildren<{ storeValues: DrawerStore }>;
export type DrawerStoreApi = StoreApi<DrawerStore>;

// Drawer component types
export type DrawerProps = ReactPropsWithChildren<DrawerStore>;

export type DrawerContentProps = ReactPropsWithChildren<{
	className?: string;
	placement?: 'left' | 'right';
}>;
export type DrawerCloseProps = Pick<DrawerContentProps, 'className'> & { icon?: JSX.Element };
export type OtherDrawerProps = Omit<DrawerContentProps, 'placement'>;
