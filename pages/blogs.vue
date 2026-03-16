<template>
  <main class="py-8 space-y-8">
    <section>
      <AppBackHome />
      <h1 class="font-bold mb-8 text-4xl">{{ title }}</h1>
      <p class="mb-8 text-lg">{{ description }}</p>
    </section>

    <div v-if="sortedBlogs.length" class="border-l-2 border-primary pl-4">
      <BlogItem v-for="(blog, id) in sortedBlogs" :key="id" :blog="blog" />
    </div>
    <div class="md:pt-24 pt-16">
      <div class="flex gap-3 items-center mb-6">
        <div class="bg-primary-500/10 flex-none p-1 rounded-full text-primary-500">
          <div class="bg-current rounded-full size-1.5" />
        </div>
        <h2 class="font-semibold text-neutral-400 text-xs uppercase">STAY IN TOUCH</h2>
      </div>
      <p class="dark:text-neutral-400 mt-2 text-neutral-600 text-sm">
        Subscribe to newsletter and unsubscribe at any time.
      </p>
      <form @submit.prevent="subscribeToNewsletter">
        <div class="flex gap-3 items-center mt-6">
          <UInput
            id="email-address"
            v-model="email"
            name="email-address"
            type="email"
            autocomplete="email"
            placeholder="Enter your email"
            required
            icon="i-heroicons-envelope"
            class="flex-1"
            size="lg"
          />
          <UButton
            :loading="loading"
            type="submit"
            :label="emailSubmited ? 'Done' : 'Join →'"
            size="lg"
            color="primary"
          />
        </div>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta, useAsyncData, queryCollection } from "#imports";
import appConfig from "~/app.config";

const title = "Blogs";
const description =
  "The articles I've penned over the years. Though I've been quiet in recent times, I plan to reignite my writing soon.";

useSeoMeta({
  title,
  description,
});

useHead({
  title: `${title} | ${appConfig.name}`,
});

const { data: blogs } = await useAsyncData("blogs-all", () => queryCollection("blogs").all());

const getPublishedAtTimestamp = (value: string) => new Date(value.replaceAll("/", "-")).getTime();

const sortedBlogs = computed(() =>
  [...(blogs.value ?? [])].sort(
    (left, right) =>
      getPublishedAtTimestamp(right.published_at) - getPublishedAtTimestamp(left.published_at),
  ),
);

const email = ref("");
const emailSubmited = ref(false);
const loading = ref(false);

const subscribeToNewsletter = async () => {
  loading.value = true;
  await useFetch("https://usebasin.com/f/baffd19320ff.json", {
    method: "post",
    body: { email: email.value },
  });
  email.value = "";
  emailSubmited.value = true;
  loading.value = false;
};
</script>
