import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

module.exports = {
  safelist: ['router-link-exact-active'],
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.neutral
      },
      container: {
        center: true
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
