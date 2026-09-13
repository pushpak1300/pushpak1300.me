// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@nuxt/image", "@nuxt/content", "@nuxt/icon"],
  content: {},
  ssr: true,
  components: ["~/components", { path: "~/components/app", prefix: "App" }],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
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
        { name: "theme-color", content: "#000000" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=Geist+Mono:wght@400;500&display=swap",
        },
        { rel: "icon", href: "/favicon.ico" },
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
  vite: { plugins: [tailwindcss()] },
  compatibilityDate: "2024-11-16",
  nitro: {
    prerender: {
      routes: ["/blogs"],
    },
  },
  typescript: {
    strict: false,
  },
});
