
<script setup lang="ts">
import Ticker from '@/stores/models/tickers';
import { ref, onMounted, computed } from 'vue';


const tickers = computed(() => Ticker.query().all())


</script>
<template>
    <!-- Table Section -->
    <div class="max-w-[85rem] relative  xl:mt-16 md:mt-6  mx-auto  sm:px-6 lg:px-12 mb-16">
        <!-- Card -->
        <div class="flex flex-col">
            <div class=" overflow-x-auto">
                <div class="sm:p-1.5 p-4 min-w-full inline-block align-middle">
                    <div
                        class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-slate-700">



                        <!-- Table -->
                        <table class="min-w-full  divide-y divide-gray-200 dark:divide-slate-700">
 


                            <tbody class="divide-y divide-gray-200 dark:divide-slate-700">


                                <tr v-for="(_ticker, i) in tickers"
                                    class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-700">

                                    <td class="h-px l md:max-w-4 w-14 ">
                                        <div class="px-2 py-2 sm:px-6">
                                            <div class="trend__icon">
                                                <i class="cf  text-[0.8em]  bg-clip-text bg-gradient-to-tl from-sky-200 to-blue-400 text-transparent rounded-xl md:p-[0.35em] p-[0.30em] border border-gray-700"
                                                    :class="'cf-' + (_ticker.$toJson().base).toLocaleLowerCase()"></i>

                                            </div>
                                        </div>
                                    </td>
                                    <td class="h-px w-auto text-left whitespace-nowrap">
                                        <div class="px-2 py-2 sm:px-6">
                                            <span class="trend__subtitle dark:text-sky-200 text-[0.95em]">
                                                {{ _ticker.$toJson().nameCurrency }} </span>
                                            <span class="trend__currency text-gray-500">{{ _ticker.$toJson().symbol }}
                                            </span>
                                        </div>
                                    </td>
                                    <td class="h-px w-auto whitespace-nowrap">
                                        <div class="px-2 py-2 sm:px-6">
                                            <small class="text-sm dark:text-gray-700 mr-2">$</small>
                                            <PriceColored class="font-bold "
                                                :valueNumber="_ticker.$toJson().priceChangePercent"
                                                :price="_ticker.$toJson().lastPrice"></PriceColored>
                                        </div>
                                    </td>
                                    <td class="h-px w-auto whitespace-nowrap ">
                                        <div class="px-2 py-2 sm:px-6">
                                        <PriceChangePercent :showIcon="true"
                                            :valueNumber="_ticker.$toJson().priceChangePercent">
                                        </PriceChangePercent>
                                        </div>
                                    </td>

                                    <td class="h-px items-center w-auto hidden md:table-cell ">
                                        <div class="items-center">
                                            <a class="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md"
                                                href="#!">
                                                <p class="mr-4 inline-block text-white text-sm">
                                                    Buy / Sell
                                                </p>
                                                <span
                                                    class="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                                                    <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16"
                                                        fill="none">
                                                        <path
                                                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- End Table -->


                    </div>
                </div>
            </div>
        </div>
        <!-- End Card -->
    </div>
    <!-- End Table Section -->
</template>

<style lang="scss">
.dark .dark-bg-radial-gradient {
    background-image: radial-gradient(closest-side, #072442, rgba(76, 29, 149, .10), transparent) !important;
}



.trend__icon {
    font-size: 35px;
}

.trend__subtitle {
    font-weight: 600;
    display: block;
    width: 100%;
}

.trend__currency {
    width: 100%;
    display: block;
    margin-left: 0;
    font-size: 14px;
}
</style>