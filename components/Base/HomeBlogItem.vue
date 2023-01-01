<template>
  <div class="text-gray-500 dark:text-gray-300">
    <p class="text-sm">
      <time :datetime="new Date(Date.parse(props.blog.created_at))">{{
        new Date(Date.parse(props.blog.created_at)).toLocaleDateString("en-US")
      }}</time>
    </p>
    <a :href="props.blog.url" target="_blank" rel="noopener" class="mt-1 block">
      <p class="text-xl font-semibold text-gray-700 dark:text-gray-100">
        {{ props.blog.title }}
      </p>
      <p class="mt-3 text-base">
        {{ props.blog.description }}
      </p>
    </a>
    <div class="mt-3">
      <a
        :href="props.blog.url"
        target="_blank"
        rel="noopener"
        class="text-base font-semibold text-gray-700 dark:text-gray-300 hover"
      >
        Read full blog
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blog: {
    type: Object,
    required: true
  }
})
</script>
