<template>
	<a
		:href="href"
		:title="title"
		class="text-primary-700 dark:text-primary-100 font-bold"
		target="_blank"
		rel="noopener"
	>
		<slot />
	</a>
</template>

<script setup lang="ts">
defineProps<{
	href: string;
	title: string;
}>();
</script>

<style>

</style>
