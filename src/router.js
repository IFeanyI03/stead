import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Contact from "./pages/Contact.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    // Add scrollBehavior to handle smooth scrolling for hash links
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            // Return saved position if user navigates back/forward
            return savedPosition;
        }
        if (to.hash) {
            // Scroll to hash target with smooth behavior
            return {
                el: to.hash, // The target element selector (e.g., #ecosystem)
                behavior: "smooth",
                top: 0, // Scrolls to the very top of the element
            };
        }
        // Always scroll to the top of the page on route change
        return { top: 0, behavior: "smooth" };
    },
});

export default router;
