
<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel'



const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
})

const breakpoints = ref({
    // 700px and up
    700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
    },
    // 1024 and up
    1024: {
        itemsToShow: 5,
        snapAlign: 'start',
    },
})

defineComponent({
    name: 'Breakpoints',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        // carousel settings
        settings: settings,
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: breakpoints,
    }),
})
</script>



<template>
    <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in 10" :key="slide">
            <div class="carousel__item">{{ slide }}</div>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>
