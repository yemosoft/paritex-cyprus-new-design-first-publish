
<script setup lang="ts">
import appBase from '@/libs/appBase';
import { useHead } from '@vueuse/head';

useHead( {
    bodyAttrs: {
        class: 'bgdowntial'
    }
})

</script>

<template>

    <PageLayout>
            <div class="home-bg"></div>
            
            <HomeFirst></HomeFirst>

            <ListMarket></ListMarket>

            <FeatursTap></FeatursTap>

            <HelpLinks></HelpLinks>

            <BlogLatest></BlogLatest>

            <Subscripe></Subscripe>
        </PageLayout>
</template>