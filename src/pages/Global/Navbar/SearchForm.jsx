import { BiSearchAlt2 } from 'react-icons/bi';
import { Button } from '../../../components';

const SearchForm = ({ className, buttonIcon, theme, variant, size, placeholder, children }) => (
	<form
		id="Search Form"
		className={`flex items-center ${className ?? 'w-[min(100%,_54vw)]'}`}
		onSubmit={(e) => e.preventDefault()}
	>
		<input
			className="w-full rounded-[2.5rem_0_0_2.5rem] border-secondary bg-[--color-body,_white] py-[0.6rem] pl-[2.3rem] transition-[box-shadow] duration-200 [border-width:2px_0_2px_2px] placeholder:font-[500] placeholder:text-placeholder focus-within:shadow-[1px_0_10px_2px_var(--color-secondary)] max-sm:placeholder:text-[1.4rem]"
			type="text"
			name="Search"
			placeholder={placeholder ?? 'Search for products...'}
		/>

		<Button
			className="px-[2.1rem] text-[1.8rem] transition-[colors,scale] duration-300 hover:bg-primary hover:text-heading active:scale-[1.08]"
			variant={variant ?? 'input'}
			theme={theme ?? 'secondary'}
			size={size ?? 'sm'}
		>
			{children ?? buttonIcon ?? <BiSearchAlt2 />}
		</Button>
	</form>
);

export default SearchForm;
