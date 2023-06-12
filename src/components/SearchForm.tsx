import { BiSearchAlt2 } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

const SearchForm = ({
	className = '',
	btnClassName = '',
	inputClassName = '',
	buttonIcon,
	theme,
	variant,
	size,
	placeholder,
	text,
}) => (
	<form
		id="Search Form"
		className={twMerge(`flex items-center ${className}`)}
		onSubmit={(e) => e.preventDefault()}
	>
		<input
			className={twMerge(
				`w-full rounded-[2.5rem_0_0_2.5rem] border-secondary bg-[--color-body,_white] py-[0.6rem] pl-[2.3rem] transition-[box-shadow] duration-200 [border-width:2px_0_2px_2px] placeholder:font-[500] placeholder:text-placeholder focus-within:shadow-[1px_0_10px_2px_var(--color-secondary)] max-sm:placeholder:text-[1.4rem] ${inputClassName}`
			)}
			type="text"
			name="Search"
			placeholder={placeholder ?? 'Search for products...'}
		/>

		<Button
			className={twMerge(
				`px-[2.1rem] text-[1.8rem] transition-[colors,scale] duration-300 hover:bg-primary hover:text-heading active:scale-[1.08] ${btnClassName}`
			)}
			variant={variant ?? 'input'}
			theme={theme ?? 'secondary'}
			size={size ?? 'sm'}
		>
			{text ?? buttonIcon ?? <BiSearchAlt2 />}
		</Button>
	</form>
);

export default SearchForm;
