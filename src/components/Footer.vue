<template>
    <footer
        class="w-full relative [mask-image:linear-gradient(to_bottom,transparent,transparent_1.5%,black_20%)] text-black dark:text-white"
    >
        <div class="glass z-10 w-full h-full dark:invert"></div>

        <div
            class="w-[92.1875%] z-20 relative mx-auto h-full flex items-center md:items-start flex-col py-[76px] pb-[38px] gap-10 md:gap-[136px]"
        >
            <div
                class="flex w-full flex-col gap-10 lg:flex lg:flex-row lg:justify-between items-center md:items-start gap-8 md:gap-10"
            >
                <SteadLogo
                    :className="[
                        'w-[140px] h-[18.7px] sm:w-[180px] sm:h-[24px] md:w-[200px] md:h-[26.8px] lg:w-[240px] lg:h-[32px]',
                    ]"
                    :fill="isDarkMode ? 'white' : 'black'"
                />
                <FooterLinkColumn title="Ecosystem" :links="ecosystemLinks" />
                <FooterLinkColumn title="Company" :links="companyLinks" />
                <FooterLinkColumn title="Social" :links="socialLinks" />
                <FooterLinkColumn title="Contact Us" :links="legalLinks" />
            </div>

            <div
                class="flex w-full flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-6"
            >
                <p class="text-base">
                    Copyright &copy; {{ new Date().getFullYear() }} Stead Africa
                </p>
                <div class="flex items-center gap-4">
                    <p class="text-base">Terms & Conditions</p>
                    <p class="text-base">Privacy Policy</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { SteadLogo } from "../assets/Icons.vue";
const isDarkMode = ref(false);
let mediaQuery;

const updateTheme = (event) => {
    isDarkMode.value = event
        ? event.matches
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const getLogoFill = (isDarkMode) => {
    return isDarkMode ? "white" : "black";
};

onMounted(() => {
    mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    updateTheme();
    mediaQuery.addEventListener("change", updateTheme);
});

onUnmounted(() => {
    mediaQuery.removeEventListener("change", updateTheme);
});

const FooterLinkColumn = {
    props: ["title", "links"],
    template: `
    <div class='flex flex-col items-center md:items-start'>
      <h3 class="font-bold text-[20px] mb-4">{{ title }}</h3>
      <ul class="flex flex-col items-center md:items-start gap-2 md:gap-4">
        <li v-for="link in links" :key="link.name">
          <a :href="link.href" class=" hover:text-[#E0490E] transition-colors">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  `,
};

const ecosystemLinks = [
    { name: "Housing", href: "#" },
    { name: "Payments", href: "#" },
    { name: "Innovate", href: "#" },
];

const companyLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Contact Us", href: "#" },
];

const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
];

const legalLinks = [
    { name: "+234 08162620543", href: "tel:+23408162620543" },
    { name: "stead.africa@gmail.com", href: "mailto:stead.africa@gmail.com" },
];
</script>
