export const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

export const mobileQuery = window.matchMedia('(max-width: 767px)');

export const tabletQuery = window.matchMedia('(min-width: 768px)');

export const desktopQuery = window.matchMedia('(min-width: 1000px)');

export const scrollbarWidth = (window.innerWidth - document.documentElement.clientWidth) / 10;

export const baseURL = 'https://dummyjson.com';
