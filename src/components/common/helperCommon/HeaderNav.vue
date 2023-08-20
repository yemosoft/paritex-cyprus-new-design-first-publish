<script setup lang="ts">

</script>
<template>
    <div id="navbar-collapse-with-animation"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block  px-8 ">
        <div
            class="flex  flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
            <a class="font-medium text-blue-600 md:py-6 dark:text-blue-500" href="https://www.paritexglobal.com/en_US/market" target="_parent">Market</a>
            <a class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-sky-200 dark:hover:text-sky-300"
                href="https://www.paritexglobal.com/en_US/v5/proTrade">
                Exchange
            </a>
            <a class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-sky-200 dark:hover:text-sky-300"
                href="https://www.paritexglobal.com/en_US/v5/assets/">
                Assets
            </a>
            <a class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-sky-200 dark:hover:text-sky-300"
                href="https://www.paritexglobal.com/en_US/cms/Support">
                Support
            </a>

            <UserNav></UserNav>

            <DarkModeSwitcher></DarkModeSwitcher>


        </div>
    </div>
</template>
<style lang="scss"></style>