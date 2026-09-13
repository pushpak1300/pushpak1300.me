<template>
  <main
    class="bento hgrid lg:[--rows:3] short:[--rows:2] [--minw:16rem]"
    :style="{ '--n': talks.length + 2 }"
  >
    <Tile
      v-for="(talk, i) in talks"
      :key="talk.title"
      :to="talk.instances[0].slidesUrl"
      external
      :bg="bgs[i % bgs.length]"
      :label="`Spoke at ${talk.instances.length} ${talk.instances.length === 1 ? 'event' : 'events'}`"
      class="justify-between"
    >
      <div class="flex flex-col gap-2 mt-auto">
        <h2 class="hero leading-[1.15] text-[1.25rem] line-clamp-3">{{ talk.title }}</h2>
        <div class="tl gap-1.5">
          <div
            v-for="ev in talk.instances.slice(0, 3)"
            :key="ev.date + ev.conference"
            class="grid-cols-[4.5rem_1fr]"
          >
            <span class="mono">{{ month(ev.date) }}</span
            ><span class="truncate">{{ venue(ev.conference) }}</span>
          </div>
        </div>
      </div>
      <div class="tags">
        <span v-if="talk.instances[0].slidesUrl" class="chip">Slides</span>
        <span v-if="video(talk)" class="chip">Video</span>
      </div>
    </Tile>

    <Tile
      to="mailto:hey@pushpak1300.me"
      external
      bg="030"
      span="lg:row-span-2"
      class="justify-between"
    >
      <div class="flex flex-col gap-2 mt-auto">
        <p class="label">Invite me</p>
        <h2 class="hero text-[1.25rem] leading-[1.15]">
          Happy to speak about Laravel, AI tooling and MCP.
        </h2>
        <p class="body text-[0.8125rem]">
          Conferences, meetups, podcasts or internal team sessions, in person across India or remote
          anywhere.
        </p>
        <p class="body text-[0.8125rem] font-semibold">hey@pushpak1300.me</p>
      </div>
    </Tile>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta, useAsyncData, queryCollection } from "#imports";
import appConfig from "~/app.config";

const title = "Talks";
const description =
  "Conferences and meetups where I have spoken about Laravel, PHP and AI tooling.";
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://pushpak1300.me/og/talks.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: "summary_large_image",
  twitterImage: "https://pushpak1300.me/og/talks.jpg",
});
useHead({ title: `${title} | ${appConfig.name}` });

// ponytail: 7 unique talk backgrounds (invite uses 030), wraps only if more talks land
const bgs = ["015", "040", "074", "021", "026", "031", "037"];

type Instance = {
  conference: string;
  date: string;
  slidesUrl?: string;
  youtubeUrl?: string;
  tweetUrl?: string;
};
type Talk = { title: string; instances: Instance[] };

const { data } = await useAsyncData("talks", () => queryCollection("talks").all());
const talks = computed<Talk[]>(() =>
  (data.value ?? [])
    .filter((t) => t.instances.length)
    .map((t) => ({
      title: t.title,
      instances: [...t.instances].sort((a, b) => ts(b.date) - ts(a.date)),
    }))
    .sort((a, b) => ts(b.instances[0].date) - ts(a.instances[0].date)),
);
const venue = (v: string) => v.replace(/\s*\((In-Person|Online)\)/i, "");
const video = (t: Talk) => t.instances.find((i) => i.youtubeUrl)?.youtubeUrl;
</script>
