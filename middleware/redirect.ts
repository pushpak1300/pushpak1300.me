const MAPPINGS: Record<string, string> = {
  '/blogs': 'https://dev.to/pushpak1300',
  '/resume':
    'https://drive.google.com/file/d/1t1KN1L5oL7FUyx9hvehRLcyrgFz6iwAf/view'
}

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path in MAPPINGS) {
    window.open(MAPPINGS[to.path], '_blank')
    if (from.path in MAPPINGS) {
      return navigateTo('/')
    }
    return navigateTo(from.path)
  }
})
