
<script setup lang="ts">
import { updateDecimals } from '@/libs/numbers/numberFormat';
const props = defineProps<{
    val?: string | number,
    decimals: number
}>()


const setNumber = () => {
    return updateDecimals(props.val, props.decimals)
}


</script>
<template>
   <span id="formatted-number">  {{ setNumber()  }} </span>
</template>
<style lang="scss"></style>