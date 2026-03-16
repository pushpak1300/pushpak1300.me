<template>
  <div v-motion-fade-visible :delay="200">
    <div
      class="rounded-2xl border border-stone-200/80 bg-stone-50/40 p-4 dark:border-white/10 dark:bg-white/3"
    >
      <div class="flex items-center justify-between gap-4">
        <a
          :href="project.mainLink"
          target="_blank"
          class="font-sans text-base font-medium text-stone-900 transition-colors hover:text-stone-700 dark:text-stone-100 dark:hover:text-stone-200"
        >
          {{ project.name }}
        </a>
        <span class="text-xs text-stone-400 dark:text-stone-500">
          {{ getProjectMeta(project) }}
        </span>
      </div>
      <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">
        {{ project.description }}
      </p>
      <div class="mt-3 flex items-center gap-4 text-sm">
        <a
          v-if="isExternalUrl(project.githubUrl)"
          :href="project.githubUrl"
          target="_blank"
          class="flex items-center gap-2 text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
          aria-label="GitHub"
        >
          <Icon name="mdi:github" class="size-4" />
        </a>
        <a
          v-if="isExternalUrl(project.projectLink)"
          :href="project.projectLink"
          target="_blank"
          class="flex items-center gap-2 text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
          aria-label="Visit project"
        >
          <Icon name="heroicons:globe-alt" class="size-4" />
        </a>
        <span class="truncate text-xs text-stone-400 dark:text-stone-500">
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
  projectLink?: string | boolean | null;
  githubUrl?: string | null;
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

const isExternalUrl = (value: unknown): value is string => {
  if (typeof value !== "string" || value.length === 0) {
    return false;
  }

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};
</script>
