<script setup lang="ts">
import { ref, computed, watch } from 'vue';
const props = defineProps<{
    valueNumber: string | number,
    price: string | number
}>()

const modeTrade = ref<'up' | 'down'>('up')
const styleColor = ref('')

const setColor = () => {
    if (parseFloat(props.valueNumber as any) >= 0) {
        modeTrade.value = 'up'
        styleColor.value = 'text-green-600'
    } else {
        modeTrade.value = 'down'
        styleColor.value = 'text-rose-600'
    }
}

setColor()

watch(props, () => {
    setColor()
})

</script>

<template>
    <span :class="styleColor">
         <FormattedNumber :val="price" :decimals="2"></FormattedNumber>
    </span>
</template>

<style >
.orf {
    font-size: 0.8em;
}
</style>
