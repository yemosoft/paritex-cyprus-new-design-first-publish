import AuthClerk from '@/libs/clerk/AuthClerk';
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, computed } from 'vue';

const clerk = await AuthClerk.getClerk()

export const useUserSession = defineStore('userSession', async () => {

    const userData = ref(clerk)
    const isLoggedIn = computed(() => (clerk.user != null) ? true : false)

    return {
        isLoggedIn,
        userData
    }
})

const ss = useUserSession as any

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
