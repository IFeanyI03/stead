<template>
    <div
        class="shadow-[0px_16px_80px_0px_#00000066] bg-black w-[92.1875%] overflow-clip h-fit relative rounded-[30px] text-white"
    >
        <GlassTexture />
        <div
            class="w-full z-20 relative h-fit py-25 flex items-center px-6.25 md:px-43 flex-col text-center gap-4 md:gap-8"
        >
            <h2 class="text-[32px] md:text-[64px] font-bold">
                Let’s Collaborate
                <span class="font-normal">& Create Something amazing </span>
            </h2>
            <p class="text-base">
                At Stead Africa, we are at the forefront of integrated
                solutions, seamlessly blending innovative housing, intuitive
                payment systems, and cutting-edge technology. We empower
                individuals and industries to thrive, driving sustained growth
                and building a brighter, more connected tomorrow.
            </p>
            <Button
                text="Contact Us"
                class="bg-white text-black border-none font-bold w-fit py-[10px] px-[35px] rounded-[30px]"
            />
        </div>
    </div>
</template>

<script setup>
import Button from "./commons/Button.vue";
import GlassTexture from "./commons/GlassTexture.vue";
</script>
