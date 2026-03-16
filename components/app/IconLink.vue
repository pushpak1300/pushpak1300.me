<template>
  <UTooltip :text="name" :ui="{ popper: { strategy: 'absolute' } }">
    <a
      :href="link"
      target="_blank"
      class="flex group-hover:text-primary items-center justify-center py-4 relative transition"
    >
      <Icon aria-hidden="true" :name="icon" class="size-5 z-10" />

      <span
        v-if="active"
        class="-translate-x-1/2 -translate-y-1/2 absolute bg-neutral-200 dark:bg-white/10 left-1/2 rounded-xl size-8 top-1/2 z-0"
      />
      <span class="sr-only">{{ name }}</span>
    </a>
    <a
      v-if="showName"
      :href="link"
      target="_blank"
      class="flex items-center justify-center relative"
    >
      <span class="group-hover:text-primary-500 sm:not-sr-only sm:pr-2 sr-only">{{ name }}</span>
    </a>
  </UTooltip>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    default: "_blank",
  },
  active: {
    type: Boolean,
    required: false,
    default: false,
  },
  showName: {
    type: Boolean,
    default: false,
  },
});
</script>
