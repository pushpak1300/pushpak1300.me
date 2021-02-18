<template>
  <main
    role="main"
    class="flex-auto w-full container max-w-4xl mx-auto md:py-8 py-4 px-6 text-gray-900"
  >
    <div class="mb-12 md:mb-6">
      <div class="mb-4">
        <h1 class="mb-0 font-bold text-4xl">Projects</h1>
        <p class="my-2">List of projects that I am proud of</p>
      </div>
      <BaseProject
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </main>
</template>

<script>
export default {
  async fetch() {
    this.projects = await this.$content('projects').fetch()
  },
  data() {
    return {
      projects: [],
    }
  },
}
</script>
