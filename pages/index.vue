<template>
  <main
    role="main"
    class="flex-auto w-full container max-w-4xl mx-auto md:py-12 py-8 px-6"
  >
    <div class="mb-8">
      <TheHomeIntroduction />
    </div>
    <div class="mb-4">
      <TheHomeBlogList :blogs="blogs" />
    </div>
  </main>
</template>

<script>
export default {
  async fetch() {
    this.blogs = await this.$http
      .$get('https://dev.to/api/articles?username=pushpak1300')
      .then((res) => res.slice(0, 2))
  },
  data() {
    return {
      blogs: [],
    }
  },
}
</script>
