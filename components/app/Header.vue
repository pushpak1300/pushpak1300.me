<template>
  <div class="space-y-4">
    <h1 class="font-serif text-4xl italic tracking-tight text-stone-900 dark:text-stone-100">
      {{ title }}
    </h1>
    <p class="max-w-2xl text-sm leading-7 text-stone-600 dark:text-stone-400">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
