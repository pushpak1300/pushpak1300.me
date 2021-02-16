<template>
  <div class="bg-white mt-4 md:mt-12">
    <div
      class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <div>
        <h2
          class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl"
        >
          Latest Blogs
        </h2>
        <div class="lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
          <p class="text-base text-gray-500">
            Get latest articles in your inbox.
          </p>
          <form class="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autocomplete="email"
                required=""
                class="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-gray-500 focus:border-gray-500 lg:max-w-xs"
                placeholder="Enter your email"
              />
            </div>
            <div
              class="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex"
            >
              <button
                type="button"
                class="w-full bg-gray-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto sm:inline-flex"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-4 pt-8 grid gap-12 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-8">
        <BaseHomeBlogItem />
        <BaseHomeBlogItem />
      </div>
    </div>
  </div>
</template>
