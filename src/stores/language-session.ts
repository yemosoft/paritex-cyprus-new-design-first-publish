import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, computed } from 'vue'
import Clerk from '@clerk/clerk-js';
import { useStorage } from '@vueuse/core';
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { RU, TR, US } from 'country-flag-icons/string/3x2'

export type UserData = Record<string, any> | null


export const useLanguageSession = defineStore('languageSession', () => {

  const _languages = [
    {
      flag: US,
      name: 'English',
      shortname: 'en',
    },
    {
      flag: TR,
      name: 'Türkçe',
      shortname: 'tr',
    }
  ]

  const languages = ref(_languages)
  const language = useStorage('language', 'en')

  const getLanguage = (shortName) => {
    for (let i = 0; i < _languages.length; i++) {
      if (_languages[i].shortname == shortName) return _languages[i]
    }
    throw new Error('No such language: ' + shortName)
  }

  const changeLanguage = (lang: string) => {
    if (getLanguage(lang) == null) {
      throw new Error('Language ' + lang + ' is not registered');
    }
    language.value = lang
  }

  return {
    languages,
    language,
    getLanguage,
    changeLanguage
  }
})

const ss = useLanguageSession as any

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
