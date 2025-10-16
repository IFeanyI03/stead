<template>
    <div class="flex w-full h-full flex-col">
        <Hero />
        <Partnership />
    </div>
    <Ecosystem />
    <Projects />
    <MeetTheTeam />
    <FAQ />
    <div class="flex w-full items-center gap-7 flex-col">
        <CTA />
    </div>
</template>

<script setup>
import CTA from "../components/CTA.vue";
import Ecosystem from "../components/Ecosystem.vue";
import FAQ from "../components/FAQ.vue";
import Hero from "../components/Hero.vue";
import MeetTheTeam from "../components/MeetTheTeam.vue";
import Partnership from "../components/Partnership.vue";
import Projects from "../components/Projects.vue";
</script>
