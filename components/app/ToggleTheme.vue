<script setup>
const colorMode = useColorMode();

const getIconName = computed(() => {
	return isDark.value ? 'heroicons:sun' : 'heroicons:moon';
});

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
				class="hover:text-primary-500 dark:hover:text-primary-400 relative flex items-center justify-center px-3 py-4 transition"
				@click="isDark = !isDark"
			>
				<Icon
					aria-hidden="true"
					:name="getIconName"
					class="size-5"
				/>
				<span class="sr-only">Toggle Theme</span>
			</button>
	</UTooltip>
</template>
