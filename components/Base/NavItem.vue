<template>
  <!-- For Navitem active class check tailwind.css -->
  <NuxtLink
    :to="props.targetUrl"
    :target="props.target"
    class="
      text-base
      font-medium
      text-gray-500
      hover:text-gray-900
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
    required: true
  },
  target: {
    type: String,
    default: ''
  }
})
</script>
