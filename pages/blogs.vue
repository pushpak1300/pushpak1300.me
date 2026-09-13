<template>
  <main
    class="bento hgrid lg:[--rows:4] short:[--rows:2] [--minw:14.375rem]"
    :style="{ '--n': sorted.length + 2 }"
  >
    <Tile
      v-for="(blog, i) in sorted"
      :key="blog.slug"
      :to="blog.external_url"
      :external="blog.external"
      :bg="bgs[i % bgs.length]"
      :label="month(blog.published_at)"
      class="justify-between"
    >
      <div class="flex flex-col gap-1.5 mt-auto">
        <h2 class="hero text-[1.125rem] leading-[1.15] line-clamp-3">{{ blog.title }}</h2>
        <p class="body text-[0.8125rem] hidden 2xl:line-clamp-2">{{ blog.description }}</p>
      </div>
    </Tile>

    <Tile bg="117" class="[--dim:0.8] justify-between" span="lg:row-span-2">
      <div class="flex flex-col gap-1 mt-auto">
        <p class="label">Newsletter</p>
        <p class="title text-[1.0625rem]">New posts in your inbox. Unsubscribe anytime.</p>
      </div>
      <form class="flex gap-2" @submit.prevent="subscribe">
        <input
          v-model="email"
          type="email"
          required
          autocomplete="email"
          placeholder="you@email.com"
          class="chip h-10 px-4 w-full min-w-0 outline-none placeholder:text-mute"
        />
        <button
          type="submit"
          :disabled="loading"
          class="chip h-10 px-4 shrink-0 whitespace-nowrap bg-white text-black border-transparent font-semibold"
        >
          {{ done ? "Done" : "Join →" }}
        </button>
      </form>
    </Tile>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta, useAsyncData, queryCollection } from "#imports";
import appConfig from "~/app.config";

const title = "Blogs";
const description = "Articles on Laravel, AI tooling and building developer products.";
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://pushpak1300.me/og/blogs.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: "summary_large_image",
  twitterImage: "https://pushpak1300.me/og/blogs.jpg",
});
useHead({ title: `${title} | ${appConfig.name}` });

// ponytail: first 8 posts get images used nowhere else; the last 6 reuse Home social tiles since only 28 images exist for 34 slots
const bgs = ["033", "025", "018", "071", "042", "020", "04", "034", "016", "02", "046", "041", "032", "023"];

const { data: blogs } = await useAsyncData("blogs", () => queryCollection("blogs").all());
const sorted = computed(() =>
  [...(blogs.value ?? [])].sort((a, b) => ts(b.published_at) - ts(a.published_at)),
);

const email = ref("");
const done = ref(false);
const loading = ref(false);
const subscribe = async () => {
  loading.value = true;
  try {
    await $fetch("https://usebasin.com/f/baffd19320ff.json", {
      method: "POST",
      body: { email: email.value },
    });
    email.value = "";
    done.value = true;
  } finally {
    loading.value = false;
  }
};
</script>
