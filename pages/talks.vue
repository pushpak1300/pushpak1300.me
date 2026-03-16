<template>
  <main class="flex flex-col gap-4 max-w-xl mt-10 mx-auto sm:mt-16 w-full">
    <section class="flex flex-col gap-4">
      <AppBackHome />
      <h1 class="dark:text-stone-100 font-semibold text-3xl text-stone-900 tracking-tight">
        {{ PAGE_CONFIG.title }}
      </h1>
      <p class="dark:text-stone-400 font-medium text-sm text-stone-500">
        {{ PAGE_CONFIG.description }}
      </p>
    </section>

    <div class="bg-stone-200/80 dark:bg-white/10 h-px mt-4 w-full" />

    <div v-if="groupedTalks.length > 0" class="flex flex-col gap-8">
      <section v-for="talk in groupedTalks" :key="talk.title" class="flex flex-col gap-3">
        <h2 class="dark:text-stone-100 font-sans text-lg font-medium text-stone-900">
          {{ talk.title }}
        </h2>
        <div class="flex flex-col gap-3">
          <TalkItem
            v-for="instance in talk.instances"
            :key="`${talk.title}-${instance.date}-${instance.conference}`"
            :talk="instance"
          />
        </div>
      </section>
    </div>
    <div v-else class="py-12">
      <p class="dark:text-stone-400 text-sm text-stone-500">No talks available at the moment.</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta, useAsyncData, queryCollection } from "#imports";
import appConfig from "~/app.config";
import TalkItem from "~/components/TalkItem.vue";

type TalkEntry = {
  conference: string;
  date: string;
  slidesUrl?: string;
  tweetUrl?: string;
  youtubeUrl?: string;
};

type GroupedTalk = {
  title: string;
  instances: TalkEntry[];
};

const PAGE_CONFIG = {
  title: "Talks",
  description:
    "I've had the pleasure of speaking at various conferences and meetups. Here's a collection of my talks.",
  email: "talks@pushpak1300.me",
} as const;

// SEO setup
useSeoMeta({
  title: PAGE_CONFIG.title,
  description: PAGE_CONFIG.description,
});

useHead({
  title: `${PAGE_CONFIG.title} | ${appConfig.name}`,
});

// Data fetching using queryCollection
const { data: talksData } = await useAsyncData("talks", () => queryCollection("talks").all());

const groupedTalks = computed<GroupedTalk[]>(() =>
  (talksData.value ?? [])
    .map((talk) => ({
      title: talk.title,
      instances: [...talk.instances].sort(
        (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime(),
      ),
    }))
    .sort((left, right) => {
      const leftLatest = left.instances[0] ? new Date(left.instances[0].date).getTime() : 0;
      const rightLatest = right.instances[0] ? new Date(right.instances[0].date).getTime() : 0;

      return rightLatest - leftLatest;
    }),
);
</script>
