// @ts-check
import tailwind from 'eslint-plugin-tailwindcss';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	rules: {
		'no-unused-vars': 'error',
	},
	settings: {
		tailwindcss: {
			whitelist: ['.*primary.*'],
		},
	},
}).append(...tailwind.configs['flat/recommended']);
