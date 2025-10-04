<template>
    <div
        class="fixed z-100 md:top-7.5 top-4.5 w-full h-fit transition-all duration-250 ease-in-out"
    >
        <div
            :class="[
                'flex items-center  px-[17.5px] md:px-5 md:w-[calc(92.03%_+_40px)] w-[calc(100%_-_35px)] mx-auto justify-between md:py-[20px] h-12.5 md:h-fit rounded-[50px] transition-all duration-250 ease-in-out',
                {
                    // Unscrolled State (Transparent header)
                    ' text-black dark:text-white bg-transparent': !scrolled,

                    // Scrolled State (Blurry/Solid header)
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
                <a
                    class="hover:text-orange-600 dark:hover:text-orange-400"
                    href="#"
                    >Home</a
                >
                <a
                    class="hover:text-orange-600 dark:hover:text-orange-400"
                    href="#ecosystem"
                    >Ecosystem</a
                >
                <a
                    class="hover:text-orange-600 dark:hover:text-orange-400"
                    href="#projects"
                    >Projects</a
                >
                <a
                    class="hover:text-orange-600 dark:hover:text-orange-400"
                    href=""
                    >About us</a
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
                    <a
                        class="hover:text-orange-600 dark:hover:text-orange-400"
                        href="#"
                        @click="closeSidebar"
                        >Home</a
                    >
                    <a
                        class="hover:text-orange-600 dark:hover:text-orange-400"
                        href="#ecosystem"
                        @click="closeSidebar"
                        >Ecosystem</a
                    >
                    <a
                        class="hover:text-orange-600 dark:hover:text-orange-400"
                        href="#projects"
                        @click="closeSidebar"
                        >Projects</a
                    >
                    <a
                        class="hover:text-orange-600 dark:hover:text-orange-400"
                        href=""
                        @click="closeSidebar"
                        >About us</a
                    >
                </div>

                <div class="">
                    <Button
                        text="Contact Us"
                        :className="
                            !isDarkMode
                                ? 'font-medium py-[10px] px-[35px] w-fit border-[#00000080]'
                                : 'font-medium py-[10px] px-[30px] w-fit border-[#FFFFFF80]'
                        "
                        @click="closeSidebar"
                    />
                </div>
            </nav>
        </div>

        <div
            v-if="sidebarOpen"
            class="fixed inset-0 bg-black dark:bg-white opacity-50 z-50 md:hidden"
            @click="closeSidebar"
        ></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { HaburgerMenu, SteadLogo } from "../assets/Icons.vue";
import Button from "./commons/Button.vue";

// --- THEME LOGIC ---
const isDarkMode = ref(false);
let mediaQuery;

const updateTheme = (event) => {
    isDarkMode.value = event
        ? event.matches
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
};

// Function to handle the complex fill logic for Logo/Hamburger
const getLogoFill = (scrolled, isDarkMode) => {
    // 1. Scrolled State (Header has a contrasting background color)
    if (scrolled) {
        // Scrolled background: BLACK (in light mode) / WHITE (in dark mode)
        // Must contrast the header background.
        if (!isDarkMode) return "white"; // Dark Mode (Header is white) -> Logo is black
        if (isDarkMode) return "black"; // Light Mode (Header is black) -> Logo is white
    }

    // 2. Unscrolled State (Header is transparent, relying on the background page color)
    // Background page text: BLACK (in light mode) / WHITE (in dark mode)
    // Logo color should match the surrounding text color for this transparent header.
    if (isDarkMode) return "white"; // Dark Mode (Text is white) -> Logo is white
    if (!isDarkMode) return "white"; // Light Mode (Text is black) -> Logo is black
};

// --- SCROLL LOGIC (MODIFIED) ---
const scrolled = ref(false);

const handleScroll = () => {
    // Determine the scroll threshold based on screen size
    let scrollThreshold = 0;

    // // Check for medium screen breakpoint (Tailwind default is 768px)
    // if (window.innerWidth >= 768) {
    //     // MD and up: Use a fixed value (e.g., 213px, or 500px, adjust as needed)
    //     // Since you mentioned h-213, let's use a reasonable equivalent like 213px
    //     // NOTE: If h-213 is a specific theme value, replace 213 with that value.
    //     scrollThreshold = 190 * 4;
    // } else {
    //     // Mobile/Small screens: Use full viewport height (h-screen)
    //     scrollThreshold = window.innerHeight;
    // }

    // Set scrolled state
    scrolled.value = window.scrollY > scrollThreshold;
};

// --- SIDEBAR LOGIC (EXISTING) ---
const sidebarOpen = ref(false);

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
    document.body.style.overflow = sidebarOpen.value ? "hidden" : "";
};

const closeSidebar = () => {
    sidebarOpen.value = false;
    document.body.style.overflow = "";
};

// --- LIFECYCLE HOOKS ---
onMounted(() => {
    // 1. Initialize theme status
    mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    updateTheme(); // Initial check

    // 2. Add listener for system theme changes
    mediaQuery.addEventListener("change", updateTheme);

    // 3. Add scroll listener
    // NOTE: Need to call handleScroll once on mount to set initial state if page loads scrolled
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // 4. Add resize listener to update the scroll threshold dynamically
    window.addEventListener("resize", handleScroll);
});

onUnmounted(() => {
    // Clean up all listeners
    mediaQuery.removeEventListener("change", updateTheme);
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
});
</script>
