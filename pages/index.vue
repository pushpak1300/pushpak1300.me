<template>
  <main class="sm:space-y-12 space-y-10">
    <section v-motion-fade-visible class="space-y-6">
      <NuxtImg
        src="/avtar.webp"
        alt="Pushpak Chhajed"
        class="bg-stone-100 border border-stone-200 dark:bg-white/5 dark:border-white/10 object-cover rounded-full size-16"
        placeholder
        width="64"
        height="64"
        format="webp"
      />

      <div class="space-y-4">
        <p class="dark:text-stone-400 text-[11px] text-stone-500 tracking-[0.24em] uppercase">
          Open source engineer • India
        </p>
        <h1
          class="dark:text-stone-50 font-serif italic sm:text-6xl text-4xl text-stone-950 tracking-tight"
        >
          Pushpak Chhajed
        </h1>
      </div>
    </section>

    <div class="border-stone-200/80 border-t dark:border-white/10" />

    <section
      v-motion-fade-visible
      :delay="80"
      class="gap-4 grid sm:gap-8 sm:grid-cols-[112px_minmax(0,1fr)]"
    >
      <p class="dark:text-stone-500 font-medium pt-1 text-stone-400 text-xs">Connect</p>
      <div class="space-y-4">
        <div
          class="dark:text-stone-300 flex flex-wrap gap-x-3 gap-y-2 items-center text-sm text-stone-700"
        >
          <template v-for="(link, index) in connectLinks" :key="link.label">
            <ULink
              :to="link.href"
              :target="link.external ? '_blank' : '_self'"
              class="dark:hover:text-blue-400 font-semibold hover:text-blue-600 transition-colors"
            >
              {{ link.label }}
            </ULink>
            <span v-if="index < connectLinks.length - 1" class="dark:text-stone-600 text-stone-300">
              ·
            </span>
          </template>
        </div>
        <p class="dark:text-stone-400 leading-7 text-sm text-stone-500">
          Short intros, open source work, product ideas, or conference invites are all welcome.
          <ULink
            :to="appConfig.resumeURL"
            target="_blank"
            class="dark:hover:text-blue-400 dark:text-stone-100 hover:text-blue-600 text-stone-900 transition-colors"
          >
            Resume →
          </ULink>
        </p>
      </div>
    </section>

    <div class="border-stone-200/80 border-t dark:border-white/10" />

    <section
      v-motion-fade-visible
      :delay="120"
      class="gap-4 grid sm:gap-8 sm:grid-cols-[112px_minmax(0,1fr)]"
    >
      <p class="dark:text-stone-500 font-medium pt-1 text-stone-400 text-xs">Now</p>
      <div class="dark:text-stone-400 leading-7 space-y-3 text-sm text-stone-600">
        <p v-for="item in nowItems" :key="item">
          {{ item }}
        </p>
      </div>
    </section>

    <div class="border-stone-200/80 border-t dark:border-white/10" />

    <section
      v-motion-fade-visible
      :delay="160"
      class="gap-4 grid sm:gap-8 sm:grid-cols-[112px_minmax(0,1fr)]"
    >
      <p class="dark:text-stone-500 font-medium pt-1 text-stone-400 text-xs">History</p>
      <div class="space-y-4">
        <article
          v-for="item in history"
          :key="item.year + item.title"
          class="border-l border-stone-200 dark:border-white/10 pl-4"
        >
          <p class="dark:text-stone-500 text-stone-400 text-xs tracking-[0.18em] uppercase">
            {{ item.year }}
          </p>
          <h2 class="dark:text-stone-100 font-sans font-semibold mt-2 text-base text-stone-900">
            {{ item.title }}
          </h2>
          <p class="dark:text-stone-400 leading-7 mt-2 text-sm text-stone-600">
            {{ item.description }}
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from "#imports";
import appConfig from "~/app.config";

const title = "Pushpak Chhajed";
const description =
  "Open source engineer at Laravel, building thoughtful developer tooling across Laravel, AI, and modern product engineering.";

useSeoMeta({
  title,
  description,
});

useHead({
  title,
});

const connectLinks = [
  {
    label: "Email",
    href: "mailto:hey@pushpak1300.me",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/pushpak1300",
    external: true,
  },
  {
    label: "X",
    href: "https://twitter.com/pushpak1300",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pushpak1300",
    external: true,
  },
  {
    label: "Peerlist",
    href: "https://peerlist.io/pushpak1300",
    external: true,
  },
];

const nowItems = [
  "I am currently part of the Open Source team at Laravel, maintaining Boost, MCP, and Roster.",
  "My recent work sits at the intersection of Laravel, AI systems, product engineering, and developer tooling.",
  "I am based in India, but the work I enjoy most usually spans teams, products, and communities across borders.",
];

const history = [
  {
    year: "2012",
    title: "Started by tinkering",
    description:
      "My path into software started with customizing Cydia themes on an iPad, then quickly grew into an obsession with computers, the internet, and building things from scratch.",
  },
  {
    year: "Early years",
    title: "Moved into web products",
    description:
      "After experimenting with Swift, I shifted toward HTML, CSS, and JavaScript. That led to startup work, early product experience, and learning how to ship useful software end to end.",
  },
  {
    year: "2019–2023",
    title: "Product engineering across teams",
    description:
      "I worked with teams such as Eastern Enterprise and Clearglass Analytics, where I got deeper into Laravel, product thinking, and the realities of building software that supports real customer workflows.",
  },
  {
    year: "2024",
    title: "Laravel and AI became the center",
    description:
      "At Bigly Sales and through speaking opportunities like Laracon India, I went deeper into Laravel, LLM workflows, and automation at scale, which sharpened the direction of my work.",
  },
  {
    year: "Now",
    title: "Open source at Laravel",
    description:
      "Today I focus on open source tools, developer experience, and the kinds of systems that make modern product teams faster and more effective.",
  },
];
</script>
