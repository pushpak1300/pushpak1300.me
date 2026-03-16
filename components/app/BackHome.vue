<template>
  <ULink
    to="/"
    class="group mb-2 inline-flex -translate-x-2 items-center gap-2 text-stone-500 transition-colors duration-150 ease-out hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
  >
    <div class="relative size-4 overflow-hidden">
      <div class="relative size-4 *:absolute *:left-0 *:top-0 *:size-4 *:transition-transform">
        <Icon
          name="heroicons:arrow-up-left"
          class="group-hover:-translate-x-4 group-hover:-translate-y-4"
        />
        <Icon
          name="heroicons:arrow-up-left"
          class="translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"
        />
      </div>
    </div>
    <span>Home</span>
  </ULink>
</template>
