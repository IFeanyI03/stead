<template>
    <div
        id="team"
        class="relative w-[92.1875%] mx-auto flex flex-col items-center gap-12"
        @mouseenter="isPaused = true"
        @mouseleave="isPaused = false"
    >
        <p class="text-[20px] md:text-[40px] font-bold">Meet The Team</p>
        <div
            class="flex flex-col-reverse md:flex-row w-full md:justify-between justify-center items-center gap-8"
        >
            <div
                class="flex md:flex-col w-fit items-center justify-center gap-3 md:pr-4"
            >
                <button
                    v-for="(_, index) in teamData"
                    :key="index"
                    @click="activeIndex = index"
                    :class="`w-2 h-2 rounded-full transition-all ${
                        activeIndex === index
                            ? 'bg-[#E0490E] w-8 md:w-2 md:h-8'
                            : 'bg-black dark:bg-white hover:bg-gray-400'
                    }`"
                    :aria-label="`Go to slide ${index + 1}`"
                />
            </div>
            <div class="relative w-full overflow-hidden">
                <TeamMemberCard
                    :key="activeIndex"
                    :imageSrc="teamData[activeIndex].imageSrc"
                    :name="teamData[activeIndex].name"
                    :title="teamData[activeIndex].title"
                    :bio="teamData[activeIndex].bio"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import TeamMemberCard from "./commons/TeamMemberCard.vue";
import ceoPortrait from "../assets/ceo-portrait.jpg";

const teamData = [
    {
        imageSrc: "",
        name: "Ted Bankong Boluwatife",
        title: "Chief Executive Officer (CEO)",
        bio: "As CEO of Stead, I'm driven by a singular vision: to simplify complex processes and enhance everyday experiences across housing, software, and finance. My passion lies in building bridges connecting people to ideal homes with Stead Housing, empowering businesses through innovative software via Stead Innovations, and enabling seamless global transactions with Stead Payments. I lead with a commitment to integrity, user-centric design, and continuous innovation, striving to build trust and shape a more connected, efficient future for all our users.",
    },
    {
        imageSrc: "",
        name: "Ifeanyi Aghasili Yahweh",
        title: "Chief Technology Officer (CTO)",
        bio: "As CTO of Stead, I'm passionate about leveraging technology to drive innovation and improve user experiences. My focus is on building scalable, secure, and efficient systems that empower our teams and delight our users. I believe in a collaborative approach to problem-solving and am committed to fostering a culture of continuous learning and improvement.",
    },
    // {
    //     imageSrc: ceoPortrait,
    //     name: "Alex Johnson",
    //     title: "Chief Operating Officer (COO)",
    //     bio: "As COO of Stead, I'm dedicated to optimizing our operations and ensuring that we deliver on our promises to our users. My background in process improvement and project management allows me to identify inefficiencies and implement solutions that drive results. I'm a firm believer in the power of teamwork and communication to achieve our goals.",
    // },
];

const activeIndex = ref(0);
const isPaused = ref(false);
const autoPlayInterval = 7000;
let timer = null;

const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % teamData.length;
};

onMounted(() => {
    timer = setInterval(nextSlide, autoPlayInterval);
});

onUnmounted(() => {
    clearInterval(timer);
});

watch(isPaused, (paused) => {
    if (paused) {
        clearInterval(timer);
    } else {
        timer = setInterval(nextSlide, autoPlayInterval);
    }
});
</script>
