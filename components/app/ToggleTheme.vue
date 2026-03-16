<script setup>
const colorMode = useColorMode();

const getIconName = computed(() => {
  return isDark.value ? "heroicons:sun" : "heroicons:moon";
});

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <UTooltip text="Toggle theme" :ui="{ popper: { strategy: 'absolute' } }">
    <button
      class="relative ml-1 flex size-8 shrink-0 items-center justify-center rounded-full text-stone-500 transition hover:bg-stone-100 hover:text-stone-950 dark:text-stone-400 dark:hover:bg-white/10 dark:hover:text-white"
      @click="isDark = !isDark"
    >
      <Icon aria-hidden="true" :name="getIconName" class="size-5" />
      <span class="sr-only">Toggle Theme</span>
    </button>
  </UTooltip>
</template>
