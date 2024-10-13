<template>
	<footer class="text-gray-400 dark:text-gray-600 text-sm text-center pb-8 sm:flex sm:justify-between">
		<div class="text-primary-400 dark:text-primary-300">
			© <span v-text="new Date().getFullYear()" /> Pushpak Chhajed
		</div>
		<div />
		<div class="sm:text-right text-primary-400">
			Built with <AppExternalLink
				href="https://nuxt.com/"
				title="The Intuitive Vue Framework"
			>
				Nuxt Js
			</AppExternalLink> & <AppExternalLink
				href="https://tailwindcss.com"
				title="Tailwind CSS, a utility-first CSS framework"
			>
				Tailwind CSS
			</AppExternalLink>
		</div>
	</footer>
</template>
