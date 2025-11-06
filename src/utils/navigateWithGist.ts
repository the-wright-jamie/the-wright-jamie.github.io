import router from '@/router'
import { fetchGistRaw } from '@/services/gistService'
import { pageVisible } from '@/state/transitionState'

export async function navigateWithGist(target: { name: string; params?: any }, gistUrl?: string) {
  try {
    // start fade out
    pageVisible.value = false
    // wait for fade duration (match App.vue CSS, 300ms + small buffer)
    await new Promise((r) => setTimeout(r, 340))

    // fetch gist while hidden if provided
    if (gistUrl) {
      await fetchGistRaw(gistUrl)
    }

    // navigate to route now that data is ready
    await router.push(target)

    // fade in
    pageVisible.value = true
  } catch (e) {
    console.error('navigateWithGist failed', e)
    // fallback: ensure visible and navigate
    pageVisible.value = true
    await router.push(target)
  }
}
