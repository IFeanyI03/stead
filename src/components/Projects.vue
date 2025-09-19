<template>
    <div
        id="projects"
        class="w-[92.1875%] h-fit md:h-[783.189px] flex items-center gap-12 flex-col"
    >
        <p class="font-bold w-fit text-[20px] md:text-[40px]">Projects</p>
        <div class="flex flex-col w-full gap-12">
            <ProjectsSlider :projectsData="projectsData" />
        </div>
        <div
            class="flex w-[79.24%] md:flex-row flex-col gap-8 justify-between text-center"
        >
            <div
                v-for="stat in statItems"
                :key="stat.label"
                class="flex flex-col gap-2"
            >
                <p class="text-5xl font-bold">
                    <Counter :target="parseInt(stat.value)" />
                    <span v-if="stat.value.includes('+')">+</span>
                </p>
                <p class="text-orange-500">{{ stat.label }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProjectsSlider from "./commons/ProjectSlider.vue";
import Counter from "./commons/Counter.vue";
import land from "../assets/land.jpg";
import stead from "../assets/stead.jpg";
import farm from "../assets/farm.jpg";

const projectsData = [
    {
        id: 1,
        title: "Stead Towers",
        imgSrc: stead,
        category: "Stead Towers",
    },
    {
        id: 2,
        title: "Coastal Defenses",
        imgSrc: land,
        category: "Stead Land",
    },
    {
        id: 3,
        title: "Green Farmlands",
        imgSrc: farm,
        category: "Stead Farms",
    },
];

const statItems = [
    { value: "200+", label: "Clients Served" },
    { value: "500+", label: "Projects Completed" },
    { value: "30+", label: "Sectors Covered" },
];
</script>
