<template>
	<footer class="decoration-primary pb-8 text-center text-sm text-gray-800 decoration-1 dark:text-gray-400 sm:flex sm:justify-between">
		<div>
			© <span v-text="new Date().getFullYear()" /> Pushpak Chhajed. All rights reserved.
		</div>
		<div />
		<div class="sm:text-right">
			Built with <AppExternalLink
				href="https://nuxt.com/"
				title="The Intuitive Vue Framework"
			>
				Nuxt
			</AppExternalLink> & <AppExternalLink
				href="https://tailwindcss.com"
				title="Tailwind CSS, a utility-first CSS framework"
			>
				Tailwind CSS ❤️
			</AppExternalLink>
		</div>
	</footer>
</template>

<script setup lang="ts">
</script>
