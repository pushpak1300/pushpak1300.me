<template>
  <SpeedInsights />
  <AppCursor />
  <div class="shell">
    <AppSidebar :home="$route.path === '/'" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>
