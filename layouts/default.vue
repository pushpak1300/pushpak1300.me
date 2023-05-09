<template>
  <div class="bg-white h-screen flex flex-col dark:bg-gray-800 overflow-x-hidden">
    <TheNavbar />
    <main class="flex-grow dark:bg-gray-800">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'overflow-y-hidden',
    lang: 'en'
  }
})
</script>
