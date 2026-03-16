<template>
  <ULink
    to="/"
    class="-translate-x-2 dark:hover:text-stone-100 dark:text-stone-400 duration-150 ease-out gap-2 group hover:text-stone-900 inline-flex items-center mb-2 text-stone-500 transition-colors"
  >
    <div class="overflow-hidden relative size-4">
      <div class="*:absolute *:left-0 *:size-4 *:top-0 *:transition-transform relative size-4">
        <Icon
          name="heroicons:arrow-up-left"
          class="group-hover:-translate-x-4 group-hover:-translate-y-4"
        />
        <Icon
          name="heroicons:arrow-up-left"
          class="group-hover:translate-x-0 group-hover:translate-y-0 translate-x-4 translate-y-4"
        />
      </div>
    </div>
    <span>Home</span>
  </ULink>
</template>
