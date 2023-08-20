<script setup lang="ts"></script>
<template>
    <header class="flex flex-wrap md:justify-start md:pt-0 pt-4 md:flex-nowrap z-50 w-full text-sm  max-w-screen">
        <div
            class="absolute top-bg top-0 w-full h-[36.4375rem] md:pt-38 dark:bg-gradient-to-b dark:from-slate-950 dark:via-transparent">
        </div>
        <div class="absolute top-bg top-0 w-[600px] left-0 h-[26.4375rem] md:pt-28 logo-gr hidden "></div>
        <nav class="
            md:flex 
            md:items-center md:justify-between  
            lg:px-10
            px-4
            lg:py-0
            py-2
            mx-2  relative  w-full opbg   xl:mx-auto "
            aria-label="Global">
            <div class="flex items-center justify-between">
                <RouterLink to="/page/home" class="flex-none text-xl font-semibold dark:text-white" href="#!" aria-label="Brand">
                    <SiteLogo></SiteLogo>
                </RouterLink>
                <div class="md:hidden">
                    <button type="button"
                        class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50   transition-all text-sm dark:bg-slate-900/[0.20]   dark:border-sky-900 dark:text-gray-400 "
                        data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation"
                        aria-label="Toggle navigation">
                        <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
            </div>


            <HeaderNav></HeaderNav>
        </nav>
    </header>
</template>
<style lang="scss"></style>