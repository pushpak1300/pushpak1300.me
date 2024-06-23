<script setup>
const colorMode = useColorMode();

const isDark = computed({
	get() {
		return colorMode.value === 'dark';
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
	},
});
</script>

<template>
	<UTooltip
		text="Toggle theme"
		:ui="{ popper: { strategy: 'absolute' } }"
	>
		<button
			class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
			@click="isDark = !isDark"
		>
			<div
				aria-hidden="true"
				:name="isDark ? 'solar:sun-2-outline' : 'solar:moon-outline'"
				class="w-3 h-3 rounded-full bg-gray-900 dark:bg-white"
			/>
			<span class="sr-only">Toggle Theme</span>
		</button>
	</UTooltip>
</template>
