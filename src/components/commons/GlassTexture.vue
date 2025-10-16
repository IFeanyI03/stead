<template>
    <div class="absolute w-full h-full overflow-hidden" ref="parentRef">
        <div
            class="glass w-full h-full top-0 left-0 z-10 before:!opacity-100"
        ></div>
        <div class="relative w-full h-full">
            <div
                class="absolute transition-all duration-2000 ease-in-out"
                :style="{
                    top: div1Style.top + 'px',
                    left: div1Style.left + 'px',
                    width: div1Style.size + 'px',
                    height: div1Style.size + 'px',
                }"
            >
                <div
                    class="bg-[#E0490E] mix-blend-darken blur-2xl rounded-full w-2/3 h-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                ></div>
                <div
                    class="bg-[#E0490E] w-full h-full blur-[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                ></div>
            </div>

            <div
                class="absolute transition-all duration-2000 ease-in-out"
                :style="{
                    top: div2Style.top + 'px',
                    left: div2Style.left + 'px',
                    width: div2Style.size + 'px',
                    height: div2Style.size + 'px',
                }"
            >
                <div
                    class="bg-[#ff5411] mix-blend-darken blur-[10px] rounded-full w-2/3 h-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                ></div>
                <div
                    class="bg-[#E0490E] w-full h-full blur-[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                ></div>
            </div>

            <div
                class="absolute transition-all duration-2000 ease-in-out"
                :style="{
                    top: div3Style.top + 'px',
                    left: div3Style.left + 'px',
                    width: div3Style.size + 'px',
                    height: div3Style.size + 'px',
                }"
            >
                <div
                    class="bg-[#E0490E] mix-blend-darken blur-md rounded-full w-2/3 h-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                ></div>
                <div
                    class="bg-[#E0490E] w-full h-full blur-[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                ></div>
            </div>

            <div
                class="absolute transition-all duration-2000 ease-in-out"
                :style="{
                    top: div4Style.top + 'px',
                    left: div4Style.left + 'px',
                    width: div4Style.size + 'px',
                    height: div4Style.size + 'px',
                }"
            >
                <div
                    class="bg-[#E0490E] mix-blend-darken blur-md rounded-full w-2/3 h-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                ></div>
                <div
                    class="bg-[#E0490E] w-full h-full blur-[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
// Assuming GlassPattern is a component you don't need to change
import { GlassPattern } from "../../assets/Icons.vue";

const parentRef = ref(null);
const div1Style = ref({ top: 50, left: 100, size: 400 });
const div2Style = ref({ top: 200, left: 400, size: 300 });
const div3Style = ref({ top: 400, left: 50, size: 500 });
const div4Style = ref({ top: 150, left: 600, size: 350 });

// Define the mobile breakpoint (e.g., Tailwind's default 'sm' is 640px)
const MOBILE_BREAKPOINT = 640;

const getRandomPositionAndSize = (parentWidth, parentHeight) => {
    // Check if the current window width is less than the mobile breakpoint
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

    // Define different size ranges for mobile and desktop
    const desktopMinSize = 200;
    const desktopMaxSize = 500;
    const mobileMinSize = 100; // Smaller minimum size for mobile
    const mobileMaxSize = 250; // Smaller maximum size for mobile

    const minSize = isMobile ? mobileMinSize : desktopMinSize;
    const maxSize = isMobile ? mobileMaxSize : desktopMaxSize;

    // Ensure size calculation still fits within the parent bounds
    // to prevent errors, though the check on (parentWidth - size) should cover this.
    const size = minSize + Math.random() * (maxSize - minSize);

    // Fallback to prevent negative values, although parentWidth/Height should be positive
    const availableWidth = Math.max(0, parentWidth - size);
    const availableHeight = Math.max(0, parentHeight - size);

    const top = Math.random() * availableHeight;
    const left = Math.random() * availableWidth;

    return { top, left, size };
};

const animateDivs = () => {
    if (parentRef.value) {
        const parentWidth = parentRef.value.offsetWidth;
        const parentHeight = parentRef.value.offsetHeight;

        // Update all div styles using the screen-aware function
        div1Style.value = getRandomPositionAndSize(parentWidth, parentHeight);
        div2Style.value = getRandomPositionAndSize(parentWidth, parentHeight);
        div3Style.value = getRandomPositionAndSize(parentWidth, parentHeight);
        div4Style.value = getRandomPositionAndSize(parentWidth, parentHeight);
    }
};

onMounted(() => {
    // Initial animation call
    animateDivs();

    // Set up the interval for continuous animation
    const intervalId = setInterval(animateDivs, 2000);

    // Also, re-run animation on window resize to immediately apply the mobile/desktop sizes
    window.addEventListener("resize", animateDivs);

    onUnmounted(() => {
        clearInterval(intervalId);
        window.removeEventListener("resize", animateDivs);
    });
});
</script>
