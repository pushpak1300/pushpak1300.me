<template>
  <!-- For Navitem active class check tailwind.css -->
  <NuxtLink
    :to="targetUrl"
    class="text-gray-500 hover:text-gray-900 hover:underline px-4 py-2 rounded-md text-md font-medium"
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
