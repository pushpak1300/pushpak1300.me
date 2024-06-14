<template>
    <div>
        <a class="gap-4 group rounded-lg" :href="project.mainLink" target="_blank">
            <div>
                <h3 class="text-lg font-medium group-hover:text-primary-500 dark:group-hover:text-primary-200">
                    {{ project.name }}
                </h3>
                <p class="text-gray-800 dark:text-gray-400 text-sm">{{ project.description }}</p>
                <p
                    class="text-gray-900 dark:text-gray-200 text-md font-semibold mt-1 hover:text-primary hover:cursor-default">
                    Stack:
                    <span class="font-normal text-sm lowercase ">{{ project.skills }}</span>
                </p>
                <div class="flex gap-6">
                    <AppIconLink v-if="project.githubUrl" name="Github" :key="project.name + 'github'"
                        :link="project.githubUrl" icon="mdi:github" target="_blank" :active="true" :show-name="false" />
                    <AppIconLink v-if="project.projectLink" name="Link" :key="project.name + 'link'"
                        :link="project.projectLink" icon="heroicons:globe-alt" target="_blank" :active="true"
                        :show-name="false" />
                </div>
            </div>
            <UDivider type="dashed" class="py-4" />
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
