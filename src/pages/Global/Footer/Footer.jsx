import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { MdLocationOn, MdMail, MdPhone } from 'react-icons/md';
import { TfiYoutube } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { twJoin, twMerge } from 'tailwind-merge';
import { DropDown, Logo, SearchForm } from '../../../components';
import { useDisclosure } from '../../../hooks';
import { useThemeStore } from '../../../store/zustand/themeStore';
import { useGlobalStore } from '../../../store/zustand/globalStore';
import newsLetterIcon from './newsletter-icon.svg';
import getOnGoogle from './get-on-google.png';
import getOnApple from './get-on-apple.png';

const Footer = () => {
	const isDarkMode = useThemeStore((state) => state.isDarkMode);
	const isDesktop = useGlobalStore((state) => state.isDesktop);
	const dropOne = useDisclosure();
	const dropTwo = useDisclosure();
	const dropThree = useDisclosure();
	const dropFour = useDisclosure();
	const dropFive = useDisclosure();

	return (
		<footer className="flex flex-col pt-[7rem] lg:pt-[10rem]">
			<section className="flex flex-col gap-[3rem] bg-slate-900 bg-[image:url('/src/pages/Global/Footer/newsletter-bg.png')] bg-cover bg-no-repeat p-[3rem_2rem] [background-position:center] lg:flex-row lg:justify-center lg:gap-[5rem] lg:px-[3rem]">
				<div className="flex flex-col items-center gap-[1rem] lg:min-w-[48rem] lg:gap-[2.5rem]">
					<h4 className="flex items-center text-[1.7rem] font-[500] text-heading lg:text-[2.4rem]">
						<img
							className="mr-[0.3rem] aspect-square w-[3rem] lg:w-[4rem]"
							src={newsLetterIcon}
							alt=""
						/>
						Sign Up For NewsLetter
					</h4>
					<p className="text-[1.4rem] lg:text-[1.8rem]">$20 discount for your first order</p>

					<SearchForm
						className="w-[min(100%,40rem)] lg:w-[90%]"
						btnClassName="p-[0.91rem_1.5rem] text-[1.45rem] font-[500] lg:p-[1.2rem_2.6rem]"
						inputClassName="lg:py-[0.9rem]"
						placeholder={'Enter Your Email address...'}
						text={'Subscribe'}
					/>

					<p className="text-[1.2rem] lg:text-[1.4rem]">Updates on promotions and coupons.</p>
				</div>

				<div className="flex flex-col items-center gap-[1rem] max-lg:border-t-[1px] max-lg:border-t-carousel-btn max-lg:pt-[3rem] lg:min-w-[48rem] lg:gap-[2.5rem] lg:border-l-[1px] lg:border-l-carousel-btn lg:pl-[3rem]">
					<h4 className="flex items-center text-[1.7rem] font-[500] text-heading lg:text-[2.4rem]">
						Download App On Mobile
					</h4>
					<p className="text-[1.4rem] lg:text-[1.8rem]">15% discount on your first purchase</p>
					<span className="flex gap-[0.5rem] lg:gap-[2rem]">
						<img
							className="h-[4.1rem] w-[14rem] lg:h-[5rem] lg:w-[17rem]"
							src={getOnGoogle}
							alt=""
						/>
						<img
							className="h-[4.1rem] w-[14rem] lg:h-[5rem] lg:w-[17rem]"
							src={getOnApple}
							alt=""
						/>
					</span>
					<span className="flex gap-[2rem] text-[2rem]">
						<BsFacebook />
						<BsTwitter />
						<TfiYoutube />
						<BsInstagram />
						<BsPinterest />
					</span>
				</div>
			</section>

			<section className="flex flex-col gap-[2rem] p-[5rem_1.5rem] lg:flex-row lg:justify-between lg:px-[4.4rem]">
				<article>
					<Link to="/" className="ml-[-1.5rem] inline-block lg:ml-[0.8rem]">
						<Logo className={isDarkMode && 'brightness-[0.8] contrast-[1.8]'} />
					</Link>

					<div className="mt-[0.5rem]">
						{!isDesktop && (
							<h4
								className="flex cursor-pointer  items-center justify-between text-[1.5rem] font-[500]"
								onClick={dropOne.onToggle}
							>
								Contact Us
								<FaChevronDown
									className={twJoin(
										`text-[1.5rem] font-[200] transition-transform duration-300`,
										dropOne.isOpen && 'rotate-180'
									)}
								/>
							</h4>
						)}

						<DropDown isOpen={!isDesktop ? dropOne.isOpen : true}>
							<DropDown.Panel
								className={
									'flex flex-col gap-[1rem] pl-[1.5rem] text-[1.4rem] font-[300] lg:font-[400] [&_li]:flex [&_li]:items-center [&_li]:gap-[1rem]'
								}
							>
								<li className="mt-[1rem] w-[27rem]">
									<MdLocationOn />
									60, 29th Street, San Francisco, CA 94110, United States of America
								</li>
								<li>
									<MdPhone />
									(+00) 123-456-789
								</li>
								<li>
									<MdMail />
									digitalgenie@company.com
								</li>
							</DropDown.Panel>
						</DropDown>
					</div>

					<div className="mt-[2rem]">
						{!isDesktop && (
							<h4
								className="flex cursor-pointer items-center justify-between text-[1.5rem] font-[500]"
								onClick={dropTwo.onToggle}
							>
								Follow Us
								<FaChevronDown
									className={twJoin(
										`text-[1.5rem] font-[200] transition-transform duration-300`,
										dropOne.isOpen && 'rotate-180'
									)}
								/>
							</h4>
						)}

						<DropDown isOpen={!isDesktop ? dropTwo.isOpen : true}>
							<DropDown.Panel>
								<span className="flex items-center gap-[2rem] py-[1.5rem] pl-[2.5rem] text-[1.7rem]">
									<BsFacebook />
									<BsTwitter />
									<TfiYoutube />
									<BsInstagram />
									<BsPinterest />
								</span>
							</DropDown.Panel>
						</DropDown>
					</div>
				</article>

				<article className="min-w-[20rem]">
					<h4
						className={twMerge(
							'flex cursor-pointer items-center justify-between text-[1.5rem] font-[500] lg:text-[1.8rem] lg:text-primary',
							isDarkMode && 'lg:text-heading'
						)}
						onClick={dropThree.onToggle}
					>
						Information
						{!isDesktop && (
							<FaChevronDown
								className={twJoin(
									`text-[1.5rem] font-[200] transition-transform duration-300`,
									dropThree.isOpen && 'rotate-180'
								)}
							/>
						)}
					</h4>
					<DropDown isOpen={!isDesktop ? dropThree.isOpen : true}>
						<DropDown.Panel
							className={
								'flex flex-col gap-[1rem] pl-[1.5rem] text-[1.4rem] font-[300] lg:gap-[1.6rem] lg:pl-0 lg:font-[400]'
							}
						>
							<li className="mt-[1.2rem] lg:mt-[3rem]">About Us</li>
							<li>Contact Us</li>
							<li>Terms & Conditions</li>
							<li>Returns & Exchanges</li>
							<li>Shipping & Delivery</li>
						</DropDown.Panel>
					</DropDown>
				</article>

				<article className="min-w-[20rem]">
					<h4
						className={twMerge(
							'flex cursor-pointer items-center justify-between text-[1.5rem] font-[500] lg:text-[1.8rem] lg:text-primary',
							isDarkMode && 'lg:text-heading'
						)}
						onClick={dropFour.onToggle}
					>
						Our Services
						{!isDesktop && (
							<FaChevronDown
								className={twJoin(
									`text-[1.5rem] font-[200] transition-transform duration-300`,
									dropFour.isOpen && 'rotate-180'
								)}
							/>
						)}
					</h4>
					<DropDown isOpen={!isDesktop ? dropFour.isOpen : true}>
						<DropDown.Panel
							className={
								'flex flex-col gap-[1rem] pl-[1.5rem] text-[1.4rem] font-[300] lg:gap-[1.6rem] lg:pl-0 lg:font-[400]'
							}
						>
							<li className="mt-[1.2rem] lg:mt-[3rem]">Your Account</li>
							<li>Return Center</li>
							<li>Purchase App</li>
							<li>Download</li>
							<li>Latest News</li>
						</DropDown.Panel>
					</DropDown>
				</article>

				<article className="min-w-[20rem]">
					<h4
						className={twMerge(
							'flex cursor-pointer items-center justify-between text-[1.5rem] font-[500] lg:text-[1.8rem] lg:text-primary',
							isDarkMode && 'lg:text-heading'
						)}
						onClick={dropFive.onToggle}
					>
						My Account
						{!isDesktop && (
							<FaChevronDown
								className={twMerge(
									`text-[1.5rem] font-[200] transition-transform duration-300`,
									dropFive.isOpen && 'rotate-180'
								)}
							/>
						)}
					</h4>
					<DropDown isOpen={!isDesktop ? dropFive.isOpen : true}>
						<DropDown.Panel
							className={
								'flex flex-col gap-[1rem] pl-[1.5rem] text-[1.4rem] font-[300] lg:gap-[1.6rem] lg:pl-0 lg:font-[400]'
							}
						>
							<li className="mt-[1.2rem] lg:mt-[3rem]">Order History</li>
							<li>Wishlist</li>
							<li>Contact Us</li>
							<li>About Us</li>
							<li>Our Work</li>
						</DropDown.Panel>
					</DropDown>
				</article>
			</section>
			<section className="bg-primary py-[2rem] text-center text-[1.4rem] font-[300] italic text-light">
				<p>Copyright © {new Date().getFullYear()} DigitalGenie</p>
			</section>
		</footer>
	);
};
export default Footer;
