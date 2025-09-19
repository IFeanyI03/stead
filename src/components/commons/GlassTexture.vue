<template>
    <div class="absolute w-full h-full overflow-hidden" ref="parentRef">
        <img
            src="https://res.cloudinary.com/dahlcyt3t/image/upload/v1758144914/glass-texture_gdhfgl.png"
            class="absolute z-10 w-full h-full object-cover opacity-100"
            alt="Glass texture"
        />
        <div class="relative w-full h-full">
            <div
                class="absolute transition-all duration-3000 ease-in-out"
                :style="{
                    top: div1Style.top + 'px',
                    left: div1Style.left + 'px',
                    width: div1Style.size + 'px',
                    height: div1Style.size + 'px',
                }"
            >
                <div
                    class="bg-red-900 mix-blend-darken blur-md rounded-full w-2/3 h-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                ></div>
                <div
                    class="bg-orange-700 w-full h-full blur-[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                ></div>
            </div>

            <div
                class="absolute transition-all duration-3000 ease-in-out"
                :style="{
                    top: div2Style.top + 'px',
                    left: div2Style.left + 'px',
                    width: div2Style.size + 'px',
                    height: div2Style.size + 'px',
                }"
            >
                <div
                    class="bg-red-900 mix-blend-darken blur-md rounded-full w-2/3 h-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                ></div>
                <div
                    class="bg-orange-700 w-full h-full blur-[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                ></div>
            </div>

            <div
                class="absolute transition-all duration-3000 ease-in-out"
                :style="{
                    top: div3Style.top + 'px',
                    left: div3Style.left + 'px',
                    width: div3Style.size + 'px',
                    height: div3Style.size + 'px',
                }"
            >
                <div
                    class="bg-red-900 mix-blend-darken blur-md rounded-full w-2/3 h-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                ></div>
                <div
                    class="bg-orange-700 w-full h-full blur-[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                ></div>
            </div>

            <div
                class="absolute transition-all duration-3000 ease-in-out"
                :style="{
                    top: div4Style.top + 'px',
                    left: div4Style.left + 'px',
                    width: div4Style.size + 'px',
                    height: div4Style.size + 'px',
                }"
            >
                <div
                    class="bg-red-900 mix-blend-darken blur-md rounded-full w-2/3 h-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                ></div>
                <div
                    class="bg-orange-700 w-full h-full blur-[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const parentRef = ref(null);
const div1Style = ref({ top: 50, left: 100, size: 400 });
const div2Style = ref({ top: 200, left: 400, size: 300 });
const div3Style = ref({ top: 400, left: 50, size: 500 });
const div4Style = ref({ top: 150, left: 600, size: 350 });

const getRandomPositionAndSize = (parentWidth, parentHeight) => {
    const minSize = 200;
    const maxSize = 500;
    const size = minSize + Math.random() * (maxSize - minSize);
    const top = Math.random() * (parentHeight - size);
    const left = Math.random() * (parentWidth - size);
    return { top, left, size };
};

onMounted(() => {
    const animateDivs = () => {
        if (parentRef.value) {
            const parentWidth = parentRef.value.offsetWidth;
            const parentHeight = parentRef.value.offsetHeight;
            div1Style.value = getRandomPositionAndSize(
                parentWidth,
                parentHeight
            );
            div2Style.value = getRandomPositionAndSize(
                parentWidth,
                parentHeight
            );
            div3Style.value = getRandomPositionAndSize(
                parentWidth,
                parentHeight
            );
            div4Style.value = getRandomPositionAndSize(
                parentWidth,
                parentHeight
            );
        }
    };
    const intervalId = setInterval(animateDivs, 3000);
    animateDivs(); // Initial animation call
    onUnmounted(() => {
        clearInterval(intervalId);
    });
});
</script>
