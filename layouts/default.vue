<template>
  <div class="bg-white h-full flex flex-col dark:bg-gray-800">
    <TheNavbar />
    <main class="flex-grow dark:bg-gray-800">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'dark:bg-gray-800'
  },
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
