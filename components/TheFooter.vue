<template>
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
      <div class="mt-1 flex justify-center space-x-6">
        <Instagram />
        <ITwitter />
        <IGithub />
        <IFeed />
        <IDevTo />
      </div>
      <p class="mt-2 text-center text-base text-gray-400">
        © Pushpak Chhajed <span v-text="new Date().getFullYear()"></span>.
        <br />
        Built with
        <a
          href="https://nuxtjs.org/"
          class="hover:text-gray-900 underline"
          target="_blank"
          title="The Intuitive Vue Framework"
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
      </p>
    </div>
  </footer>
</template>
