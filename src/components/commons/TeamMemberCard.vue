<template>
    <div
        class="flex w-full md:flex-row flex-col justify-between items-center gap-6 md:gap-8 lg:gap-16 xl:gap-[97px] animate-fade-in"
    >
        <div class="flex-shrink-0">
            <img
                :src="imageSrc"
                :alt="name"
                class="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[260px] md:h-[260px] lg:w-[380px] lg:h-[360px] xl:w-[450px] xl:h-[410px] rounded-[30px] object-cover"
            />
        </div>
        <div
            class="flex flex-col text-center md:text-start items-center md:items-start gap-4 w-full"
        >
            <h3 class="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold">{{ name }}</h3>
            <div
                class="h-0.75 md:w-full w-[267px] bg-gradient-to-r from-[#E0490E] to-[#000000] mb-4"
            />
            <p class="text-base sm:text-lg md:text-xl text-[#636363]">{{ title }}</p>
            <p class="text-sm sm:text-base leading-relaxed">{{ bio }}</p>
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
