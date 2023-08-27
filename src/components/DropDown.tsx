import type { WithChildren } from '@/global-type-helpers';
import { twMerge } from 'tailwind-merge';

type DropDownProps = WithChildren<{
	className?: string;
	isOpen: boolean;
}>;

type DropDownPanelProps = Omit<DropDownProps, 'isOpen'>;

function DropDown({ isOpen = false, children, className = '' }: DropDownProps) {
	return (
		<div
			className={twMerge(
				`invisible grid grid-rows-[0fr] transition-[visibility,grid-template-rows] duration-[500ms]`,
				[isOpen && 'visible grid-rows-[1fr]'],
				[className]
			)}
		>
			{children}
		</div>
	);
}

function DropDownPanel({ children, className }: DropDownPanelProps) {
	return (
		<ul className={twMerge(`overflow-y-hidden [transition:padding_500ms]`, className)}>{children}</ul>
	);
}

DropDown.Panel = DropDownPanel;

export default DropDown;
