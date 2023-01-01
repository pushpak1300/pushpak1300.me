<template>
  <NuxtLink
    :to="props.targetUrl"
    class="
      text-gray-500
      hover:text-gray-900
      outline-none
      block
      px-3
      py-2
      rounded-md
      text-base
      font-medium
      text-center
      dark:text-gray-300 dark:hover:text-gray-100
    "
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  targetUrl: {
    type: String,
    required: true,
  },
})
</script>
