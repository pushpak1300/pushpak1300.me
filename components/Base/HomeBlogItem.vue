<template>
  <div class="text-gray-500 dark:text-gray-300">
    <p class="text-sm">
      <time :datetime="new Date(Date.parse(blog.created_at))">{{
        $dateFns.format(new Date(Date.parse(blog.created_at)), 'd MMM, yyyy')
      }}</time>
    </p>
    <a :href="blog.url" target="_blank" rel="noopener" class="mt-1 block">
      <p class="text-xl font-semibold text-gray-700 dark:text-gray-100">
        {{ blog.title }}
      </p>
      <p class="mt-3 text-base">
        {{ blog.description }}
      </p>
    </a>
    <div class="mt-3">
      <a
        :href="blog.url"
        target="_blank"
        rel="noopener"
        class="text-base font-semibold text-gray-700 dark:text-gray-300 hover"
      >
        Read full blog
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
}
</script>
