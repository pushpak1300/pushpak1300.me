<template>
  <div v-motion-fade-visible :delay="200">
    <div
      class="bg-stone-50/40 border border-stone-200/80 dark:bg-white/3 dark:border-white/10 px-4 py-4 rounded-2xl"
    >
      <div class="flex gap-4 items-center justify-between">
        <a
          :href="project.mainLink"
          target="_blank"
          class="dark:hover:text-stone-200 dark:text-stone-100 font-medium font-sans hover:text-stone-700 text-base text-stone-900 transition-colors"
        >
          {{ project.name }}
        </a>
        <span class="dark:text-stone-500 text-stone-400 text-xs">
          {{ getProjectMeta(project) }}
        </span>
      </div>
      <p class="dark:text-stone-400 mt-1 text-sm text-stone-500">
        {{ project.description }}
      </p>
      <div class="flex gap-4 items-center mt-3 text-sm">
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          class="dark:hover:text-stone-100 dark:text-stone-400 flex gap-2 hover:text-stone-900 items-center text-stone-500 transition-colors"
          aria-label="GitHub"
        >
          <Icon name="mdi:github" class="size-4" />
        </a>
        <a
          v-if="project.projectLink"
          :href="project.projectLink"
          target="_blank"
          class="dark:hover:text-stone-100 dark:text-stone-400 flex gap-2 hover:text-stone-900 items-center text-stone-500 transition-colors"
          aria-label="Visit project"
        >
          <Icon name="heroicons:globe-alt" class="size-4" />
        </a>
        <span class="dark:text-stone-500 text-stone-400 text-xs truncate">
          {{ project.skills }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Project = {
  mainLink: string;
  description: string;
  projectLink?: string | boolean;
  githubUrl?: string;
  name: string;
  published_at: string;
  skills: string;
};

defineProps<{
  project: Project;
}>();

const getProjectMeta = (project: Project) => {
  try {
    return new URL(project.mainLink).hostname.replace(/^www\./, "");
  } catch {
    return new Date(project.published_at).getFullYear().toString();
  }
};
</script>
