<template>
  <div v-show="$nuxt.$route.path !== targetUrl" class="px-5 py-2">
    <NuxtLink
      :to="targetUrl"
      class="
        text-base text-gray-500
        hover:text-gray-900
        dark:hover:text-gray-300
      "
    >
      <slot />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const Props = Vue.extend({
  props: {
    targetUrl: {
      type: String,
      required: true,
    },
  },
})

@Component
export default class FooterNavItem extends Props {}
</script>
