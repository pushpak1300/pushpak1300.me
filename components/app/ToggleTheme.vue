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
      class="dark:hover:bg-white/10 dark:hover:text-white dark:text-stone-400 flex hover:bg-stone-100 hover:text-stone-950 items-center justify-center ml-1 relative rounded-full shrink-0 size-8 text-stone-500 transition"
      @click="isDark = !isDark"
    >
      <Icon aria-hidden="true" :name="getIconName" class="size-5" />
      <span class="sr-only">Toggle Theme</span>
    </button>
  </UTooltip>
</template>
