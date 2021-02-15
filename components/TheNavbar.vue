<template>
  <nav class="bg-gray-50 md:mt-1">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            class="inline-flex items-center justify-center p-1 rounded-md text-gray-900 focus:outline-none focus:bg-gray-700 focus:text-gray-200 focus:ring-1 focus:ring-offset-1 focus:ring-gray-200"
            @click="toggleMainMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              :class="isMainMenuEnabled ? 'hidden' : 'block'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="h-6 w-6"
              :class="isMainMenuEnabled ? 'block' : 'hidden'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-16 w-auto"
              src="~/assets//PC.svg"
              alt="logo"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <BaseNavItem target-url="/">Home</BaseNavItem>
              <BaseNavItem target-url="/about">About</BaseNavItem>
              <BaseNavItem target-url="/blogs">Blogs</BaseNavItem>
              <BaseNavItem target-url="/projects">Projects</BaseNavItem>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <IGithub />
          <ITwitter />
          <IFeed />
          <button
            class="text-gray-800 md:text-gray-500 hover:text-gray-800 focus:outline-none p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="block h-6 w-6"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="isMainMenuEnabled ? 'sm:block lg:hidden' : 'hidden sm:hidden'">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <BaseMobileNavItem target-url="/">Home</BaseMobileNavItem>
        <BaseMobileNavItem target-url="/about">About</BaseMobileNavItem>
        <BaseMobileNavItem target-url="/blogs">Blogs</BaseMobileNavItem>
        <BaseMobileNavItem target-url="/projects">Projects</BaseMobileNavItem>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navabar',
  data() {
    return {
      isMainMenuEnabled: false,
    }
  },
  methods: {
    toggleMainMenu() {
      this.isMainMenuEnabled = !this.isMainMenuEnabled
    },
  },
}
</script>
