<template>
  <footer
    class="border-stone-200/80 border-t dark:border-white/10 dark:text-stone-400 pt-6 sm:flex sm:items-center sm:justify-between text-stone-500 text-xs"
  >
    <div>© <span v-text="new Date().getFullYear()" /> Pushpak Chhajed. All rights reserved.</div>
    <div />
    <div class="mt-2 sm:mt-0 sm:text-right">
      Built with
      <AppExternalLink href="https://nuxt.com/" title="The Intuitive Vue Framework">
        Nuxt
      </AppExternalLink>
      &
      <AppExternalLink
        href="https://tailwindcss.com"
        title="Tailwind CSS, a utility-first CSS framework"
      >
        Tailwind CSS ❤️
      </AppExternalLink>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
