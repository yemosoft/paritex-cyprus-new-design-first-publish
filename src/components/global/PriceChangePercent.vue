<script setup lang="ts">
import { ref, computed, watch } from 'vue';
const props = defineProps<{
    valueNumber: string | number,
    showIcon?: boolean
}>()

const modeTrade = ref<'up' | 'down'>('up')
const styleColor = ref('')
const fillColor = ref('')

const setColor = () => {
    if (parseFloat(props.valueNumber as any) >= 0) {
        modeTrade.value = 'up'
        styleColor.value = 'text-green-600 '
        fillColor.value = 'fill-green-600 '
    } else {
        modeTrade.value = 'down'
        styleColor.value = 'text-rose-600'
        fillColor.value = 'fill-rose-600 '
    }
}

setColor()

watch(props, () => {
    setColor()
})

</script>

<template>
    <span :class="styleColor">


        <span v-if="props.showIcon" :class="styleColor">


            <svg v-if="modeTrade == 'up'" xmlns="http://www.w3.org/2000/svg" :class="fillColor" class="trade-icon-p"
                fill="none" viewBox="0 0 303 158">
                <path stroke="#213054" d="M1.5 157.5 148 1l153 156.5H1.5Z" />
            </svg>

            <svg v-else xmlns="http://www.w3.org/2000/svg" :class="fillColor" class="trade-icon-p" fill="none"
                viewBox="0 0 303 158">
                <path stroke="#213054" d="M301 1 154.5 157.5 1.5 1H301Z" />
            </svg>



        </span>


        <span class="block">
            <span class="orf">%</span>
            <span> <FormattedNumber :val="valueNumber" :decimals="2"></FormattedNumber> </span>
        </span>
    </span>
</template>

<style lang="scss" >
.trade-icon-p {
    width: 10px;
}
</style>
