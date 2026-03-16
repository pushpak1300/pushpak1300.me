<template>
  <div class="space-y-4">
    <h1 class="dark:text-stone-100 font-serif italic text-4xl text-stone-900 tracking-tight">
      {{ title }}
    </h1>
    <p class="dark:text-stone-400 leading-7 max-w-2xl text-sm text-stone-600">
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
