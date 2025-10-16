<template>
    <div
        class="relative flex flex-col gap-1 items-center bg-white dark:bg-black dark:text-white h-fit w-full"
    >
        <Header />

        <router-view class="w-full"></router-view>

        <div class="flex w-full items-center gap-7 flex-col">
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>
<style></style>
