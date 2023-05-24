import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button, Logo } from '../../components';
import { useGlobalStore } from '../../store/zustand/globalStore';

const Register = () => {
	const isDesktop = useGlobalStore((state) => state.isDesktop);

	return (
		<section className="relative flex min-h-screen items-center justify-center bg-[url(/src/pages/Register/images/yellow-cart-bg.webp)] bg-cover bg-no-repeat py-[2rem] lg:justify-between lg:bg-[url(/src/pages/Register/images/glitter.jpg)] lg:px-[10rem]">
			<div className="absolute inset-0 z-[1] bg-[hsl(0,0%,0%,0.5)]" />

			{isDesktop && (
				<div className="relative bottom-[4rem] z-10 ml-[-0.8rem] w-[14rem] brightness-[0.8] contrast-[1.5] lg:w-[25rem]">
					<Logo className="w-[initial] md:w-[initial]" />
				</div>
			)}

			<div className="relative z-10 w-[min(100%,50rem)] rounded-[4px] bg-body p-[3rem_5rem]">
				<header>
					{!isDesktop && (
						<div className="ml-[-0.8rem] w-[14rem]">
							<Logo className="w-[initial] md:w-[initial]" />
						</div>
					)}
					<h2 className="text-[3.6rem] font-[600] text-[hsl(38,9%,76%)] max-lg:mt-[5rem]">Login</h2>
				</header>

				<form className="mt-[3rem] flex flex-col gap-[2rem] [&_input]:text-[1.9rem] [&_input]:text-input [&_label]:text-[1.2rem] [&_label]:text-label">
					<label className="flex flex-col">
						Email address
						<input
							type="text"
							className="min-h-[3.2rem] border-b-[2px] border-b-carousel-btn bg-transparent"
						/>
					</label>

					<label className="flex flex-col">
						Password
						<input
							type="password"
							className="min-h-[3.2rem] border-b-[2px] border-b-carousel-btn bg-transparent"
						/>
					</label>

					<label className="flex flex-row-reverse justify-end gap-[1rem]">
						Remember me
						<input type="checkbox" />
					</label>

					<Button
						text={'Login'}
						variant={'cart'}
						theme={'secondary'}
						className={'mt-[1.5rem] rounded-[1rem]'}
						onClick={(e) => e.preventDefault()}
					/>
				</form>

				<div className="m-[4rem_0] flex items-center justify-center">
					<span className="mr-[1rem] inline-block h-[1px] w-full bg-carousel-btn" />
					Or
					<span className="ml-[1rem] inline-block h-[1px] w-full bg-carousel-btn" />
				</div>

				<footer>
					<div className="text-[1.5rem]">
						<Button
							theme={'ghost'}
							className={'w-full gap-[1rem] rounded-[10rem] border-[2px] border-carousel-btn'}
						>
							<FcGoogle className="text-[1.8rem]" />
							Continue with Google
						</Button>
						<Button
							className={
								'mt-[2rem] w-full gap-[1rem] rounded-[10rem] border-[2px] border-carousel-btn bg-[hsl(214,89%,38%)]'
							}
						>
							<FaFacebook className="text-[1.8rem]" />
							Continue with Facebook
						</Button>
					</div>

					<p className="mx-auto mt-[5rem] text-center text-[1.3rem]">
						New user?
						<Link className="ml-[0.3rem] text-[hsl(214,89%,53%)]">Create an account</Link>
					</p>
				</footer>
			</div>
		</section>
	);
};

export default Register;
