<template>
	<footer class="pb-8 text-center text-sm text-gray-400 dark:text-gray-600 sm:flex sm:justify-between">
		<div class="text-primary-400 dark:text-primary-300">
			© <span v-text="new Date().getFullYear()" /> Pushpak Chhajed. All rights reserved.
		</div>
		<div />
		<div class="text-primary-400 sm:text-right">
			Built with <AppExternalLink
				href="https://nuxt.com/"
				title="The Intuitive Vue Framework"
			>
				Nuxt Js
			</AppExternalLink> & <AppExternalLink
				href="https://tailwindcss.com"
				title="Tailwind CSS, a utility-first CSS framework"
			>
				Tailwind CSS ❤️
			</AppExternalLink>
		</div>
	</footer>
</template>
