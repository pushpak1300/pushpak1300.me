<template>
  <footer
    class="text-center text-sm py-1 font-medium text-gray-500"
    role="contentinfo"
  >
    <ul class="flex flex-col justify-center list-none">
      <li class="md:mr-2">
        &copy; Pushpak Chhajed <span v-text="new Date().getFullYear()"></span>.
      </li>

      <li>
        Built with
        <a
          href="https://nuxtjs.org/"
          class="hover:text-gray-900 underline"
          target="_blank"
          title="The Intuitive
Vue Framework"
          >Nuxt Js</a
        >
        ,
        <a
          href="https://tailwindcss.com"
          target="_blank"
          title="Tailwind CSS, a utility-first CSS framework"
          class="hover:text-gray-900 underline"
          >Tailwind CSS</a
        >
        and ❤️
      </li>
    </ul>
  </footer>
</template>
