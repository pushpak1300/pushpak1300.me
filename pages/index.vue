<template>
  <main class="bento lg:grid-cols-6 lg:grid-rows-4">
    <Tile bg="080" span="c3 r2" label="Now">
      <div class="flex flex-col gap-2.5 mt-auto">
        <h2 class="hero text-[1.625rem] lg:text-[2rem] max-w-[20ch]">
          Building the tools that make Laravel teams faster with AI.
        </h2>
      </div>
      <div class="tags">
        <a
          v-for="p in projects"
          :key="p[0]"
          :href="p[1]"
          target="_blank"
          rel="noopener"
          class="chip"
          >{{ p[0] }}</a
        >
      </div>
    </Tile>

    <Tile to="/blogs" bg="023" span="c2 r2" label="Latest writing">
      <div class="flex flex-col mt-auto">
        <div v-for="blog in latest" :key="blog.slug" class="post">
          <span class="d mono">{{ month(blog.published_at) }}</span>
          <span class="t">{{ blog.title }}</span>
        </div>
      </div>
      <span class="text-[0.8125rem] font-semibold">All posts →</span>
    </Tile>

    <Tile
      :to="resumeURL"
      external
      bg="034"
      span="c1 r2"
      label="Resume"
      class="justify-between gap-3.5"
    >
      <div class="flex flex-col gap-1">
        <p class="title text-[0.9375rem]">Download my resume</p>
        <p class="body text-xs">One page · PDF</p>
      </div>
    </Tile>

    <Tile
      to="https://github.com/pushpak1300"
      external
      bg="016"
      span="c1 r2"
      label="GitHub"
      class="justify-between gap-3.5"
    >
      <Icon name="simple-icons:github" size="2.25rem" />
      <div class="flex flex-col gap-1">
        <p class="title text-[0.9375rem]">Most of what I build is public.</p>
        <p class="body text-xs">@pushpak1300</p>
      </div>
    </Tile>

    <Tile
      to="https://twitter.com/pushpak1300"
      external
      bg="02"
      span="c1"
      class="justify-between gap-3.5"
    >
      <Icon name="simple-icons:x" size="2.25rem" />
      <div class="flex flex-col gap-0.5">
        <p class="label">X</p>
        <p class="title">@pushpak1300</p>
      </div>
    </Tile>

    <Tile
      to="https://www.linkedin.com/in/pushpak1300"
      external
      bg="046"
      span="c1"
      class="justify-between gap-3.5"
    >
      <Icon name="simple-icons:linkedin" size="2.25rem" />
      <div class="flex flex-col gap-0.5">
        <p class="label">LinkedIn</p>
        <p class="title">in/pushpak1300</p>
      </div>
    </Tile>

    <Tile to="/talks" bg="074" span="c3 r2" label="Talks">
      <div class="flex flex-col gap-2.5 mt-auto">
        <h2 class="hero text-[1.375rem] lg:text-[1.5rem] leading-[1.15]">
          I have spoken at conferences and meetups across India. Here is the list.
        </h2>
        <div class="tags">
          <span v-for="v in venues" :key="v" class="chip">{{ v }}</span>
        </div>
      </div>
    </Tile>

    <Tile
      to="mailto:hey@pushpak1300.me"
      external
      bg="041"
      span="c1"
      class="justify-between gap-3.5"
    >
      <Icon name="simple-icons:gmail" size="2.25rem" />
      <div class="flex flex-col gap-0.5">
        <p class="label">Email</p>
        <p class="title">Say hi</p>
      </div>
    </Tile>

    <Tile
      to="https://peerlist.io/pushpak1300"
      external
      bg="032"
      span="c1"
      class="justify-between gap-3.5"
    >
      <Icon name="simple-icons:peerlist" size="2.25rem" />
      <div class="flex flex-col gap-0.5">
        <p class="label">Peerlist</p>
        <p class="title">@pushpak1300</p>
      </div>
    </Tile>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta, useAsyncData, queryCollection } from "#imports";
import appConfig from "~/app.config";

const title = "Pushpak Chhajed";
const description =
  "Open source engineer at Laravel, building thoughtful developer tooling across Laravel, AI, and modern product engineering.";
useSeoMeta({ title, description });
useHead({ title });

const { resumeURL } = appConfig;

const projects = [
  ["Laravel Boost", "https://github.com/laravel/boost"],
  ["Laravel MCP", "https://github.com/laravel/mcp"],
  ["Roster", "https://github.com/laravel/roster"],
];

const venues = [
  "Laracon India",
  "Laravel Bangalore",
  "Laravel Pune",
  "Laravel Mumbai",
  "Laravel Nagpur",
  "Hackerspace Mumbai",
];

const { data: blogs } = await useAsyncData("blogs", () => queryCollection("blogs").all());
const latest = computed(() =>
  [...(blogs.value ?? [])].sort((a, b) => ts(b.published_at) - ts(a.published_at)).slice(0, 3),
);
</script>
