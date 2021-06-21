<template>
  <div>
    <section
      v-show="about"
      class="text-gray-500 dark:text-gray-300 body-font dark:bg-gray-800"
    >
      <div class="container px-3 py-4 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col sm:flex-row mt-6">
            <div class="sm:w-1/3 text-center">
              <div
                class="
                  w-36
                  h-36
                  rounded-full
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                "
              >
                <img
                  src="~/assets/avtar.webp"
                  alt="Pushpak Profile picture"
                  class="rounded-full h-32 w-36 mx-auto"
                />
              </div>
              <div
                class="
                  flex flex-col
                  items-center
                  text-center
                  justify-center
                  mb-4
                  sm:mb-0
                "
              >
                <h2
                  class="
                    font-medium
                    title-font
                    mt-4
                    text-gray-900
                    dark:text-gray-100
                    text-lg
                  "
                >
                  {{ about.name }}
                </h2>
                <a
                  :href="`mailto:${about.email}`"
                  target="_blank"
                  rel="noopener"
                  class="text-md font-sm text-gray"
                  >{{ about.email }}</a
                >
              </div>
            </div>
            <div
              class="
                sm:w-2/3 sm:pl-8 sm:py-4 sm:border-l
                border-gray-200
                sm:border-t-0
                border-t
                pt-4
                sm:mt-0
                text-center
                sm:text-left
              "
            >
              <p class="leading-relaxed text-lg mb-4">
                <NuxtContent :document="about" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class About extends Vue {
  about: Object = {}

  async created(): Promise<void> {
    this.about = await this.$content('about').fetch()
  }
}
</script>
