<template>
  <div class="px-2 sm:px-2 dark:bg-gray-800">
    <footer class="border-gray-100">
      <nav
        class="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        <BaseFooterNavItem target-url="/">
          Home
        </BaseFooterNavItem>
        <BaseFooterNavItem target-url="/about">
          About
        </BaseFooterNavItem>
        <BaseFooterNavItem target-url="/projects">
          Projects
        </BaseFooterNavItem>
        <BaseFooterNavItem target-url="/blogs">
          Blogs
        </BaseFooterNavItem>
        <BaseFooterNavItem target-url="/resume">
          Resume
        </BaseFooterNavItem>
      </nav>
      <div class="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div class="mt-1 flex justify-center space-x-6">
          <ILogoInstagram />
          <ITwitter />
          <IGithub />
          <IDevTo />
          <ILinkedIn />
        </div>
        <p class="mt-2 text-center text-base text-gray-500">
          © Pushpak Chhajed <span v-text="new Date().getFullYear()" />.
          <br>
          Built with
          <a
            href="https://nuxtjs.org/"
            class="hover:text-gray-900 underline"
            target="_blank"
            rel="noopener"
            title="The Intuitive Vue Framework"
          >Nuxt Js</a>
          ,
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener"
            title="Tailwind CSS, a utility-first CSS framework"
            class="hover:text-gray-900 underline"
          >Tailwind CSS</a>
          and <span class="font-serif">❤️</span>
        </p>
      </div>
    </footer>
  </div>
</template>
