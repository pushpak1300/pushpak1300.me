<template>
  <div
    class="
      dark:bg-gray-800
      flex-col
      h-full
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
      <TheHomeBlogList :blogs="blogs" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
    }
  },
  async created() {
    this.blogs = await this.$http
      .$get('https://dev.to/api/articles?username=pushpak1300')
      .then((res) => res.slice(0, 2))
  },
}
</script>
