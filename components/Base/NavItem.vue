<template>
  <!-- For Navitem active class check tailwind.css -->
  <NuxtLink
    :to="targetUrl"
    class="text-base font-medium text-gray-500 hover:text-gray-900"
    ><slot></slot
  ></NuxtLink>
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
