import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

export default <Partial<Config>> {
	safelist: ['router-link-exact-active'],
	content: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			boxShadow: {
				zoop: 'rgba(102, 109, 128, 0.08) 0px 1.2672px 1.2672px 0px, rgba(102, 109, 128, 0.08) 0px 5.06879px 10.1376px 0px',
				zoopdark:
          'rgba(10, 10, 10, 0.2) 0px 1.2672px 1.2672px 0px, rgba(10, 10, 10, 0.2) 0px 5.06879px 10.1376px 0px',
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
