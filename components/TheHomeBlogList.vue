<template>
  <div class="mt-4 md:mt-12">
    <div class="max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
      <div>
        <h2
          class="
            text-2xl
            tracking-tight
            font-extrabold
            text-gray-700
            dark:text-gray-100
            sm:text-3xl
          "
        >
          Latest Blogs
        </h2>
        <div class="lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
          <p class="text-base text-gray-500 dark:text-gray-300">
            Get latest articles in your inbox.
          </p>
          <form
            class="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end"
            @submit.prevent="subscribeToNewsletter"
          >
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                v-model="email"
                name="email-address"
                type="email"
                autocomplete="email"
                required
                class="
                  appearance-none
                  w-full
                  px-4
                  py-2
                  border border-gray-300
                  text-base
                  rounded-md
                  text-gray-700
                  dark:text-gray-100 dark:bg-gray-800 dark:placeholder-gray-300
                  placeholder-gray-500
                  focus:outline-none focus:ring-gray-500 focus:border-gray-500
                  lg:max-w-xs
                "
                placeholder="Enter your email"
              />
            </div>
            <div
              class="
                mt-2
                flex-shrink-0
                w-full
                flex
                rounded-md
                shadow-sm
                sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex
              "
            >
              <button
                v-if="loading"
                class="
                  w-full
                  bg-gray-600
                  dark:bg-gray-300 dark:text-gray-900
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  flex
                  items-center
                  justify-center
                  text-base
                  font-medium
                  text-white
                  hover:bg-gray-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-gray-500
                  sm:w-auto sm:inline-flex
                "
              >
                ⌛
              </button>
              <button
                v-else
                type="submit"
                class="
                  w-full
                  bg-gray-600
                  dark:bg-gray-300 dark:text-gray-900
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  flex
                  items-center
                  justify-center
                  text-base
                  font-medium
                  text-white
                  hover:bg-gray-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-gray-500
                  sm:w-auto sm:inline-flex
                "
                v-text="emailSubmited ? 'Sumbitted' : 'Notify me'"
              >
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-4 pt-8 grid gap-12 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-8">
        <BaseHomeBlogItem v-for="blog in props.blogs" :key="blog.id" :blog="blog" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blogs: {
    type: Array,
    required: true,
  },
});

let email= ref('');
let emailSubmited = ref(false);
let loading = ref(false);

const subscribeToNewsletter = () => {
  loading.value = true
  useAsyncData('post', 'https://usebasin.com/f/baffd19320ff.json', {
    email: email.value,
  })
  email.value = ''
  emailSubmited.value = true
  loading.value = false
};
</script>
