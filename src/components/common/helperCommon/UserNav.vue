<script setup lang="ts">
import { pageLinks } from '@/links';
import { ref } from 'vue';

const links = ref(pageLinks)
</script>

<template>
    <div class=" items-center md:flex hidden ">

        <span class="h-6 w-px  dark:bg-gradient-to-t from-slate-950/[.06] via-blue-800/[.8] to-slate-950/[.06]"></span>
    </div>
    <RouterLink :to="links.login" class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600   dark:text-sky-200 dark:hover:text-blue-500"
       >
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            viewBox="0 0 16 16">
            <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        </svg>
        Log in
    </RouterLink>
    <div class="items-center md:flex hidden ">

        <span class="h-6 w-px  dark:bg-gradient-to-t from-slate-950/[.06] via-blue-800/[.8] to-slate-950/[.06]"></span>
    </div>
</template>