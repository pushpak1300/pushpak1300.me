<template>
	<div
		v-motion-fade-visible
		:delay="200"
	>
		<a
			class="group gap-4 rounded-lg"
			:href="project.mainLink"
			target="_blank"
		>
			<div>
				<h2 class="group-hover:text-primary-500 dark:group-hover:text-primary-200 text-lg font-medium">
					{{ project.name }}
				</h2>
				<p class="text-sm text-neutral-800 dark:text-neutral-400">{{ project.description }}</p>
				<p
					class="hover:text-primary mt-1 text-base font-semibold text-neutral-900 hover:cursor-default dark:text-neutral-200"
				>
					Stack:
					<span class="text-sm font-normal lowercase ">{{ project.skills }}</span>
				</p>
				<div class="flex gap-6">
					<AppIconLink
						v-if="project.githubUrl"
						:key="project.name + 'github'"
						name="Github"
						:link="project.githubUrl"
						icon="mdi:github"
						target="_blank"
						:active="true"
						:show-name="false"
					/>
					<AppIconLink
						v-if="project.projectLink"
						:key="project.name + 'link'"
						name="Link"
						:link="project.projectLink"
						icon="heroicons:globe-alt"
						target="_blank"
						:active="true"
						:show-name="false"
					/>
				</div>
			</div>
			<USeparator
				type="dashed"
				class="py-4"
			/>
		</a>
	</div>
</template>

<script setup lang="ts">
defineProps({
	project: {
		type: Object,
		required: true,
	},
});
</script>
