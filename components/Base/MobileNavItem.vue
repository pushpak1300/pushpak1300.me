<template>
  <NuxtLink
    :to="targetUrl"
    class="
      text-gray-500
      hover:text-gray-900
      outline-none
      block
      px-3
      py-2
      rounded-md
      text-base
      font-medium
      text-center
      dark:text-gray-300 dark:hover:text-gray-100
    "
  >
    <slot />
  </NuxtLink>
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
export default class MobileNavItem extends Props {}
</script>
