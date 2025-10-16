<template>
    <div
        id="ecosystem"
        class="md:w-[92.1875%] lg:pt-35 pt-25 w-[89.74%] h-fit flex items-center gap-12 flex-col"
    >
        <p class="font-bold w-fit text-[20px] md:text-[40px]">Our Ecosystem</p>
        <div class="flex flex-col gap-12">
            <EcosystemCard
                v-for="data in ecosystemData"
                :key="data.title"
                :data="data"
            />
        </div>
    </div>
</template>

<script setup>
import EcosystemCard from "./commons/EcosystemCard.vue";
import housing from "../assets/housing.jpg";
import innovate from "../assets/innovate.jpg";
import money from "../assets/money.jpg";

const ecosystemData = [
    {
        image: housing,
        title: "Stead Housing",
        category: "Housing",
        subtitle: "Modern Living, Simplified.",
        description:
            "At Stead Housing, we are more than just accommodation providers—we are innovators, problem-solvers, and community builders dedicated to transforming urban living. With a deep commitment to affordability, flexibility, and convenience, we offer diverse accommodation solutions tailored for students, professionals, and anyone seeking a seamless home experience. Empowering residents with effortless rent and utility management through our digital platforms, alongside exclusive access to vital recreational facilities, we ensure a comfortable, connected, and future-ready lifestyle.",
    },
    {
        image: innovate,
        title: "Stead Innovate",
        category: "Innovate",
        subtitle: "Solving Problems, Simply.",
        description:
            "At Stead Innovations, we're more than just software developers—we're innovators, problem-solvers, and growth partners dedicated to transforming how businesses and individuals tackle challenges. With a deep commitment to efficiency, customization, and impact, we offer diverse software solutions tailored for companies of all sizes, entrepreneurs, and anyone seeking a seamless digital experience. Empowering our clients with custom-built applications, streamlined workflows, and intelligent automation through our cutting-edge platforms, we ensure a productive, connected, and future-ready journey.",
    },
    {
        image: money,
        title: "Stead Payments",
        category: "Payments",
        subtitle: "Global Money, Simplified.",
        description:
            "At Stead Payments, we're more than just a transfer service—we're innovators, problem-solvers, and global connectors dedicated to transforming how businesses and individuals manage cross-border finances. With a deep commitment to security, speed, and transparency, we offer diverse payment solutions tailored for international trade, remittances, and anyone seeking a seamless flow of funds. Empowering our clients with secure transactions, competitive exchange rates, and real-time tracking through our advanced digital platforms, we ensure a reliable, efficient, and future-ready financial experience.",
    },
];
</script>
