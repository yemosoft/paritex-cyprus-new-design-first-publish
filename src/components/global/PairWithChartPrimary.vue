
<script setup lang="ts">
import Ticker from '@/stores/models/tickers';
import { computed } from 'vue';

const props = defineProps<{
    primary?: string
}>()



const pair = computed(() => Ticker.query().where('base', (base: any) => base == props.primary).first())

const br = (pair: any) => {
    let priceChangePercent = pair?.$toJson().priceChangePercent
    if (parseFloat(priceChangePercent) < 0) { return 'up' }
    else { return 'down' }
}

</script>
<template>
    <div class="w-full">
        <a
            class="md:order-1 relative before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition before:hover:border-2 before:hover:border-blue-600 before:hover:shadow-lg dark:before:border-gray-800 dark:before:hover:border-blue-500">


            <div
                class="absolute light-eff -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0">
            </div>


            <div
                class="absolute light-eff-x -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0">
            </div>


            <div class="relative overflow-hidden w-full h-full rounded-xl">



                <div class="p-6  bg-slate-800/[0.1] flex flex-col text-left rounded-xl dark:border-gray-700">

                    <span
                        class="bg-clip-text bg-gradient-to-tl from-orange-500 to-orange-300 text-transparent text-5xl uppercase font-bold mb-2">
                        {{ pair?.$toJson().base }}
                    </span>

                    <p class="dark:text-blue-100/[.6] text-xs font-semibold uppercase mb-4">
                        {{ pair?.$toJson().base }} / {{ pair?.$toJson().qoute }}
                    </p>

                    <div class="price-percent ">


                        <div v-if="br(pair) == 'down'"
                            class="justify-self-end text-center   text-green-600 text-ms mb-4 h-6 inline-block   rounded-full shadow-md">
                            <FormattedNumber :val="pair?.$toJson().priceChangePercent" :decimals="2" ></FormattedNumber>
                            %
                        </div>
                        <div v-if="br(pair) == 'up'"
                            class="justify-self-end text-center text-xs items-right text-rose-600 h-6 inline-block  rounded-full shadow-md">
                            <FormattedNumber :val="pair?.$toJson().priceChangePercent" :decimals="2" ></FormattedNumber>
                       
                            %

                        </div>


                    </div>

                    <div class="flex aj">
                        <div class="text-2xl font-bold text-sky-200 mr-2">
                            <small>$</small> <FormattedNumber :val="pair?.$toJson().lastPrice" :decimals="2" ></FormattedNumber> 
                        </div>

                    </div>


                </div>


                <div class="back-lines ">

                    <div
                        class="absolute top-0 left-full -z-[1] w-60 h-20 bg-blue-100 blur-[100px] -translate-y-full -translate-x-1/2 dark:bg-slate-900/30">
                    </div>
                    <div
                        class="absolute top-0 left-full -z-[1] w-60 h-20 bg-purple-100 blur-[100px] -translate-y-full -translate-x-1/2 dark:bg-slate-900/5">
                    </div>
                    <div
                        class="absolute top-1/2 left-1/2 -z-[1] w-60 h-32 bg-purple-100 blur-[100px] -translate-y-1/2 -translate-x-1/2 dark:bg-slate-900/5">
                    </div>
                    <div
                        class="absolute -bottom-40 -right-24 -z-[1] w-60 h-32 bg-blue-200 blur-[100px] dark:bg-blue-900/70">
                    </div>
                    <div
                        class="absolute -bottom-[635px] -right-[635px] -z-[1] w-[635px] h-[635px] border border-dashed border-violet-200 rounded-full transform -translate-y-[255px] -translate-x-[310px] opacity-40 dark:border-violet-900/60">
                    </div>
                    <div
                        class="absolute -bottom-[490px] -right-[490px] -z-[1] w-[490px] h-[490px] border border-dashed border-violet-200 rounded-full transform -translate-y-[190px] -translate-x-[240px] opacity-60 dark:border-violet-900/60">
                    </div>
                    <div
                        class="absolute -bottom-[340px] -right-[340px] -z-[1] w-[340px] h-[340px] border border-dashed border-violet-200 rounded-full transform -translate-y-[120px] -translate-x-[170px] opacity-80 dark:border-violet-900/60">
                    </div>
                    <div
                        class="absolute -bottom-[200px] -right-[200px] -z-[1] w-[200px] h-[200px] border border-dashed border-violet-200 rounded-full transform -translate-y-[60px] -translate-x-[100px] dark:border-violet-900/60">
                    </div>
                </div>

            </div>
        </a>

    </div>
</template>
<style lang="scss">
.pair-icon {
    span {
        font-size: 3em;
    }
}

.pcg {
    background-image: url('@/assets/images/pair-bg.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 100% 100%;
}
</style>