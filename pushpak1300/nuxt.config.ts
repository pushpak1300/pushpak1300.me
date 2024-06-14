// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", "@nuxt/content"],
  colorMode: {
    preference: "light",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  typescript: {
    strict: false,
  },
  components: [
    "~/components",
    { path: "~/components/app", prefix: "App" },
    { path: "~/components/home", prefix: "Home" },
    { path: "~/components/project", prefix: "Project" },
  ],
  eslint: {
    config: {
      stylistic: {
        indent: "tab",
        semi: true,
        quotes: "single",
      },
    },
  },
});
