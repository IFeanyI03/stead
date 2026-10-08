<template>
    <div
        id="home"
        class="w-full bg-black text-white min-h-[640px] md:min-h-[760px] lg:h-[852px] z-10 shadow-[0px_16px_80px_0px_#00000066] overflow-clip relative flex justify-center rounded-b-[30px] md:rounded-b-[78px]"
    >
        <GlassTexture />
        <div
            class="absolute flex flex-col z-20 items-center gap-8 top-1/2 transform -translate-y-1/2"
        >
            <div
                class="flex flex-col w-[89.74%] md:w-fit text-center gap-4 items-center"
            >
                <p class="text-[30px] sm:text-4xl md:text-5xl lg:text-[64px] font-medium leading-tight">
                    Integrated <span class="font-bold">Solutions</span> for a
                    Dynamic World
                </p>
                <p class="max-w-md sm:max-w-xl md:max-w-2xl lg:w-[812px] text-sm sm:text-base md:text-lg px-4 md:px-0">
                    We are a pioneering parent company dedicated to elevating
                    the modern experience through exceptional housing, seamless
                    payment services, and groundbreaking innovation. Our
                    integrated portfolio empowers individuals and businesses to
                    thrive, crafting solutions that are efficient, secure, and
                    built for a brighter, more connected future.
                </p>
            </div>
            <div
                class="rounded-[30px] border-[0.2px] items-center flex gap-[22px] md:gap-10 pr-[23px]"
            >
                <router-link
                    to="/contact"
                    v-if="route.path !== '/contact'"
                    class="text-base font-bold transition duration-300 ease-in-out"
                >
                    <Button
                        text="Contact Us"
                        class="bg-white text-[#000] py-[10px] px-[35px] font-bold"
                    />
                </router-link>

                <router-link
                    to="/#ecosystem"
                    @click.prevent="handleHashScroll('#ecosystem')"
                    class="flex items-center gap-2 font-bold"
                >
                    <p class="hidden md:flex">Explore Our</p>
                    <p>Ecosystem</p>
                    <ArrowUP />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowUP } from "../assets/Icons.vue";
import Button from "./commons/Button.vue";
import GlassTexture from "./commons/GlassTexture.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
