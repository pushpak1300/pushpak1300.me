<template>
  <!-- For Navitem active class check tailwind.css -->
  <NuxtLink
    :to="targetUrl"
    class="
      text-base
      font-medium
      text-gray-500
      hover:text-gray-900
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
export default class NavItem extends Props {}
</script>
