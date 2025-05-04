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
				v-for="(project) in projects"
				:key="project.slug"
				:project="project"
			/>
		</div>
	</main>
</template>

<script setup lang="ts">
import { useSeoMeta, useAsyncData, queryCollection } from '#imports';
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

const { data: projects } = await useAsyncData('projects', () =>
	queryCollection('projects')
		.order('published_at', 'DESC')
		.all()
);
</script>
