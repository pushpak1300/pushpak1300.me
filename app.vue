<template>
  <SpeedInsights />
  <UApp>
    <div class="flex flex-col min-h-screen">
      <AppNavbar />
      <UContainer class="flex-1 pb-28 pt-8 sm:pb-32 sm:pt-12">
        <NuxtPage />
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
