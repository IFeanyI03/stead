<template>
    <div
        class="flex w-full md:flex-row flex-col justify-between items-center gap-8 md:gap-[97px] animate-fade-in"
    >
        <div class="flex-shrink-0">
            <img
                :src="imageSrc"
                :alt="name"
                class="w-[450px] h-[410px] rounded-[30px] object-cover"
            />
        </div>
        <div
            class="flex flex-col text-center md:text-start items-center md:items-start gap-4 w-full"
        >
            <h3 class="text-[24px] md:text-[40px] font-bold">{{ name }}</h3>
            <div
                class="h-0.75 md:w-full w-[267px] bg-gradient-to-r from-[#E0490E] to-[#000000] mb-4"
            />
            <p class="text-[20px] text-[#636363]">{{ title }}</p>
            <p class="text-base">{{ bio }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    imageSrc: String,
    name: String,
    title: String,
    bio: String,
});
</script>
