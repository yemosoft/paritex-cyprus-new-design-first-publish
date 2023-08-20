<script lang="ts" setup>
import { useDark } from '@vueuse/core'
import { useHead, useSeoMeta } from '@vueuse/head';
import { onMounted } from 'vue';
import appBase from './libs/appBase';
useHead({
  title: 'Home',
  titleTemplate: (title) => `${title} | Paritex | Cyprus`,
  meta: [
    { name: 'description', content: 'With paritex cyprus you can easily do your crypto trades in seconds,for free.' },
    { name: 'keywords', content: 'Paritex, Cyprus, cryptocurrency exchange, bitcoin, Eth, usdt, sol, ada, matic, Binance, bitexen, paribu, Miracle, Chase, crypto Exchange, bitcoin price, btctürk' }
  ]
})


onMounted( async () => {
  await appBase.initAfterMoundApp()
} )
</script>

<template>
   <RouterView v-slot="{ Component }">
      <Transition name="fade-slow" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  


</template>