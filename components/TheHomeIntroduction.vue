<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-900 sm:text-4xl sm:truncate">
      Hey! 👋<br />
      {{ home.title }}
    </h1>

    <p
      class="text-gray-700 text-lg md:text-base dark-mode:text-white leading-normal mb-2 mt-3"
    >
      <NuxtContent :document="home" />
    </p>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.home = await this.$content('home').fetch()
  },
  data() {
    return {
      home: [],
    }
  },
}
</script>
