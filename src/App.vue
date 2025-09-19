<template>
    <div
        class="relative flex flex-col gap-[104px] items-center bg-white h-fit w-full"
    >
        <Header />
        <div class="flex w-full flex-col">
            <Hero />
            <Partnership />
        </div>
        <Ecosystem />
        <Projects />
        <MeetTheTeam />
        <FAQ />
        <CTA />
        <Footer />
    </div>
</template>

<script setup>
import CTA from "./components/CTA.vue";
import Ecosystem from "./components/Ecosystem.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import MeetTheTeam from "./components/MeetTheTeam.vue";
import Partnership from "./components/Partnership.vue";
import Projects from "./components/Projects.vue";
</script>
<style></style>
