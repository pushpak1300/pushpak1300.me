<template>
  <div class="md:py-2 py-4">
    <ULink
      :to="blog.external_url"
      class="group rounded-lg"
      :target="blog.external ? '_blank' : '_self'"
    >
      <div v-motion-fade-visible :delay="300" class="grid grid-cols-1 group md:grid-cols-4">
        <time
          class="dark:text-neutral-400 flex-none group-hover:text-primary md:py-8 text-neutral-800 text-sm"
          :datetime="blog.published_at"
        >
          {{ getReadableDate(blog.published_at) }}
        </time>
        <div
          class="md:col-span-3 md:dark:hover:bg-neutral-900 md:hover:bg-neutral-100 md:p-8 py-4 rounded-sm space-y-2"
        >
          <h2
            class="dark:group-hover:text-primary-200 font-medium group-hover:text-primary-500 text-lg"
          >
            {{ blog.title }}
          </h2>
          <p class="dark:text-neutral-400 mt-2 text-neutral-600 text-sm">
            {{ blog.description }}
          </p>
          <div class="text-primary text-sm">Read More →</div>
        </div>
      </div>
    </ULink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  blog: {
    type: Object,
    required: true,
  },
});

const getReadableDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>
