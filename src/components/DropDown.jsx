import { twMerge } from 'tailwind-merge';

const DropDown = ({ id, isOpen, children, className }) => {
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

export default DropDown;
