<!-- 1200×630 social card in the site's bento style: profile card on the left, three photo tiles on the right -->
<template>
  <div
    class="w-full h-full flex gap-4 p-6 bg-black text-[#f5f5f5]"
    style="font-family: &quot;Bricolage Grotesque&quot;"
  >
    <div
      class="flex flex-col w-[430px] h-full p-7 rounded-[20px] border border-solid border-white/15"
      style="background-image: linear-gradient(180deg, #0b1030 0%, #05060f 55%, #000 100%)"
    >
      <img
        src="/avtar.webp"
        width="84"
        height="84"
        class="rounded-[18px]"
        style="object-fit: cover"
      />
      <p class="mt-6 text-[13px] uppercase text-[#a3a3a3]" :style="mono">{{ eyebrow }}</p>
      <h1 class="mt-2 text-[48px] font-bold" style="letter-spacing: -0.03em; line-height: 1.05">
        {{ title }}
      </h1>
      <p v-if="description" class="mt-5 mb-3 text-[17px] text-[#b3b3b3]" style="line-height: 1.6">
        {{ description }}
      </p>
      <!-- ponytail: Takumi ignores flex-wrap, so chips go in fixed rows of two -->
      <div
        v-for="(row, i) in [chips?.slice(0, 2), chips?.slice(2, 4)]"
        :key="i"
        class="mt-2 flex gap-2"
      >
        <span v-for="c in row" :key="c" :style="[mono, chip]">{{ c }}</span>
      </div>
      <p class="mt-auto text-[14px] text-[#8a8a8a]" :style="mono">
        pushpak1300.me{{ path === "/" ? "" : path }}
      </p>
    </div>

    <div class="flex flex-col flex-1 gap-4">
      <div
        v-for="(row, r) in [tiles.slice(0, 1), tiles.slice(1, 3)]"
        :key="r"
        class="flex gap-4"
        :style="{ flex: r ? 3 : 5 }"
      >
        <div
          v-for="t in row"
          :key="t.title"
          class="relative flex flex-col flex-1 p-7 rounded-[20px] border border-solid border-white/15 overflow-hidden"
          style="background-color: #0a0a0a"
        >
          <img
            :src="`/bg/${t.bg}.jpg`"
            class="absolute inset-0 w-full h-full"
            style="object-fit: cover"
          />
          <div
            class="absolute inset-0"
            style="
              background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.1) 0%,
                rgba(0, 0, 0, 0.3) 30%,
                rgba(0, 0, 0, 0.75) 62%,
                rgba(0, 0, 0, 0.92) 100%
              );
            "
          />
          <p class="relative text-[13px] uppercase text-white/70" :style="mono">{{ t.label }}</p>
          <div
            v-if="t.link"
            class="absolute top-[22px] right-[22px] w-10 h-10 flex items-center justify-center rounded-full bg-white/15"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </div>
          <div class="relative mt-auto flex flex-col gap-3">
            <h2
              class="font-semibold"
              :style="{
                fontSize: r ? '22px' : '32px',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                lineClamp: r ? 3 : 2,
              }"
            >
              {{ t.title }}
            </h2>
            <p
              v-if="t.body"
              class="text-[15px] text-white/80"
              style="line-height: 1.5; line-clamp: 2"
            >
              {{ t.body }}
            </p>
            <div v-if="t.chips?.length" class="flex gap-2">
              <span v-for="c in t.chips" :key="c" :style="[mono, chip, chipOnImage]">{{ c }}</span>
            </div>
            <div v-for="[d, v] in t.rows ?? []" :key="d + v" class="flex gap-6 text-[15px]">
              <span
                class="w-[96px] text-white/65"
                :style="[mono, { letterSpacing: 0, whiteSpace: 'nowrap' }]"
                >{{ d }}</span
              >
              <span class="font-semibold">{{ v }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { OgTile } from "~/composables/usePageSeo";

withDefaults(
  defineProps<{
    eyebrow?: string;
    title?: string;
    description?: string;
    chips?: string[];
    path?: string;
    tiles?: OgTile[];
  }>(),
  {
    eyebrow: "Pushpak Chhajed",
    title: "Pushpak Chhajed",
    path: "/",
    tiles: () => [
      {
        bg: "080",
        label: "Now",
        title: "Building the tools that make Laravel teams faster with AI.",
      },
      { bg: "023", label: "Writing", title: "Laravel, AI tooling and MCP, in depth.", link: true },
      { bg: "012", label: "Talks", title: "Conferences and meetups across India.", link: true },
    ],
  },
);

const mono = { fontFamily: "Geist Mono", letterSpacing: "0.06em" };
const chip = {
  lineHeight: "32px",
  padding: "0 14px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.15)",
  backgroundColor: "rgba(255,255,255,0.08)",
  fontSize: "14px",
  letterSpacing: "0",
};
const chipOnImage = {
  backgroundColor: "rgba(255,255,255,0.15)",
  borderColor: "rgba(255,255,255,0.2)",
};
</script>
