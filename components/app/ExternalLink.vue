<template>
  <a
    :href="href"
    :title="title"
    class="dark:text-primary-100 font-bold text-primary-700"
    target="_blank"
    rel="noopener"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string;
  title: string;
}>();
</script>

<style></style>
