<template>
	<div class="space-y-6">
		<NuxtImg
			src="/avtar.webp"
			alt="Pushpak Chhajed"
			class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-24 sm:w-24"
			placeholder
			format="webp"
		/>
		<h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
			Hello there! 👋
		</h1>
		<h2 class="h-2 font-semibold text-xl text-gray-800 dark:text-gray-100">
			<mark class="bg-primary-300">Pushpak Chhajed.</mark>
		</h2>
		<p class="text-gray-900 dark:text-gray-400">
			I'm a software engineer from India with more than three years of experience in developing applications,
			primarily
			using web technologies. Currently, I mainly write programs in TypeScript, PHP, and Python. I have extensive
			experience with PostgreSQL and various optimization techniques.
		</p>
		<p class="text-gray-900 dark:text-gray-400">
			In the past I have worked on different cool projects and experienced space at an early stage startups as a
			SDE Intern. Few of them are Taxvisor, Behtaar and Eastern Enterprise. Currently I'm working with ClearGlass
			Analytics as a Software Engineer.
		</p>
		<p class="text-gray-900 dark:text-gray-400">
			If you're interested in my projects or want to read my articles, feel free to follow me on X, where I
			regularly share updates on my work. If you're in the same city as me (currently in Dhule), let's connect and
			maybe even collaborate on some coding!
		</p>
	</div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '#imports';

useSeoMeta({
	title: 'Pushpak Chhajed',
	description:
		'I\'m a software engineer from India with more than three years of experience in developing applications, primarily using web technologies.',
});
</script>
