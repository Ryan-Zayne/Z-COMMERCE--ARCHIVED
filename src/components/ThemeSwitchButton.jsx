import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import { useThemeActions, useThemeStore } from '../store/zustand/themeStore';

const ThemeSwitchButton = ({ display = '' }) => {
	const isDarkMode = useThemeStore((state) => state.isDarkMode);
	const { toggleTheme, toggleIsDarkMode } = useThemeActions();

	return (
		<button
			className={`rounded-[5rem] bg-[hsl(229,28%,15%)] max-md:scale-[0.8] ${display}`}
			onClick={() => {
				toggleTheme();
				toggleIsDarkMode();
			}}
		>
			<div className="relative flex h-[2.2rem] w-[4.3rem] items-center justify-between gap-[0.6rem] [padding-block:0.3rem] [padding-inline:0.6rem_0.5rem]">
				<FaSun color="var(--text-header)" fontSize={'1.2rem'} />
				<BsFillMoonStarsFill color="pink" fontSize={'1rem'} />
				<span
					className={`
						absolute bottom-[0.37rem] aspect-square w-[1.5rem] rounded-[50%] bg-dark-ball transition-transform duration-[300ms]
						${isDarkMode ? 'translate-x-[1.75rem]' : ''}
					`}
				/>
			</div>
		</button>
	);
};

export default ThemeSwitchButton;
