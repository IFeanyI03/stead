<template>
    <div
        class="fixed z-100 md:top-7.5 top-4.5 w-full h-fit transition-all duration-250 ease-in-out"
    >
        <div
            :class="[
                'flex items-center px-[17.5px] md:px-5 md:w-[calc(92.03%_+_40px)] w-[calc(100%_-_35px)] mx-auto justify-between md:py-[20px] h-12.5 md:h-fit rounded-[50px] transition-all duration-250 ease-in-out',
                {
                    ' text-black dark:text-white bg-transparent': !scrolled,

                    ' dark:text-black text-white bg-[#000000] dark:bg-[#FFFFFF] shadow-2xl':
                        scrolled,
                },
            ]"
        >
            <SteadLogo
                :className="[
                    'w-[103.21px] h-[11.62px] lg:h-[34.95px] md:w-[269.01px]',
                ]"
                :fill="getLogoFill(scrolled, isDarkMode)"
            />

            <div
                class="md:hidden flex w-fit h-fit cursor-pointer"
                @click="toggleSidebar"
            >
                <HaburgerMenu :fill="getLogoFill(scrolled, isDarkMode)" />
            </div>

            <div
                :class="[
                    'hidden lg:flex items-center gap-10',
                    scrolled ? 'dark:text-black text-white' : 'text-white',
                ]"
            >
                <!-- Desktop Navigation Links (Now relies on router.js scrollBehavior) -->
                <router-link
                    class="hover:text-orange-600 dark:hover:text-orange-400"
                    to="/"
                    >Home</router-link
                >
                <router-link
                    class="hover:text-orange-600 dark:hover:text-orange-400"
                    to="/#ecosystem"
                    >Ecosystem</router-link
                >
                <router-link
                    class="hover:text-orange-600 dark:hover:text-orange-400"
                    to="/#projects"
                    >Projects</router-link
                >
                <router-link
                    class="hover:text-orange-600 dark:hover:text-orange-400"
                    to="/#team"
                    >About us</router-link
                >
                <router-link
                    to="/contact"
                    v-if="route.path !== '/contact'"
                    class="text-base font-bold transition duration-300 ease-in-out"
                >
                    <Button
                        text="Contact Us"
                        :className="
                            !scrolled
                                ? 'font-medium py-[10px] px-[35px] w-fit border-[#FFFFFF80] dark:border-[#FFFFFF80]'
                                : 'font-medium py-[10px] px-[35px] w-fit border-[#FFFFFF80] dark:border-[#00000080]'
                        "
                        :is-scrolled="scrolled"
                    />
                </router-link>
            </div>
        </div>

        <div
            :class="[
                'fixed top-0 right-0 h-screen w-4/5 max-w-sm dark:bg-black dark:text-white bg-white text-black p-6 shadow-xl transition-transform duration-300 ease-out md:hidden',
                sidebarOpen ? 'translate-x-0' : 'translate-x-full',
            ]"
            style="z-index: 99"
        >
            <div class="flex justify-end">
                <button
                    @click="toggleSidebar"
                    :class="[
                        'text-3xl font-light focus:outline-none',
                        !isDarkMode ? 'text-black' : 'text-white',
                    ]"
                >
                    &times;
                </button>
            </div>

            <nav
                class="flex flex-col h-full justify-center items-center gap-[104px] text-xl"
            >
                <div
                    class="flex flex-col justify-center items-center gap-[45px]"
                >
                    <!-- Mobile Navigation Links (Relying on router.js scrollBehavior) -->
                    <router-link
                        class="hover:text-orange-600 dark:hover:text-orange-400"
                        to="/"
                        @click="closeSidebar"
                        >Home</router-link
                    >
                    <router-link
                        class="hover:text-orange-600 dark:hover:text-orange-400"
                        to="/#ecosystem"
                        @click="closeSidebar"
                        >Ecosystem</router-link
                    >
                    <router-link
                        class="hover:text-orange-600 dark:hover:text-orange-400"
                        to="/#projects"
                        @click="closeSidebar"
                        >Projects</router-link
                    >
                    <router-link
                        class="hover:text-orange-600 dark:hover:text-orange-400"
                        to="/#team"
                        @click="closeSidebar"
                        >About us</router-link
                    >
                </div>

                <router-link
                    to="/contact"
                    v-if="route.path !== '/contact'"
                    class="text-base font-bold transition duration-300 ease-in-out"
                >
                    <Button
                        text="Contact Us"
                        :className="
                            !isDarkMode
                                ? 'font-medium py-[10px] px-[35px] w-fit border-[#00000080]'
                                : 'font-medium py-[10px] px-[30px] w-fit border-[#FFFFFF80]'
                        "
                        @click="closeSidebar"
                    />
                </router-link>
            </nav>
        </div>

        <div
            v-if="sidebarOpen"
            class="fixed inset-0 z-50 md:hidden"
            @click="closeSidebar"
        ></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { HaburgerMenu, SteadLogo } from "../assets/Icons.vue";
import Button from "./commons/Button.vue";

const isDarkMode = ref(false);
const route = useRoute();
let mediaQuery;

const updateTheme = (event) => {
    isDarkMode.value = event
        ? event.matches
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const getLogoFill = (scrolled, isDarkMode) => {
    if (scrolled) {
        if (!isDarkMode) return "white";
        if (isDarkMode) return "black";
    }

    if (isDarkMode) return "white";
    if (!isDarkMode) return "white";
};

const scrolled = ref(false);

const handleScroll = () => {
    let scrollThreshold = 0;

    scrolled.value = window.scrollY > scrollThreshold;
};

const sidebarOpen = ref(false);

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
    document.body.style.overflow = sidebarOpen.value ? "hidden" : "";
};

const closeSidebar = () => {
    sidebarOpen.value = false;
    document.body.style.overflow = "";
};

onMounted(() => {
    mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    updateTheme();

    mediaQuery.addEventListener("change", updateTheme);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    window.addEventListener("resize", handleScroll);
});

onUnmounted(() => {
    mediaQuery.removeEventListener("change", updateTheme);
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
});
</script>
