<template>
  <div v-show="$nuxt.$route.path !== targetUrl" class="px-5 py-2">
    <NuxtLink
      :to="targetUrl"
      class="
        text-base text-gray-500
        hover:text-gray-900
        dark:hover:text-gray-300
      "
      ><slot></slot
    ></NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    targetUrl: {
      type: String,
      required: true,
    },
  },
}
</script>
