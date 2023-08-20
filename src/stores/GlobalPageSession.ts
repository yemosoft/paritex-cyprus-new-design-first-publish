import AuthClerk from '@/libs/clerk/AuthClerk';
import { useStorage } from '@vueuse/core';
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, computed } from 'vue';



export const useGlobalPageSession = defineStore('globalPageSession', () => {

    const cookieAccepted = useStorage('cookie-accepted', false)
    const acceptCookie = () => {
        cookieAccepted.value = true
    }
    return {
        cookieAccepted,
        acceptCookie
    }
})

const ss = useGlobalPageSession as any

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(ss, import.meta.hot))
}
