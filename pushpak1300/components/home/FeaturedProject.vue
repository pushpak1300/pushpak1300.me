<template>
	<div>
		<h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
			FEATURED PROEJCTS
		</h2>
		<div class="space-y-4">
			<div
				v-for="(project, id) in projects"
				:key="id"
				:project="project"
			>
				<NuxtLink
					class="flex items-end gap-4 group p-2 -m-2 rounded-lg"
					:to="project.url"
					target="_blank"
					external
				>
					<div class="max-w-sm">
						<h3 class="text-sm font-medium group-hover:text-primary-600">
							{{ project.name }}
						</h3>
						<p class="text-gray-400 text-sm">
							{{ project.description }}
						</p>
					</div>
					<div
						class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
					/>
				</NuxtLink>
			</div>
		</div>
		<div class="flex items-center justify-center mt-6 text-sm">
			<UButton
				label="All Projects &rarr;"
				to="/projects"
				variant="link"
				color="gray"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { queryContent } from '#imports';

let data = null;
const { data: projects, pending } = await useAsyncData('featuredProjcts', () => {
	data = queryContent('/projects').limit(3).find();
	return data;
});
console.log(projects.value, pending.value);
</script>
