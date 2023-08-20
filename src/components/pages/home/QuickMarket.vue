
<script setup lang="ts">
import Ticker from '@/stores/models/tickers';
import { ref, onMounted, computed } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

const settings = ref({
    itemsToShow: 4,
    snapAlign: 'end'
})

const breakpoints = ref({})

const tickers = computed(() => Ticker.query().where('base', (base: any) => base != 'BTC').all())


</script>
<template>
    <!-- Features -->
    <div class="max-w-[85rem] mb-24 relative xl:mt-24 md:mt-16 mx-auto sm:px-6 lg:px-12">
        <!-- Grid -->

        <div class=" flex flex-row items-stretch">
            <div class="basis-1/4 ">
                <PairWithChartPrimary primary="BTC"></PairWithChartPrimary>
            </div>
            <div class="basis-4/4 self-center  overflow-hidden">

                <div class="w-full overflow-hidden">
                    <Carousel :transition="1300" :settings="settings" :breakpoints="breakpoints" :autoplay="1000"
                        :wrap-around="true">
                        <Slide v-for="(ticker, index) of tickers" :key="index">
                            <div class="carousel__item w-full">
                                <PairWithChart class="flex-auto" :pair="ticker"></PairWithChart>
                            </div>
                        </Slide>

                    </Carousel>

                </div>

            </div>

        </div>


    </div>
    <!-- End Features -->
</template>