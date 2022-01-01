<template>
  <div>
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
        <TheHomeBlogList v-if="blogs" :blogs="blogs" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Index extends Vue {
  blogs: any[] = []

  async mounted(): Promise<void> {
    const response: Array<any> = await this.$http.$get(
      'https://dev.to/api/articles?username=pushpak1300'
    )
    this.blogs = response.slice(0, 2)
  }
}
</script>
