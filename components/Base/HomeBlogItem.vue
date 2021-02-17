<template>
  <div>
    <p class="text-sm text-gray-500">
      <time :datetime="new Date(Date.parse(blog.created_at))">{{
        $dateFns.format(new Date(Date.parse(blog.created_at)), 'd MMM, yyyy')
      }}</time>
    </p>
    <a href="#" class="mt-1 block">
      <p class="text-xl font-semibold text-gray-900">
        {{ blog.title }}
      </p>
      <p class="mt-3 text-base text-gray-500">
        {{ blog.description }}
      </p>
    </a>
    <div class="mt-3">
      <a
        :href="blog.url"
        target="_blank"
        rel="noopener"
        class="text-base font-semibold text-gray-600 hover:text-gray-500"
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
