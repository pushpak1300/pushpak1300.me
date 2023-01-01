<template>
  <div v-show="route.path !== targetUrl" class="px-5 py-2">
    <NuxtLink
      :to="props.targetUrl"
      class="
        text-base text-gray-500
        hover:text-gray-900
        dark:hover:text-gray-300
      "
    >
      <slot />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const props = defineProps({
  targetUrl: {
    type: String,
    required: true,
  },
})
</script>
