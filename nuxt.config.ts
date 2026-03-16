// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/content", "@vueuse/motion/nuxt"],
  content: {},
  ssr: true,
  components: [
    "~/components",
    { path: "~/components/app", prefix: "App" },
    { path: "~/components/home", prefix: "Home" },
  ],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "min-h-screen antialiased",
      },
      title: "Pushpak Chhajed",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Pushpak's Portfolio",
        },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400..700&display=swap",
        },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "light",
  },
  compatibilityDate: "2024-11-16",
  nitro: {
    prerender: {
      routes: ["/blogs", "/projects"],
    },
  },
  typescript: {
    strict: false,
  },
});
