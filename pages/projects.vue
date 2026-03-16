<template>
  <main class="space-y-8 py-8">
    <section>
      <AppBackHome />
      <h1 class="mb-8 text-4xl font-bold">{{ title }}</h1>
      <p class="mb-8 text-lg">{{ description }}</p>
    </section>

    <div v-if="projects" class="space-y-6">
      <ProjectItem v-for="project in projects" :key="project.slug" :project="project" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta, useAsyncData, queryCollection } from "#imports";
import appConfig from "~/app.config";

const title = "Projects";
const description = "I've completed numerous projects, and I'm especially proud of these.";

useSeoMeta({
  title,
  description,
});

useHead({
  title: `${title} | ${appConfig.name}`,
});

const { data: projects } = await useAsyncData("projects", () =>
  queryCollection("projects").order("published_at", "DESC").all(),
);
</script>
