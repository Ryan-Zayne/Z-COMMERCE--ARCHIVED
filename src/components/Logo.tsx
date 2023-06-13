import { twMerge } from 'tailwind-merge';
import { logo } from '../assets/brand';

function Logo({ className = '' }: { className?: string }) {
	return (
		<img
			className={twMerge(`min-h-[4.47rem] w-[13rem] md:min-h-[5.5rem] md:w-[16rem] ${className}`)}
			src={logo}
			alt=""
		/>
	);
}
export default Logo;
