import { contentFunc } from '@nuxt/content/types/content';
import { NuxtHTTPInstance } from '@nuxt/http';
import { ColorModeInstance } from '@nuxtjs/color-mode/types/color-mode';


declare module 'vue/types/vue' {
  interface Vue {
    $http: NuxtHTTPInstance,
    $colorMode: ColorModeInstance,
    $content: contentFunc
  }
}