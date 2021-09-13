<template>
  <div
    v-show="projects.length"
    class="
      flex-grow
      w-full
      container
      max-w-4xl
      mx-auto
      md:py-8
      py-4
      px-6
      text-gray-700
      dark:text-gray-50
    "
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Project } from '~/types/plugin-types'

@Component
export default class Projects extends Vue {
  projects: Project[] = []
  loading = true 

  async created(): Promise<void> {
    this.projects = await this.$content('projects').fetch() as []
    this.loading = false
  }
}
</script>
