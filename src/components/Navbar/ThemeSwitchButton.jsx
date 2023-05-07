import { useEffect, useRef } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import { useThemeActions, useThemeStore } from '../../store/zustand/themeStore';

const ThemeSwitchButton = ({ display }) => {
	const theme = useThemeStore((state) => state.theme);
	const isDarkMode = useThemeStore((state) => state.isDarkMode);
	const { switchTheme, toggleDarkMode } = useThemeActions();
	const timeoutId = useRef(null);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		document.documentElement.classList.add('theme-transition');

		timeoutId.current = setTimeout(() => {
			document.documentElement.classList.remove('theme-transition');
		}, 2000);

		return () => clearTimeout(timeoutId.current);
	}, [theme]);

	return (
		<button
			className={`rounded-[5rem] bg-[hsl(229,28%,15%)] max-md:scale-[0.8] ${display}`}
			onClick={() => {
				switchTheme();
				toggleDarkMode();
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
