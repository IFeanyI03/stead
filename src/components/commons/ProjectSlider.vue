<template>
    <section @mouseenter="isPaused = true" @mouseleave="isPaused = false">
        <div class="w-full mx-auto flex flex-col">
            <div class="flex flex-col md:flex-row gap-6 h-[722px] md:h-[500px]">
                <div
                    @mouseenter="activeDiv = 1"
                    @click="activeDiv = 1"
                    :class="[
                        'relative rounded-[42px] overflow-hidden group shadow-lg transition-all duration-300',
                        activeDiv === 1
                            ? 'md:w-1/2 md:h-full h-1/2 w-full'
                            : 'md:w-1/4 md:h-full h-1/4 w-full',
                    ]"
                >
                    <img
                        :src="visibleProjects[0].imgSrc"
                        :alt="visibleProjects[0].title"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    ></div>
                    <div
                        class="absolute bottom-0 left-1/2 w-fit -translate-x-1/2 py-6"
                    >
                        <p
                            :class="[
                                'text-white text-center text-[24px] md:text-[40px] font-bold w-fit transition-opacity duration-300',
                                activeDiv === 1 ? 'opacity-100' : 'opacity-0',
                            ]"
                        >
                            {{ visibleProjects[0].category }}
                        </p>
                    </div>
                </div>

                <div
                    @mouseenter="activeDiv = 2"
                    @click="activeDiv = 2"
                    @mouseleave="activeDiv = 1"
                    :class="[
                        'relative rounded-[42px] overflow-hidden group shadow-lg transition-all duration-300',
                        activeDiv === 2
                            ? 'md:w-1/2 md:h-full h-1/2 w-full'
                            : 'md:w-1/4 md:h-full h-1/4 w-full',
                    ]"
                >
                    <img
                        :src="visibleProjects[1].imgSrc"
                        :alt="visibleProjects[1].title"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    ></div>
                    <div
                        class="absolute bottom-0 left-1/2 w-fit -translate-x-1/2 py-6"
                    >
                        <p
                            :class="[
                                'text-white text-center text-[24px] md:text-[40px] font-bold w-fit transition-opacity duration-300',
                                activeDiv === 2 ? 'opacity-100' : 'opacity-0',
                            ]"
                        >
                            {{ visibleProjects[1].category }}
                        </p>
                    </div>
                </div>

                <div
                    @mouseenter="activeDiv = 3"
                    @click="activeDiv = 3"
                    @mouseleave="activeDiv = 1"
                    :class="[
                        'relative rounded-[42px] overflow-hidden group shadow-lg transition-all duration-300',
                        activeDiv === 3
                            ? 'md:w-1/2 md:h-full h-1/2 w-full'
                            : 'md:w-1/4 md:h-full h-1/4 w-full',
                    ]"
                >
                    <img
                        :src="visibleProjects[2].imgSrc"
                        :alt="visibleProjects[2].title"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    ></div>
                    <div
                        class="absolute bottom-0 left-1/2 w-fit -translate-x-1/2 py-6"
                    >
                        <p
                            :class="[
                                'text-white text-center text-[24px] md:text-[40px] font-bold w-fit transition-opacity duration-300',
                                activeDiv === 3 ? 'opacity-100' : 'opacity-0',
                            ]"
                        >
                            {{ visibleProjects[2].category }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center items-center mt-8 space-x-3">
                <button
                    v-for="(_, index) in projectsData"
                    :key="index"
                    @click="activeIndex = index"
                    :class="`
                h-2 rounded-full transition-all duration-300
                ${
                    activeIndex === index
                        ? 'w-8 bg-[#E0490E]'
                        : 'w-2 bg-black hover:bg-[#636363]'
                }
            `"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";

const props = defineProps({
    projectsData: Array,
});

// This tracks the index of the project in the first (w-1/2) slot.
const activeIndex = ref(0);

const activeDiv = ref(1);
const isPaused = ref(false);
let timer = null;

// This is the dynamic replacement for your static 'displayData'.
// It calculates the three visible projects on the fly.
const visibleProjects = computed(() => {
    const total = props.projectsData.length;
    // This ensures it works even if you have 1 or 2 projects.
    if (total === 0) return [];
    if (total < 3) return [...props.projectsData];

    return [
        props.projectsData[activeIndex.value],
        props.projectsData[(activeIndex.value + 1) % total],
        props.projectsData[(activeIndex.value + 2) % total],
    ];
});

// The animation logic now simply advances the activeIndex.
const animate = () => {
    activeIndex.value = (activeIndex.value + 1) % props.projectsData.length;
};

onMounted(() => {
    if (props.projectsData.length > 0) {
        timer = setInterval(animate, 5000);
    }
});

onUnmounted(() => {
    clearInterval(timer);
});

watch(isPaused, (paused) => {
    if (paused) {
        clearInterval(timer);
    } else {
        timer = setInterval(animate, 5000);
    }
});
</script>
