/* eslint-disable no-use-before-define */
import { twMerge } from 'tailwind-merge';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
	theme?: keyof typeof semanticThemes;
	variant?: keyof typeof semanticVariants;
	size?: keyof typeof semanticSizes;
	text?: string;
};

const BaseClasses = 'flex items-center justify-center';

const semanticVariants = {
	regular: 'rounded-[0.5rem]',
	input: 'rounded-[0_2.5rem_2.5rem_0]',
	cart: 'rounded-[0.8rem]',
	shop: 'rounded-[2.5rem]',
};

const semanticThemes = {
	primary: 'bg-primary text-white',
	secondary: 'bg-secondary text-dark',
	ghost: 'bg-transparent text-dark',
};

const semanticSizes = {
	sm: 'p-[1.11rem_1.3rem]',
	md: 'p-[1.1rem_3.5rem]',
	lg: 'p-[1.1rem_4.5rem]',
};

function Button(props: ButtonProps) {
	const {
		children,
		className = '',
		theme = 'ghost',
		variant = 'regular',
		size = 'md',
		text,
		onClick,
	} = props;

	const BTN_CLASSES = twMerge(
		BaseClasses,
		semanticVariants[variant],
		semanticThemes[theme],
		semanticSizes[size],
		className
	);

	return (
		<button className={BTN_CLASSES} onClick={onClick}>
			{children ?? text}
		</button>
	);
}

export default Button;
