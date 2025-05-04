<template>
	<main>
		<AppHeader
			class="mb-8 md:mb-16"
			:title
			:description
		/>
		<div
			v-if="projects"
			class="space-y-6"
		>
			<ProjectItem
				v-for="(project, id) in projects"
				:key="id"
				:project="project"
			/>
		</div>
	</main>
</template>

<script setup lang="ts">
import { useSeoMeta, useAsyncData } from '#imports';
import type { ProjectContent } from '~/types/content';
import appConfig from '~/app.config';

const title = 'Projects';
const description = 'I\'ve completed numerous projects, and I\'m especially proud of these.';

useSeoMeta({
	title,
	description,
});

useHead({
	title: `${title} | ${appConfig.name}`,
});

const { data: projects } = await useAsyncData('projects-all', () =>
	$fetch<ProjectContent[]>('/api/projects')
);
</script>
