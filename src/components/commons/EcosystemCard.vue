<template>
    <div class="flex flex-col gap-6">
        <div
            class="w-full relative px-5 py-5 md:py-5.5 md:px-5.5 border-[0.2px] dark:bg-[#ffffff20] bg-gray-100 rounded-[64px] h-fit border-[#FFFFFF80]"
        >
<div
            class="relative h-[300px] sm:h-[380px] md:h-[440px] lg:h-[478px] w-full flex justify-center items-center"
        >
            <img
                class="w-full h-full rounded-[42px] object-cover"
                :src="data.image"
                alt=""
            />
            <Button
                className="absolute w-15 h-15 backdrop-blur-[10px] border-[#FFFFFF99] bg-[#FFFFFF1A] right-4 top-4"
            >
                <ArrowUP />
            </Button>
            <div
                class="absolute w-[90%] max-w-[560px] backdrop-blur-[1px] flex md:gap-4 gap-2 justify-center items-center h-[80px] md:h-[90px]"
            >
                <SteadLogo
                    :className="[
                        'w-[130px] h-[15px] sm:w-[200px] sm:h-[23px] md:w-[240px] md:h-[28px] lg:w-[310px] lg:h-[35px]',
                    ]"
                />
                <p
                    class="text-white flex gap-2 md:gap-4 text-base md:text-[32px] font-medium"
                >
                    |
                    <span class="font-bold">{{ data.category }}</span>
                </p>
            </div>
        </div>
        </div>

        <div class="flex flex-col gap-4">
            <p class="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold">
                {{ data.title + ": " + data.subtitle }}
            </p>
            <p class="text-sm sm:text-base font-light">{{ data.description }}</p>
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
