import { Middleware } from '@nuxt/types'

const MAPPINGS: Record<string, string> = {
  '/blogs': 'https://dev.to/pushpak1300',
  '/resume':
    'https://drive.google.com/file/d/1t1KN1L5oL7FUyx9hvehRLcyrgFz6iwAf/view',
}

const redirectTo: Middleware = ({ from, route, redirect }) => {
  if (route.path in MAPPINGS) {
    window.open(MAPPINGS[route.path], '_blank')
    if (from.path in MAPPINGS) {
      return redirect('/')
    }
    return redirect(from.path)
  }
}

export default redirectTo
