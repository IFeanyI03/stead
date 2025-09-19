<template>
    <section @mouseenter="isPaused = true" @mouseleave="isPaused = false">
        <div class="w-full mx-auto">
            <div
                class="grid grid-cols-1 grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 gap-6 h-[722px] md:h-[500px]"
                @mouseleave="featuredIndex = 0"
            >
                <div
                    v-for="(project, index) in visibleProjects"
                    :key="project.id"
                    :class="`
            relative rounded-[42px] overflow-hidden cursor-pointer group shadow-lg
            transform transition-all h-full duration-700 ease-in-out
            ${
                index === featuredIndex
                    ? 'lg:col-span-2 lg:row-span-1 row-span-2'
                    : 'lg:col-span-1 row-span-1'
            }
          `"
                    @mouseenter="featuredIndex = index"
                >
                    <img
                        :src="project.imgSrc"
                        :alt="project.title"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    ></div>
                    <Button
                        className="absolute w-15 h-15 backdrop-blur-[10px] border-[#FFFFFF99] bg-[#FFFFFF1A] opacity-0 right-4 top-4 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <ArrowUP />
                    </Button>
                    <div
                        class="absolute bottom-0 left-1/2 w-fit -translate-x-1/2 py-6"
                    >
                        <p
                            :class="`text-white text-center text-[24px] md:text-[40px] font-bold w-fit transition-opacity duration-500 delay-100 ${
                                index === featuredIndex
                                    ? 'opacity-100'
                                    : 'opacity-0'
                            }`"
                        >
                            {{ project.category }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center mt-8 space-x-3">
                <button
                    v-for="(_, index) in projectsData"
                    :key="index"
                    @click="goToSlide(index)"
                    :class="`
            h-2 rounded-full transition-all duration-300
            ${
                activeIndex === index
                    ? 'w-8 bg-[#E0490E]'
                    : 'w-2 bg-black hover:bg-[#636363]'
            }
          `"
                    :aria-label="`Go to slide ${index + 1}`"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { ArrowUP } from "../../assets/Icons.vue";
import Button from "./Button.vue";

const props = defineProps({
    projectsData: Array,
});

const activeIndex = ref(0);
const featuredIndex = ref(0);
const isPaused = ref(false);
let timer = null;

const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % props.projectsData.length;
};

const goToSlide = (index) => {
    activeIndex.value = index;
};

const visibleProjects = computed(() => {
    const totalProjects = props.projectsData.length;
    return [
        props.projectsData[activeIndex.value],
        props.projectsData[(activeIndex.value + 1) % totalProjects],
        props.projectsData[(activeIndex.value + 2) % totalProjects],
    ];
});

onMounted(() => {
    if (!isPaused.value) {
        timer = setInterval(nextSlide, 5000);
    }
});

onUnmounted(() => {
    clearInterval(timer);
});

watch(isPaused, (paused) => {
    if (paused) {
        clearInterval(timer);
    } else {
        timer = setInterval(nextSlide, 5000);
    }
});

watch(activeIndex, () => {
    featuredIndex.value = 0;
});
</script>
