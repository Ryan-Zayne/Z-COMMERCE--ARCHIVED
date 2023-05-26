import { twMerge } from 'tailwind-merge';

const DropDown = ({ id = '', isOpen = false, children, className }) => {
	return (
		<div
			id={id}
			className={twMerge(
				`invisible grid grid-rows-[0fr] transition-[visibility,grid-template-rows] duration-[500ms]`,
				[isOpen && 'visible grid-rows-[1fr]'],
				[className]
			)}
		>
			{children}
		</div>
	);
};

const DropDownPanel = ({ id = '', children, className }) => (
	<ul id={id} className={twMerge(`overflow-y-hidden [transition:padding_500ms]`, className)}>
		{children}
	</ul>
);

DropDown.Panel = DropDownPanel;

export default DropDown;
