<template>
	<div>
		<a
			class="gap-4 group rounded-lg"
			:href="project.mainLink"
			target="_blank"
		>
			<div>
				<h2 class="text-lg font-medium group-hover:text-primary-500 dark:group-hover:text-primary-200">
					{{ project.name }}
				</h2>
				<p class="text-gray-800 dark:text-gray-400 text-sm">{{ project.description }}</p>
				<p
					class="text-gray-900 dark:text-gray-200 text-md font-semibold mt-1 hover:text-primary hover:cursor-default"
				>
					Stack:
					<span class="font-normal text-sm lowercase ">{{ project.skills }}</span>
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
			<UDivider
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
