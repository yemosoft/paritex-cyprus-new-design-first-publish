<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)


const HSThemeAppearance = {
    init() {
        const defaultTheme = 'dark'
        let theme = localStorage.getItem('pr_theme') || defaultTheme
        /* @ts-ignore */
        if (document.querySelector('html').classList.contains('dark')) return
        this.setAppearance(theme)
    },
    _resetStylesOnLoad() {
        const $resetStyles = document.createElement('style')
        $resetStyles.innerText = `*{transition: unset !important;}`
        $resetStyles.setAttribute('data-hs-appearance-onload-styles', '')
        document.head.appendChild($resetStyles)
        return $resetStyles
    },
    /* @ts-ignore */
    setAppearance(theme, saveInStore = true, dispatchEvent = true) {
        const $resetStylesEl = this._resetStylesOnLoad()

        if (saveInStore) {
            localStorage.setItem('pr_theme', theme)
        }

        if (theme === 'auto') {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
        }
        /* @ts-ignore */
        document.querySelector('html').classList.remove('dark')
        /* @ts-ignore */
        document.querySelector('html').classList.remove('default')
        /* @ts-ignore */
        document.querySelector('html').classList.remove('auto')
        /* @ts-ignore */
        document.querySelector('html').classList.add(this.getOriginalAppearance())

        setTimeout(() => {
            $resetStylesEl.remove()
        })

        if (dispatchEvent) {
            window.dispatchEvent(new CustomEvent('on-hs-appearance-change', { detail: theme }))
        }
    },
    getAppearance() {
        let theme = this.getOriginalAppearance()
        if (theme === 'auto') {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
        }
        return theme
    },
    getOriginalAppearance() {
        const defaultTheme = 'default'
        return localStorage.getItem('pr_theme') || defaultTheme
    }
}
HSThemeAppearance.init()

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (HSThemeAppearance.getOriginalAppearance() === 'auto') {
        HSThemeAppearance.setAppearance('auto', false)
    }
})

window.addEventListener('load', () => {
    const $clickableThemes = document.querySelectorAll('[data-hs-theme-click-value]')
    const $switchableThemes = document.querySelectorAll('[data-hs-theme-switch]')

    $clickableThemes.forEach($item => {
        /* @ts-ignore */
        $item.addEventListener('click', () => HSThemeAppearance.setAppearance($item.getAttribute('data-hs-theme-click-value'), true, $item))
    })

    $switchableThemes.forEach($item => {
        $item.addEventListener('change', (e) => {
            /* @ts-ignore */
            HSThemeAppearance.setAppearance(e.target.checked ? 'dark' : 'default')
        })
        /* @ts-ignore */
        $item.checked = HSThemeAppearance.getAppearance() === 'dark'
    })

    window.addEventListener('on-hs-appearance-change', e => {
        $switchableThemes.forEach($item => {
            /* @ts-ignore */
            $item.checked = e.detail === 'dark'
        })
    })
})



</script>
<template>


     <div class="flex h-5 w-12 rounded-full dark:bg-sky-700 bg-sky-200 ">
              <div class="flex justify-between items-center w-full">
                <div class="flex justify-center items-center h-6 w-6">
                  <button
                    class="flex justify-center items-center h-6 w-6 rounded-full bg-slate-800 text-sky-200 dark:bg-transparent dark:text-gray-300"
                    id="handle-darkmode-off" type="button" @click="toggleDark()">
                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                      </path>
                    </svg>
                  </button>
                </div>
                <div class="flex justify-center items-center h-6 w-6">
                  <button
                    class="flex justify-center items-center h-6 w-6 rounded-full bg-transparent text-gray-900 dark:bg-white text dark:text-gray-900"
                    id="handle-darkmode-on" @click="toggleDark()" type="button">
                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
        
 
</template>
<style lang="scss"></style>