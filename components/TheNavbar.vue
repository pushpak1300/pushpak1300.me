<template>
  <div class="relative">
    <div class="mx-auto px-2 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-2 border-gray-100
          py-4
          md:py-2 md:justify-start md:space-x-10
          dark:border-gray-50
        "
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <span class="sr-only">Logo</span>
            <img
              class="h-12 w-auto sm:h-12"
              :src="
                $colorMode.preference === 'dark'
                  ? require(`~/assets//PCLight.svg`)
                  : require(`~/assets//PC.svg`)
              "
              alt="logo"
            />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            class="
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500 hover:bg-gray-100
              dark:hover:bg-gray-700 dark:hover:text-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-gray-500
            "
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open menu</span>
            <svg
              class="h-6 w-6"
              x-description="Heroicon name: outline/menu"
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
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <BaseNavItem target-url="/"> Home </BaseNavItem>
          <BaseNavItem target-url="/about"> About </BaseNavItem>
          <BaseNavItem target-url="/projects"> Projects </BaseNavItem>
          <BaseNavItem target-url="/blogs"> Blogs </BaseNavItem>
          <BaseNavItem target-url="/resume"> Resume </BaseNavItem>
        </nav>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <IDarkMode />
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="mobileMenuOpen"
        class="
          bg-white
          dark:bg-gray-800
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            divide-y-2 divide-gray-50
            dark:divide-gray-800 dark:ring-offset-gray-200
          "
          @click.capture="mobileMenuOpen = false"
        >
          <div class="pt-5 px-5">
            <div class="flex items-center justify-between">
              <div>
                <IDarkMode />
              </div>
              <div class="mr-2">
                <button
                  type="button"
                  class="
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500 hover:bg-gray-100
                    dark:hover:bg-gray-700 dark:hover:text-gray-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-gray-500
                  "
                  @click="mobileMenuOpen = false"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    x-description="Heroicon name: outline/x"
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
            </div>
            <nav class="grid gap-y-8">
              <div class="px-2 pt-2 pb-3 space-y-1">
                <BaseMobileNavItem target-url="/"> Home </BaseMobileNavItem>
                <BaseMobileNavItem target-url="/about">
                  About
                </BaseMobileNavItem>
                <BaseMobileNavItem target-url="/projects">
                  Projects
                </BaseMobileNavItem>
                <BaseMobileNavItem target-url="/blogs">
                  Blogs
                </BaseMobileNavItem>
                <BaseMobileNavItem target-url="/resume">
                  Resume
                </BaseMobileNavItem>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Navabar extends Vue {
  mobileMenuOpen = false
}
</script>
