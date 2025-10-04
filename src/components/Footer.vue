<template>
    <footer
        class="w-full relative [mask-image:linear-gradient(to_bottom,transparent,transparent_1.5%,black_20%)] text-black dark:text-white"
    >
        <div class="glass w-full h-full dark:invert"></div>

        <div
            class="w-[92.1875%] mx-auto h-full flex items-center md:items-start flex-col py-[76px] pb-[38px] gap-10 md:gap-[136px]"
        >
            <div
                class="flex w-full flex-col gap-10 md:flex-row justify-between items-center md:items-start"
            >
                <SteadLogo
                    :className="[
                        'w-[103.21px] h-[11.62px] lg:h-[34.95px] md:w-[269.01px]',
                    ]"
                    :fill="isDarkMode ? 'white' : 'black'"
                />
                <FooterLinkColumn title="Ecosystem" :links="ecosystemLinks" />
                <FooterLinkColumn title="Company" :links="companyLinks" />
                <FooterLinkColumn title="Social" :links="socialLinks" />
                <FooterLinkColumn title="Contact Us" :links="legalLinks" />
            </div>

            <div
                class="flex w-full flex-col-reverse md:flex-row justify-between items-center gap-6"
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
import { SteadLogo } from "../assets/Icons.vue"; // Only keep necessary imports

// --- THEME LOGIC: Detects and sets theme status (REQUIRED for dark/light mode functionality) ---
const isDarkMode = ref(false);
let mediaQuery;

const updateTheme = (event) => {
    isDarkMode.value = event
        ? event.matches
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
};

// Simplified Logo Fill Logic for the static footer
// The footer text is set to black in light mode (default) and white in dark mode.
const getLogoFill = (isDarkMode) => {
    return isDarkMode ? "white" : "black";
};

// --- LIFECYCLE HOOKS for Theme ---
onMounted(() => {
    mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    updateTheme();
    mediaQuery.addEventListener("change", updateTheme);
});

onUnmounted(() => {
    mediaQuery.removeEventListener("change", updateTheme);
});

// --- STATIC DATA AND SUB-COMPONENT (REQUIRED for footer content) ---
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
