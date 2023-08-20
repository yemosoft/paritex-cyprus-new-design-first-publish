<script setup lang="ts">
import type Ticker from '@/stores/models/tickers';


const props = defineProps<{
    pair?: Ticker
}>()


const cc = (pair: any) => {
    return [
        'bg-clip-text',
        'bg-gradient-to-t',
        'from-' + pair.fColor,
        'to-' + pair.lColor,
        'text-transparent',
        'text-3xl',
        'font-bold'
    ]
}

const br = (pair: any) => {
    let priceChangePercent = pair?.$toJson().priceChangePercent
    if (parseFloat(priceChangePercent) < 0) { return 'up' }
    else { return 'down' }
}


</script>
<template>
    <div class="w-full">

        <div class="relative overflow-hidden mr-2 ml-2 h-full rounded-xl">

            <div id="" class="p-6 bg-slate-900/[40] border border-slate-800 flex flex-col rounded-xl ">

                <div class="flex flex-row w-full">


                    <div class="basis-2/4 pair-name text-left">
                        <span
                            class="bg-clip-text bg-gradient-to-tl from-sky-300 to-blue-600 text-transparent text-2xl uppercase font-bold mb-1">
                            {{ pair?.$toJson().base }}
                        </span>

                        <p class="dark:text-blue-100/[.6] text-xs font-semibold uppercase mb-4 mt-2">
                            {{ pair?.$toJson().base }} / {{ pair?.$toJson().qoute }}
                        </p>
                    </div>

                    <div class="basis-2/4 price-percent items-right font-bold  ">



                        <div v-if="br(pair) == 'down'"
                            class="justify-self-end text-center   text-green-600 text-xs h-6 inline-block  p-1 px-3 rounded-full shadow-md">
                            {{ pair?.$toJson().priceChangePercent }}
                            %
                        </div>
                        <div v-if="br(pair) == 'up'"
                            class="justify-self-end text-center text-xs items-right text-rose-600 h-6 inline-block   p-1 px-3 rounded-full shadow-md">
                            {{ pair?.$toJson().priceChangePercent }}
                            %

                        </div>

                    </div>
                </div>




                <div class="text-2xs text-left  text-sky-200 mr-2">$ {{ pair?.$toJson().lastPrice }}</div>

                <span
                    class="bg-clip-text bg-gradient-to-t from-blue-400 to-blue-900 text-transparent text-3xl font-bold hidden"></span>
                <span
                    class="bg-clip-text bg-gradient-to-t from-teal-400 to-teal-900 text-transparent text-3xl font-bold hidden"></span>




            </div>

            <div
                class="absolute top-0 left-full -z-[1] w-60 h-20 bg-blue-100 blur-[100px] -translate-y-full -translate-x-1/2 dark:bg-blue-900/30">
            </div>
            <div
                class="absolute top-0 left-full -z-[1] w-60 h-20 bg-purple-100 blur-[100px] -translate-y-full -translate-x-1/2 dark:bg-violet-900/30">
            </div>
            <div
                class="absolute top-1/2 left-1/2 -z-[1] w-60 h-32 bg-purple-100 blur-[100px] -translate-y-1/2 -translate-x-1/2 dark:bg-violet-900/30">
            </div>
            <div class="absolute -bottom-40 -right-24 -z-[1] w-60 h-32 bg-blue-200 blur-[100px] dark:bg-blue-900/70">
            </div>

        </div>
    </div>
</template>
<style lang="scss">
.pair-icon {
    span {
        font-size: 3em;
    }
}
</style>