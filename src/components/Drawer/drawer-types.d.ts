import { StoreApi } from 'zustand';

export type DrawerStore = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	onToggle?: () => void;
};

export type DrawerProviderProps = {
	children: React.ReactNode;
	storeValues: DrawerStore;
};

export type DrawerStoreApi = StoreApi<DrawerStore>;

export type DrawerProps = DrawerStore & {
	children: React.ReactNode;
};

export type DrawerContentProps = {
	children: DrawerProps['children'];
	className?: string;
	placement?: 'left' | 'right';
};

export type DrawerCloseProps = Partial<Omit<DrawerContentProps, 'placement'> & { icon: JSX.Element }>;

export type OtherDrawerProps = Omit<DrawerContentProps, 'placement'>;
