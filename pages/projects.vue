<template>
	<main>
		<AppHeader class="mb-16" :title :description />
		<div class="space-y-6" v-if="projects">
			<ProjectItem v-for="(project, id) in projects" :key="id" :project="project" />
		</div>
	</main>
</template>

<script setup lang="ts">
import { useSeoMeta, useAsyncData } from "#imports";
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const title = "Projects";
const description = "I've completed numerous projects, and I'm especially proud of these.";

useSeoMeta({
	title,
	description,
});

interface ProjectContent extends ParsedContent {
	name: string;
	description: string;
	slug: string;
	projectLink: string;
	mainLink: string;
	skills: string;
	githubUrl: string;
}

const { data: projects } = await useAsyncData('projects-all', () =>
	queryContent<ProjectContent>('projects').sort({ id: -1 }).find()
)
</script>
