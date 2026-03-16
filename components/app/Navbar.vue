<template>
  <div class="bottom-5 fixed inset-x-0 pointer-events-none px-3 sm:bottom-8 z-50">
    <nav class="flex items-center justify-center max-w-full mx-auto pointer-events-auto w-fit">
      <div
        class="backdrop-blur bg-white/90 border border-stone-200/80 dark:bg-stone-950/90 dark:border-white/10 dark:ring-white/10 dark:text-stone-200 flex gap-1 items-center max-w-full overflow-x-auto px-2 py-2 ring-1 ring-black/5 rounded-full shadow-lg shadow-stone-900/8 text-stone-700"
      >
        <ULink
          to="/"
          class="bg-stone-100 border border-stone-200 dark:bg-white/5 dark:border-white/10 flex items-center justify-center mr-1 overflow-hidden rounded-full shrink-0 size-8"
          aria-label="Go to homepage"
        >
          <NuxtImg src="/avtar.webp" alt="Pushpak Chhajed" class="object-cover size-full" />
        </ULink>

        <ULink
          v-for="item in items"
          :key="item.path"
          :to="item.path"
          :target="item.external ? '_blank' : '_self'"
          class="dark:hover:text-white font-medium hover:text-stone-950 px-2.5 py-2 relative rounded-full shrink-0 sm:px-3 sm:text-sm text-xs transition-colors"
          :class="
            isActive(item)
              ? 'text-primary-600 dark:text-primary-400'
              : 'text-stone-500 dark:text-stone-400'
          "
        >
          {{ item.name }}
        </ULink>

        <AppToggleTheme />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const route = useRoute();

const items = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Talks",
    path: "/talks",
  },
  {
    name: "Resume",
    external: true,
    path: appConfig.resumeURL,
  },
];

const isActive = (item: (typeof items)[number]) => {
  if (item.external) {
    return false;
  }

  return item.path === "/" ? route.path === "/" : route.path.startsWith(item.path);
};
</script>
