<template>
    <div class="flex flex-col gap-6">
        <div
            class="w-full relative px-5 py-5 md:py-5.5 md:px-5.5 border-[0.2px] bg-gray-100 md:rounded-[64px] rounded-[30px] h-fit border-[#FFFFFF80]"
        >
            <div
                class="relative h-[351px] w-full md:h-[478px] flex justify-center items-center"
            >
                <img
                    class="w-full h-full rounded-[10px] md:rounded-[42px] object-cover"
                    :src="data.image"
                    alt=""
                />
                <Button
                    className="absolute w-15 h-15 backdrop-blur-[10px] border-[#FFFFFF99] bg-[#FFFFFF1A] right-4 top-4"
                >
                    <ArrowUP />
                </Button>
                <div
                    class="absolute md:w-[580px] backdrop-blur-[1px] flex gap-1 justify-center items-center h-[90px]"
                >
                    <SteadLogo class="w-[22.1px] h-[12.09px]" />
                    <p class="text-white text-base md:text-[32px] font-medium">
                        |
                        <span class="font-bold">{{ " " + data.category }}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-4">
            <p class="md:text-[32px] text-[20px] font-bold">
                {{ data.title + ": " + data.subtitle }}
            </p>
            <p class="text-[16px] font-light">{{ data.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { ArrowUP, SteadLogo } from "../../assets/Icons.vue";
import Button from "./Button.vue";

defineProps({
    data: Object,
});
</script>
