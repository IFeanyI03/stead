<template>
    <div
        class="relative w-full mx-auto [mask-image:linear-gradient(to_right,transparent,transparent_5%,black_30%,black_70%,transparent_95%,transparent)] overflow-hidden"
        @mouseenter="isAnimating = false"
        @mouseleave="isAnimating = true"
    >
        <div
            class="animate-scroll whitespace-nowrap"
            :style="{
                animationDuration: `${speed}s`,
                animationPlayState: isAnimating ? 'running' : 'paused',
            }"
        >
            <div
                v-for="(logo, index) in extendedLogos"
                :key="index"
                class="inline-block mx-8"
            >
                <img
                    :src="logo.src"
                    :alt="logo.alt"
                    :class="`h-12 w-auto object-contain opacity-50 ${logoClassName}`"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
    logos: {
        type: Array,
        required: true,
    },
    speed: {
        type: Number,
        default: 40,
    },
    logoClassName: {
        type: String,
        default: "",
    },
});

const isAnimating = ref(true);

const handleVisibilityChange = () => {
    isAnimating.value = !document.hidden;
};

onMounted(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
});

onUnmounted(() => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
});

// Create a longer list of logos for a more seamless loop
const extendedLogos = computed(() => {
    // Repeating the array 5 times is usually enough for a long, smooth scroll
    return Array(5).fill(props.logos).flat();
});
</script>
