<template>
    <span ref="counterRef">{{ Math.round(currentNumber) }}</span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
    target: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        default: 2000, // Animation duration in milliseconds
    },
});

const currentNumber = ref(0);
const counterRef = ref(null);
let observer = null;

const animateCount = () => {
    const startTime = performance.now();

    const step = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / props.duration, 1);

        currentNumber.value = progress * props.target;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            currentNumber.value = props.target;
        }
    };

    requestAnimationFrame(step);
};

onMounted(() => {
    // Use Intersection Observer to trigger the animation when the element is visible
    observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                animateCount();
                observer.disconnect(); // Stop observing after the animation starts
            }
        },
        { threshold: 0.1 }
    );

    observer.observe(counterRef.value);
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>
