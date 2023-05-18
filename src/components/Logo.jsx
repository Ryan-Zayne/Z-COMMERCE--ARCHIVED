import { twMerge } from 'tailwind-merge';
import { logo } from '../assets/brand';

const Logo = ({ className = '' }) => {
	return <img className={twMerge(`w-[13rem] md:w-[16rem] ${className}`)} src={logo} alt="" />;
};
export default Logo;
