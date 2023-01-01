// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },
  components: [
    '~/components',
    {
      path: '~/components/Icons/',
      prefix: 'I',
    },
    {
      path: '~/components/Base/',
      prefix: 'Base',
    },
  ],
})
