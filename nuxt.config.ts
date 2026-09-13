// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@nuxt/image", "@nuxt/content", "@nuxt/icon", "@nuxt/fonts"],
  // ponytail: fonts are downloaded at build and served from /_fonts with preload, no Google roundtrip at runtime
  fonts: {
    families: [
      { name: "Bricolage Grotesque", provider: "google", weights: [400, 500, 600, 700] },
      { name: "Geist Mono", provider: "google", weights: [400, 500] },
    ],
  },
  icon: { clientBundle: { scan: true, sizeLimitKb: 256 } },
  // ponytail: images are optimised at prerender time, so the runtime server ships no ipx/sharp
  image: { provider: "ipxStatic" },
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
  routeRules: { "/projects": { redirect: { to: "https://github.com/pushpak1300", statusCode: 302 } } },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ["/", "/blogs", "/talks"],
    },
  },
  typescript: {
    strict: false,
  },
});
