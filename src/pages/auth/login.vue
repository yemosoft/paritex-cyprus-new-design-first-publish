<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from 'vue';
// @ts-ignore
import { dark, unstable_createTheme } from "@clerk/themes";
import appBase from "@/libs/appBase";
import colors from 'tailwindcss/colors'


const loaded = ref(false);

const clerk = await appBase.auth.getClerk(true)

const paritex_dark = unstable_createTheme({
    variables: {
        colorBackground: colors.slate[950],
        colorInputBackground: '#19191A',
        colorAlphaShade: 'white',
        colorText: colors.sky[200],
        colorInputText: 'white',
    
    },
    elements: {
        providerIcon__apple: { filter: 'invert(1)' },
        providerIcon__github: { filter: 'invert(1)' },
        activeDeviceIcon: {
            '--cl-chassis-bottom': '#d2d2d2',
            '--cl-chassis-back': '#e6e6e6',
            '--cl-chassis-screen': '#e6e6e6',
            '--cl-screen': '#111111',
        },
    },
});

onMounted(() => {
    const div = document.querySelector('#auth-form');
    clerk.mountSignIn(div as any, {
        
        appearance: {
            baseTheme: paritex_dark,

        }
    })
})

</script>

<template>

    <AuthLayout>
     <div class="w-full max-w-md mx-auto">
               <div id="auth-form"></div>
    </div>
    </AuthLayout>




</template>
