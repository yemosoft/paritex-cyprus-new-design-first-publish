<script setup lang="ts">


</script>

<template>

        <div class="authLayout">
      <AuthHeader></AuthHeader>

                    <DarkModeSwitcher class="hidden"></DarkModeSwitcher>

                          <div class="flex h-screen items-center auth-flex">
                      <slot></slot>
                  </div>
        </div>
          



</template>

<style scoped></style>
