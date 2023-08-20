
<script setup lang="ts">
import { ref } from 'vue';

const tab = ref(1)
const setTab = (no: number) => {
    tab.value = no
}

</script>
<template>
    <div class="max-w-[85rem] relative  xl:mt-24 md:mt-16 mx-auto  sm:px-6 lg:px-12">

        <!-- Title -->
        <div class="max-w-2xl mx-auto text-center  mb-10 lg:mb-14">

            <h2
                class="block mt-18 shadow-indigo-500/40  text-2xl font-bold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight dark:text-sky-200">
                What can you do with <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-sky-300 text-transparent">
                    Paritex
                </span>
            </h2>
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            </h2>
            <p class="mt-2 text-gray-600 dark:text-gray-400 ">You can trade and safe your crypto assets.</p>
        </div>
        <!-- End Title -->

    </div>

    <!-- Features -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">


        <div class="relative p-6 md:p-16">
            <!-- Grid -->





            <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">



                <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">



                    <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                        Start trading bitcoin, altcoins safely and fast
                    </h2>

                    <!-- Tab Navs -->
                    <nav class="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
                        <button type="button"
                            class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active"
                            id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1"
                            role="tab" @click="setTab(1)">
                            <span class="flex">
                                <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                </svg>
                                <span class="grow ml-6">
                                    <span
                                        class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Buy/Sell
                                        Crypto</span>
                                    <span
                                        class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Use
                                        Buy 15+ assets in seconds. Wire transfers are also available for your
                                        convenience.</span>
                                </span>
                            </span>
                        </button>

                        <button type="button"
                            class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                            id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2"
                            role="tab" @click="setTab(2)">
                            <span class="flex">
                                <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
                                </svg>
                                <span class="grow ml-6">
                                    <span
                                        class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                                        Exchange
                                    </span>
                                    <span
                                        class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Swap
                                        more than 100 market pairs at affordable fees. Buy, sell or trade all major
                                        cryptocurrencies in seconds.</span>
                                </span>
                            </span>
                        </button>

                        <button type="button"
                            class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                            id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3"
                            role="tab" @click="setTab(3)">
                            <span class="flex">
                                <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                                </svg>
                                <span class="grow ml-6">
                                    <span
                                        class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Get
                                        a Crypto Card</span>
                                    <span
                                        class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Spend
                                        your digital assets without selling them with the Paritex Card. All your spending is
                                        financed with a set credit limit.</span>
                                </span>
                            </span>
                        </button>
                    </nav>
                    <!-- End Tab Navs -->
                </div>
                <!-- End Col -->

                <div class="lg:col-span-6">
                    <div class="relative">
                        <!-- Tab Content -->
                        <div>
                            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                                <div class="relative overflow-hidden">
                                    <img class=" shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                        src="@/assets/images/shadow-feuturs.png" alt="">
                                </div>
                            </div>

                            <div id="tabs-with-card-2" class="hidden" role="tabpanel"
                                aria-labelledby="tabs-with-card-item-2">
                                <img class=" shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                    src="@/assets/images/shadow-feuturs.png" alt="">
                            </div>

                            <div id="tabs-with-card-3" class="hidden" role="tabpanel"
                                aria-labelledby="tabs-with-card-item-3">
                                <img class=" shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                    src="@/assets/images/shadow-feuturs.png" alt="">
                            </div>
                        </div>
                        <!-- End Tab Content -->

                        <div v-if="tab == 1"
                            class=" rel w-full h-full shadow-gray-200 rounded-xl  absolute top-0 right-0 md:block ">
                            <div class=" w-full h-full absolute">
                                <div class="w-full h-full relative overflow-hidden rounded-xl border border-slate-700">

                                    <img class="w-full absolute -z-0" src="@/assets/images/feutures/coins.svg" alt="">
                                    <img class="w-full mbl  top-0 absolute -z-10"
                                        src="@/assets/images/feutures/backround.svg" alt="">
                                    <div class=" absolute w-full h-full bg-slate-900 -z-20 "></div>
                                </div>
                            </div>
                        </div>

                        <div v-if="tab == 2"
                            class=" rel w-full h-full shadow-gray-200 rounded-xl  absolute top-0 right-0 md:block s">
                            <div class=" w-full h-full absolute   ">
                                <div class="w-full h-full relative overflow-hidden rounded-xl border border-slate-700">

                                    <img class="w-full  bottun-0 absolute -z-0" src="@/assets/images/feutures/chart.svg"
                                        alt="">
                                    <img class="w-full mbl top-0 absolute  -z-10"
                                        src="@/assets/images/feutures/backround.svg" alt="">
                                    <div class=" absolute w-full h-full bg-slate-900 -z-20 "></div>
                                </div>
                            </div>
                        </div>

                        <div v-if="tab == 3"
                            class=" rel w-full h-full shadow-gray-200 rounded-xl  absolute top-0 right-0 md:block s">
                            <div class=" w-full h-full absolute">
                                <div class="w-full h-full relative overflow-hidden rounded-xl border border-slate-700">

                                    <img class="w-full absolute -z-0" src="@/assets/images/feutures/cards.svg" alt="">
                                    <img class="w-full mbl top-0 absolute -z-10"
                                        src="@/assets/images/feutures/backround.svg" alt="">
                                    <div class=" absolute w-full h-full bg-slate-900 -z-20 "></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->

            <!-- Background Color -->
            <div class="absolute inset-0 grid grid-cols-12 w-full h-full">



                <div
                    class="relative col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-slate-800/[.75]">

                    <div
                        class="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0">
                    </div>


                    <div
                        class="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0">
                    </div>
                </div>
            </div>
            <!-- End Background Color -->
        </div>
    </div>
    <!-- End Features -->
</template>
<style lang="scss">
.mbl {
    z-index: -10;
}
</style>