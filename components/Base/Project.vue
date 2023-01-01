<template>
  <div>
    <hr>
    <p class="font-medium mt-7 text-2xl mb-5 text-gray-700 dark:text-gray-50">
      {{ project.name }}
    </p>
    <p class="mb-5 text-gray-500 dark:text-gray-300">
      {{ project.description }}
    </p>
    <div class="mb-7 text-gray-700 dark:text-gray-50">
      <h4 class="text-xl font-medium">
        ⚡ Tech stack
      </h4>
      <p class="text-gray-700 dark:text-gray-50">
        {{ project.skills }}
      </p>
    </div>
    <div class="mb-9">
      <p v-if="project.githubUrl">
        🌎 <strong>Check it out →</strong>
        <a
          :href="project.githubUrl"
          target="_blank"
          rel="noopener"
          v-text="project.githubUrl.replace('https://github.com/', '')"
        />
      </p>
      <p v-if="project.projectLink">
        🌎 <strong>Check it out →</strong>
        <a :href="project.projectLink" target="_blank" rel="noopener">{{
          project.projectLink
        }}</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
type Project = {
  'id': string,
  'name': string,
  'slug': string,
  'description': string,
  'skills': string,
  'githubUrl': string,
  'projectLink': boolean,
  'mainLink': string
};

defineProps<{
  project: Project
}>()
</script>
