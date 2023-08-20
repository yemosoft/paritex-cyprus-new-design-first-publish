<script setup lang="ts">

</script>
<template>
    <div class="max-w-[85rem] relative mt-12 md:mt-16  mx-auto lg:px-12 px-6 block mb-10">

        <div class="bg-gradient-blur-wrapper max-w-[85rem] big prtx-hero rta md:block hidden" style="">

            <div class="bg-gradient-blur-circle-3 pink big pgb-3"></div>
            <div class="bg-gradient-blur-circle-2 pgb-2 blue pgb-2"></div>
            <div class="bg-gradient-blur-circle-1 purple-2 big pgb-1"></div>
        </div>

        <!-- Grid -->
        <div class="flex flex-row md:items-center md:-mx-2">
            <div class="sm:basis-5/12 basis-12/12">


                <p
                    class="block shadow-indigo-500/40 font-bold text-gray-800   text-3xl  md:text-[3em] lg:leading-tight dark:text-sky-300/[0.9]">
                    Your trusted partner in the world of <span
                        class="bg-clip-text bg-gradient-to-tl from-blue-600 to-sky-300 text-transparent">digital
                        finance.</span>
                </p>
                <p class=" mt-3  text-lg text-sky-800 dark:text-blue-100/[.6]">
                    Start trading bitcoin and altcoins safely and fast.

                </p>

                <!-- Buttons -->
                <div class="mt-10 grid gap-3 w-48 md:w-full  ld:w-full sm:inline-flex">
                    <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-sky-500 to-blue-700 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                        href="https://www.paritexglobal.com/en_US/login">
                        Get started
                        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </a>

                </div>
                <!-- End Buttons -->

                <!-- Brands -->
                <div class="mt-6 sm:mt-16">

                    <div class="sm:hidden mb-6 mt-8 opacity-40">
                        <div class=" -bottum-px left-0 right-0 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0"></div>
                    </div>
                    

                    <span class="text-sm mb-2 font-medium text-gray-800  dark:text-blue-400">You can do :</span>

                    <div class="mt-6 flex gap-x-8">



                        <div class="flex">
                            <div class="w-8 md:w-10 mr-5">
                                <img src="@/assets/brands/metamask.svg" class="w-10 max-h-10   mt-1" alt="Metamask">
                            </div>
                            <div class="text-2">
                                <p class=" dark:text-blue-200 mt-0 mb-[0.60px] text-[10px] text-b"> 
                               
                            Access account by</p>
                                <p class="text-color-metamask mt-[1px] font-semibold  tracking-wider">Metamask
                                </p>
                            </div>
                        </div>




                        <div class=" hidden sm:flex">

                            <span
                                class="h-full w-px  dark:bg-gradient-to-t from-slate-900/[.55] via-sky-900 to-slate-900/[.55]"></span>
                        </div>

                        <div class="flex">
                            <div class="w-8 md:w-10 mr-5">


                                <svg xmlns="http://www.w3.org/2000/svg" class="w-full max-h-10  mt-1  "
                                    viewBox="0 0 81 95">
                                    <path fill="none" class="stroke-sky-400" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-miterlimit="10" stroke-width="9"
                                        d="M40.065 4.662c14.375 12.006 30.86 11.265 35.57 11.265-1.03 68.28-8.88 54.74-35.57 73.886-26.69-19.146-34.491-5.606-35.522-73.886 4.661 0 21.146.74 35.522-11.265Z" />
                                </svg>


                            </div>
                            <div class="text-2">
                                <p class=" dark:text-blue-300 mt-0 mb-[0.60px] text-[10px] text-b">Connect with</p>
                                <p class="text-color-trust dark:text-blue-300 mt-[1px] font-semibold tracking-wider">
                                    Trust Wallet</p>
                            </div>
                        </div>



                    </div>
                </div>
                <!-- End Brands -->

            </div>
            <!-- End Col -->

            <div class="relative pl-2 sm:basis-7/12 basis-12/12">
                <HomeBanner class=" mt-0 md:pl-6 ">
                </HomeBanner>
            </div>
            <!-- End Col -->


        </div>
        <!-- End Grid -->
    </div>
</template>
<style lang="scss"></style>