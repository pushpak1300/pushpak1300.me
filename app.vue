<template>
  <SpeedInsights />
  <UApp>
    <div class="flex min-h-screen flex-col">
      <AppNavbar />
      <UContainer class="flex-1 pb-16 pt-8 sm:pt-12">
        <NuxtPage />
      </UContainer>
      <UContainer class="pb-24 pt-10 sm:pb-28 sm:pt-12">
        <AppFooter />
      </UContainer>
    </div>
  </UApp>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
