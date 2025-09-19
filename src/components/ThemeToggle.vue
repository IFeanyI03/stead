<template>
    <label for="theme-toggle" class="theme-toggle">
        <input
            id="theme-toggle"
            type="checkbox"
            class="theme-toggle__input"
            :checked="isDarkMode"
            @change="toggleTheme"
        />
        <span class="theme-toggle__slider"></span>
    </label>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDarkMode = ref(false);

onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        isDarkMode.value = savedTheme === "dark";
    } else {
        isDarkMode.value = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
    }
});

const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
