<template>
  <div
    v-if="data.projects"
    class="
      flex-grow
      w-full
      container
      max-w-4xl
      mx-auto
      md:py-8
      py-4
      px-6
      text-gray-700
      dark:text-gray-50
    "
  >
    <div class="mb-12 md:mb-6">
      <div class="mb-4">
        <h1 class="mb-0 font-bold text-4xl">Projects</h1>
        <p class="my-2">List of projects that I am proud of</p>
      </div>
      <BaseProject
        v-for="project in data.projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

interface Project extends MarkdownParsedContent {
  projects: Object
}

const route = useRoute()

const {data} = await useAsyncData(() => queryContent<Project>(route.path).findOne())
</script>
