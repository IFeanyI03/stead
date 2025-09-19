<template>
    <div
        class="py-[50px] fixed bg-black-100 z-100 w-full backdrop-blur-[2px] h-fit"
    >
        <div
            class="flex md:w-[92.03%] items-center mx-auto justify-between text-white w-full h-10"
        >
            <SteadLogo
                class="w-[103.21px] h-[11.62px] lg:h-[34.95px] md:w-[269.01px]"
            />
            <div class="hidden lg:flex items-center gap-10">
                <a href="#">Home</a>
                <a href="#ecosystem">Ecosystem</a>
                <a href="#projects">Projects</a>
                <a href="">About us</a>
                <Button text="Contact Us" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { SteadLogo } from "../assets/Icons.vue";
import Button from "./commons/Button.vue";
</script>
