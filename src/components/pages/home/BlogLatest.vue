
<script setup lang="ts">
import { useBlogStore, type PostData } from '../../../stores/BlogStore';
import { ref } from 'vue';
const blog = useBlogStore()
const posts = ref<PostData[]>(blog.lastestPosts)
</script>
<template>
    <!-- Card Blog -->

    <div class="relative overflow-hidden">
        <div class="max-w-[85rem] mx-auto">
            <div class="bg-gradient-to-r from-transparent via-blue-400 to-transparent h-px"></div>
            <div
                class="absolute top-[150px] left-1/2 -z-[1] w-[1052px] h-[300px] bg-[radial-gradient(closest-side,#154775,#fdfbff,transparent)] -translate-y-[300px] -translate-x-1/2 dark-bg-radial-gradient">
            </div>

            <div class="relative pt-12 md:pt-24">
                <!-- Title -->
                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 class="text-2xl font-bold md:text-3xl text-gray-800 dark:text-gray-200">
                        Paritex Cryptocurrency<span class="text-blue-600 dark:text-blue-500"> Blog</span>
                    </h2>
                    <p class="text-gray-500 mt-4 dark:text-gray-400">
                        You can fllow the latest cryptocurrency news.
                    </p>

                </div>
                <!-- End Title -->
            </div>
        </div>
    </div>

    <div class="max-w-[85rem]  sm:mb-24 px-4 py-10 pb-4  sm:pb-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">


        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <!-- Card -->
            <a class="group rounded-xl overflow-hidden  mb-8 sm:mb-auto" href="#">
                <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                    <img class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                        :src="posts[0].image" alt="">
                    <span
                        class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-blue-700">
                        New
                    </span>
                </div>

                <div class="mt-7">
                    <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-sky-200">
                        {{ posts[0].title }}
                    </h3>
                    <p class="mt-3 text-gray-800 dark:text-gray-200">
                        {{ posts[0].content }}...
                    </p>
                    <p
                        class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
                        Read more
                        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </p>
                </div>
            </a>
            <!-- End Card -->

            <!-- Card -->
            <a class="group rounded-xl overflow-hidden  mb-8 sm:mb-auto" href="#">
                <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                    <img class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                        :src="posts[1].image" alt="">
                </div>

                <div class="mt-7">
                    <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-sky-200">
                        {{ posts[1].title }}
                    </h3>
                    <p class="mt-3 text-gray-800 dark:text-gray-200">
                        {{ posts[1].content }}...
                    </p>
                    <p
                        class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
                        Read more
                        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </p>
                </div>
            </a>
            <!-- End Card -->

            <!-- Card -->
            <a class="group hnsd relative flex flex-col w-full md:min-h-[15rem] min-h-[7.5rem] bg-center bg-cover rounded-xl hover:shadow-lg transition"
                href="#">

                <div class="relative md:min-h-[35rem] min-h-[22rem]  rounded-xl  w-full overflow-hidden">
                    <img :src="posts[2].image" class="absolute h-auto w-full  top-0 rounded-xl psl" alt="">
                </div>

                <div class="absolute ">
                    <div class="flex-auto p-4 md:p-6 z-10">
                        <h3 class="text-xl font-bold text-sky-200 group-hover:text-sky-400">
                            {{ posts[2].title }}
                        </h3>
                        <p class="mt-3 text-white/[.9] group-hover:text-white">
                            {{ posts[1].content }}...
                        </p>
                    </div>

                </div>

                <div class="absolute pt-0 p-4 md:p-6 z-10 bottom-0">
                    <div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
                        Visit the site
                        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>

            </a>
            <!-- End Card -->
        </div>
        <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
</template>
<style lang="scss">
.psl {
    scale: 1.8;
}

.hnsd:hover {

    .psl {
        scale: 1.9;

        transition: all 1s;
    }
}
</style>