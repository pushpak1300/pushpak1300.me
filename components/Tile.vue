<template>
  <component
    :is="to ? NuxtLink : 'div'"
    :to="to"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener' : undefined"
    :class="['card', span, bg && 'img']"
  >
    <NuxtImg
      v-if="bg"
      :src="`/bg/${bg}.jpg`"
      class="bgimg"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : undefined"
      format="webp"
      quality="70"
      sizes="sm:100vw md:50vw lg:480px xl:560px 2xl:680px"
      alt=""
    />
    <span v-if="to" class="arrow" aria-hidden="true">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M7 17L17 7" />
        <path d="M8 7h9v9" />
      </svg>
    </span>
    <p v-if="label" class="label">{{ label }}</p>
    <slot />
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";

defineProps<{
  to?: string;
  external?: boolean;
  label?: string;
  span?: string;
  bg?: string;
  eager?: boolean;
}>();
</script>
