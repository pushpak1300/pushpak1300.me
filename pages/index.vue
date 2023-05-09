<template>
  <div>
    <div
      class="
        dark:bg-gray-800
        flex-col
        flex-grow
        container
        max-w-4xl
        md:py-12
        py-8
        px-6
      "
    >
      <div class="mb-8">
        <TheHomeIntroduction />
      </div>
      <div class="mb-4">
        <TheHomeBlogList v-if="blogs" :blogs="blogs" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let blogs: Array<Object> = await $fetch('https://dev.to/api/articles?username=pushpak1300')
blogs = blogs.slice(0, 2)
</script>
