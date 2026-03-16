<template>
  <main class="flex flex-col gap-4 max-w-xl mt-10 mx-auto sm:mt-16 w-full">
    <section class="flex flex-col gap-4">
      <AppBackHome />
      <h1 class="dark:text-stone-100 font-semibold text-3xl text-stone-900 tracking-tight">
        {{ title }}
      </h1>
      <p class="dark:text-stone-400 font-medium text-sm text-stone-500">
        {{ description }}
      </p>
    </section>

    <div class="bg-stone-200/80 dark:bg-white/10 h-px mt-4 w-full" />

    <div v-if="projects" class="flex flex-col gap-3">
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
