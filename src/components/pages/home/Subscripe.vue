<script setup lang="ts">

</script>
<template>
    <div class="max-w-6xl pt-16 pb-10 px-4 sm:px-6 lg:px-8 md:pt-20 lg:pt-0 lg:pb-20 mx-auto">
        <div
            class="bg-gray-100 relative rounded-xl p-5 sm:py-16 before:absolute before:top-0 before:left-0 before:bg-[url('@/assets/images/banner-bg-dark.svg')] before:bg-no-repeat before:bg-top before:bg-contain before:w-2/3 before:h-full before:z-0 dark:bg-[#151c2f] dark:before:bg-[url('@/assets/images/banner-bg-dark.svg')]">
            <div class="max-w-xl relative z-10 text-center mx-auto">
                <div class="mb-5">
                    <h2 class="text-2xl font-bold md:text-3xl dark:text-white">Subscribe</h2>
                    <p class="mt-3 text-gray-500 dark:text-gray-400">Sign up for our newsletter.</p>
                </div>

                <!-- Begin Mailchimp Signup Form -->
                <div id="mc_embed_signup">
                    <form method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
                        target="_blank">
                        <div id="mc_embed_signup_scroll">
                            <div class="grid sm:flex gap-3">
                                <input type="email" value="" name="EMAIL" id="mce-EMAIL"
                                    class="block w-full border-gray-200 sm:text-sm shadow-sm rounded-md p-3 dark:bg-[#151c2f] dark:border-gray-800 dark:text-gray-400"
                                    placeholder="Email address">
                                <input type="submit" name="subscribe" id="mc-embedded-subscribe"
                                    class="inline-block text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-100 transition py-2.5 px-6 dark:focus:ring-offset-[#151c2f]">
                            </div>

                            <div id="mce-responses" class="mt-3 text-gray-500 dark:text-gray-400">
                                <div class="response" id="mce-error-response" style="display:none"></div>
                                <div class="response" id="mce-success-response" style="display:none"></div>
                            </div>

                            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                                    name="b_eddd28397383718c2f15e15c2_b97f8fe839" tabindex="-1" value=""></div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>