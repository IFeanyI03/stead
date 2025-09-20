<template>
    <div
        class="w-full flex flex-col pb-[54px] gap-8 items-center justify-between relative h-full [mask-image:linear-gradient(to_top,transparent,transparent_5%,black_25%)]"
    >
        <div class="glass w-full h-full"></div>
        <p class="text-[#636363] text-[24px] pt-[54px] font-bold">Trusted By</p>
        <div class="w-full h-20">
            <InfiniteLogoScroller
                :logos="companies"
                :speed="40"
                logoClassName="hover:opacity-100 transition-opacity"
            />
        </div>
    </div>
</template>

<script setup>
import terraLogo from "../assets/terraLogo.svg";
import lagosStateLogo from "../assets/lagosStateLogo.svg";
import rewearLogo from "../assets/rewearLogo.svg";
import assivLogo from "../assets/assivLogo.svg";
import unileverLogo from "../assets/unileverLogo.svg";
import saleswayLogo from "../assets/saleswayLogo.svg";
import InfiniteLogoScroller from "./commons/InfiniteLogoScroller.vue";
import { GlassPattern } from "../assets/Icons.vue";

const companies = [
    { src: terraLogo, alt: "Terra" },
    { src: lagosStateLogo, alt: "Lagos State Government" },
    { src: rewearLogo, alt: "Rewear" },
    { src: assivLogo, alt: "Assiv" },
    { src: unileverLogo, alt: "Unilever" },
    { src: saleswayLogo, alt: "SalesWay" },
];
</script>
