<template>
  <div class="pointer-events-none fixed inset-x-0 bottom-5 z-50 px-3 sm:bottom-8">
    <nav class="pointer-events-auto mx-auto flex w-fit max-w-full items-center justify-center">
      <div
        class="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-stone-200/80 bg-white/90 px-2 py-2 text-stone-700 shadow-lg shadow-stone-900/8 ring-1 ring-black/5 backdrop-blur dark:border-white/10 dark:bg-stone-950/90 dark:text-stone-200 dark:ring-white/10"
      >
        <ULink
          to="/"
          class="mr-1 flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-stone-200 bg-stone-100 dark:border-white/10 dark:bg-white/5"
          aria-label="Go to homepage"
        >
          <NuxtImg src="/avtar.webp" alt="Pushpak Chhajed" class="size-full object-cover" />
        </ULink>

        <ULink
          v-for="item in items"
          :key="item.path"
          :to="item.path"
          :target="item.external ? '_blank' : '_self'"
          class="relative shrink-0 rounded-full px-2.5 py-2 text-xs font-medium transition-colors hover:text-stone-950 dark:hover:text-white sm:px-3 sm:text-sm"
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
