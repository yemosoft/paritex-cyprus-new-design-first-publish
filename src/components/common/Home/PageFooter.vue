
<script setup lang="ts">
import { ref, computed } from 'vue';
import moment from 'moment';
import { pageLinks } from '@/links';
import { useOnline } from '@vueuse/core'
import { UseOnline } from "@vueuse/components";
import { useLanguageSession } from '@/stores/language-session';

const isOnline = useOnline()
const year = ref(moment().format('YYYY'))
const time = ref(moment().format('MMMM Do YYYY, h:mm:ss a'))
setInterval(() => {
    time.value = moment().format('MMMM Do YYYY, h:mm:ss a')
}, 100)

const _langs = useLanguageSession()
const langs = _langs.languages

const legals = ref([
    "Privacy Policy", "Terms & Conditions", "Services Terms", "Earn Terms", "Exchange Terms", "Staking Terms", "Paritex Card Terms", "Affiliate Terms", "Cookies Policy"
])

</script>
<template>
    <footer class="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <!-- Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
            <div class="col-span-full hidden lg:col-span-1 lg:block">
                <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">

                    <SiteLogo></SiteLogo>
                </a>


                <p class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">© {{ year }} PARITEX LLC.</p>
            </div>
            <!-- End Col -->

            <div>
                <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Product</h4>

                <div class="mt-3 grid space-y-3 text-sm">
                    <p>
                        <RouterLink :to="pageLinks.exchange"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            Exchange</RouterLink>
                    </p>
                    <p>
                        <RouterLink :to="pageLinks.earn"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            Earn</RouterLink>
                    </p>
                    <p>
                        <RouterLink :to="pageLinks.exchange"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            Paritex Card</RouterLink>
                    </p>
                    <p>
                        <RouterLink :to="pageLinks.appWallet"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            Paritex Wallet</RouterLink>
                    </p>
                </div>
            </div>
            <!-- End Col -->

            <div>
                <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Company</h4>

                <div class="mt-3 grid space-y-3 text-sm">
                    <p>
                        <RouterLink :to="pageLinks.about"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            About US</RouterLink>
                    </p>

                    <p>
                        <RouterLink :to="pageLinks.blog"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            Blog</RouterLink>
                    </p>

                    <p>
                        <RouterLink :to="pageLinks.carear"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            Carear
                        </RouterLink>
                    </p>

                    <p>
                        <RouterLink :to="pageLinks.faq"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            F.A.Q
                        </RouterLink>
                    </p>
                </div>
            </div>
            <!-- End Col -->

            <div>
                <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Resources</h4>

                <div class="mt-3 grid space-y-3 text-sm">
                    <p>
                        <RouterLink :to="pageLinks.support"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            Help & Support
                        </RouterLink>
                    </p>

                    <p>
                        <RouterLink :to="pageLinks.brand"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            Media
                        </RouterLink>
                    </p>

                    <p>
                        <RouterLink :to="pageLinks.developers"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            Developers
                        </RouterLink>
                    </p>


                </div>

                <h4 class="text-xs mt-8 font-semibold text-gray-900 uppercase dark:text-gray-100">And more</h4>
                <div class="mt-3 grid space-y-3 text-sm">
                    <p>
                        <RouterLink :to="pageLinks.api"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            API
                        </RouterLink>
                    </p>
                    <p>
                        <RouterLink to="/"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            GitHub
                        </RouterLink>
                    </p>
                </div>

            </div>
            <!-- End Col -->

            <div>


                <h4 class="text-xs mt-2 font-semibold text-gray-900 uppercase dark:text-gray-100">Legal</h4>
                <div class="mt-3 grid space-y-3 text-sm">
                    <p v-for="legal of legals">
                        <RouterLink :to="pageLinks.api"
                            class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            {{ legal }}
                        </RouterLink>
                    </p>

                </div>


            </div>
            <!-- End Col -->
        </div>
        <!-- End Grid -->


        <div class="pt-5 mt-5 ">
            <div class="sm:flex sm:justify-between sm:items-center">


                <div class="flex justify-between items-center">
                    <div class="mt-3">
                        <a class="flex-none text-sm font-semibold dark:text-gray-600" aria-label="Brand"></a>
                        <UseOnline v-slot="{ isOnline }">
                            <span class="dark:text-gray-400 text-xs ">Online Status: </span>
                            <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="10px" fill="none"
                                viewBox="0 0 216 216">
                                <circle v-if="isOnline" cx="108" cy="108" r="108" fill="#04AA33" />
                                <circle v-else cx="108" cy="108" r="108" fill="#FF3459" />
                            </svg>
                        </UseOnline>
                    </div>
                </div>

                <div class="flex justify-between items-center">
                    <div class="mt-3">
                        <a class="flex-none text-sm font-semibold dark:text-gray-600"
                            aria-label="Server timezone: ">{{ time }}</a>

                    </div>
                </div>
            </div>
        </div>

        <div class="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
            <div class="sm:flex sm:justify-between sm:items-center">
                <div class="flex items-center gap-x-3">
                    <!-- Language Dropdown -->
                    <div class="hs-dropdown relative inline-flex [--placement:top-left]">
                        <button id="footer-language-dropdown" type="button"
                            class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">

                            <svg class="w-3 h-3 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us"
                                viewBox="0 0 512 512">
                                <g fill-rule="evenodd">
                                    <g stroke-width="1pt">
                                        <path fill="#bd3d44"
                                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                            transform="scale(3.9385)" />
                                        <path fill="#fff"
                                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                            transform="scale(3.9385)" />
                                    </g>
                                    <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                                    <path fill="#fff"
                                        d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                        transform="scale(3.9385)" />
                                </g>
                            </svg>
                            English (US)
                            <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16"
                                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>

                        <div class="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                            aria-labelledby="footer-language-dropdown">
                            <a
                                class="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">

                                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 rounded-full"
                                    viewBox="0 -30000 90000 60000">
                                    <title>Flag of Turkey</title>
                                    <path fill="#e30a17" d="m0-30000h90000v60000H0z" />
                                    <path fill="#fff"
                                        d="m41750 0 13568-4408-8386 11541V-7133l8386 11541zm925 8021a15000 15000 0 1 1 0-16042 12000 12000 0 1 0 0 16042z" />
                                </svg>

                                Türkçe (US)
                            </a>



                        </div>
                    </div>
                    <!-- End Language Dropdown -->

                    <div class="space-x-4 text-sm ml-4">
                        <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                            href="#">Terms</a>
                        <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                            href="#">Privacy</a>
                        <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                            href="#">Status</a>
                    </div>
                </div>

                <div class="flex justify-between items-center">
                    <div class="mt-3 sm:hidden">
                        <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Paritex">Paritex</a>
                        <p class="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">© 2022 Paritex.</p>
                    </div>

                    <!-- Social Brands -->
                    <div class="space-x-4">
                        <a class="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                            href="https://twitter.com/paritexcyprus">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                        </a>
                        <a class="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                            href="https://www.instagram.com/paritexcyprus">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 512.00096 512.00096"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0" />
                                <path
                                    d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0" />
                                <path
                                    d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0" />
                            </svg>
                        </a>

                    </div>
                    <!-- End Social Brands -->
                </div>
                <!-- End Col -->
            </div>
        </div>
    </footer>

    <CookieAccepting></CookieAccepting>

    <NotificationBase></NotificationBase>

</template>
<style lang="scss">
.footer-tail {

    

}
</style>