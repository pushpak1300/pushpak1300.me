export default defineAppConfig({
	ui: {
		colors: {
			primary: ['emerald', 'blue', 'purple', 'rose', 'cyan', 'red', 'orange', 'lime'][Math.floor(Math.random() * 8)],
			neutral: 'zinc',
		},
		container: {
			base: 'w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8',
		},
		button: {
			rounded:
				'rounded-md transition-transform active:scale-x-[0.98] active:scale-y-[0.99]',
		},
		formGroup: {
			help: 'text-xs mt-1 text-neutral-500 dark:text-neutral-400',
			error: 'text-xs mt-1 text-red-500 dark:text-red-400',
			label: {
				base: 'text-sm block font-medium text-neutral-500 dark:text-neutral-200',
			},
		},
		modal: {
			overlay: {
				background: 'bg-[rgba(0,8,47,.275)] saturate-50',
			},
			padding: 'p-0',
			rounded: 'rounded-t-2xl sm:rounded-xl',
			transition: {
				enterFrom: 'opacity-0 translate-y-full sm:translate-y-0 sm:scale-x-95',
				leaveFrom: 'opacity-100 translate-y-0 sm:scale-x-100',
			},
		},
	},
	name: 'Pushpak Chhajed',
	resumeURL: 'https://drive.google.com/file/d/1vJbFZ-NyPPtkshIVDlHZYNusnBt_vZM3/view',
});
