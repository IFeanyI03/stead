<template>
    <div
        class="w-full min-h-[80vh] lg:pt-35 pt-25 flex flex-col items-center bg-white dark:bg-black text-black dark:text-white"
    >
        <!-- Main Form Section -->
        <div class="w-[92.1875%] flex flex-col gap-12 mx-auto md:px-0">
            <h1 class="text-3xl md:text-4xl font-bold text-center">Email Us</h1>

            <form
                @submit.prevent="submitForm"
                class="flex items-center flex-col gap-6"
            >
                <!-- Input Row 1: Name, Email, Phone -->
                <div class="flex flex-col md:flex-row gap-6 w-full">
                    <!-- Name Input -->
                    <div
                        class="relative w-full items-center px-4 flex gap-4 border border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 dark:border-white rounded-[30px]"
                    >
                        <svg
                            class="h-5 w-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                        <input
                            type="text"
                            id="name"
                            v-model="formData.name"
                            required
                            placeholder="Name"
                            class="w-full py-3 bg-transparent border-none outline-none placeholder-gray-500 dark:placeholder-gray-400"
                        />

                        <label for="name" class="sr-only">Name</label>
                    </div>

                    <!-- Email Input -->
                    <div
                        class="relative w-full items-center px-4 flex gap-4 border border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 dark:border-white rounded-[30px]"
                    >
                        <svg
                            class="h-5 w-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <input
                            type="email"
                            id="email"
                            v-model="formData.email"
                            required
                            placeholder="Email Address"
                            class="w-full py-3 bg-transparent border-none outline-none placeholder-gray-500 dark:placeholder-gray-400"
                        />

                        <label for="email" class="sr-only">Email Address</label>
                    </div>

                    <!-- Phone Input -->
                    <div
                        class="relative w-full items-center px-4 flex gap-4 border focus:outline-none focus:ring-1 focus:ring-gray-500 dark:border-white border-gray-800 rounded-[30px]"
                    >
                        <svg
                            class="h-5 w-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <input
                            type="tel"
                            id="phone"
                            v-model="formData.phone"
                            placeholder="Phone Number"
                            class="w-full flex gap-4 py-3 bg-transparent outline-none border-none placeholder-gray-500 dark:placeholder-gray-400"
                        />

                        <label for="phone" class="sr-only">Phone Number</label>
                    </div>
                </div>

                <!-- Message Textarea -->
                <textarea
                    id="message"
                    rows="8"
                    v-model="formData.message"
                    required
                    placeholder="Type a message..."
                    class="w-full p-4 bg-transparent border dark:border-white rounded-[30px] border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 resize-none placeholder-gray-500 dark:placeholder-gray-400"
                ></textarea>

                <!-- Submit Button -->
                <button
                    type="submit"
                    class="w-full lg:w-110 hover:bg-[#E0490E] cursor-pointer hover:text-white py-4 text-lg rounded-[30px] font-bold bg-white text-black shadow-lg transition duration-300 ease-in-out"
                >
                    Submit
                </button>
            </form>

            <!-- Message Box for Feedback (Replaces alert()) -->
            <div
                v-if="successMessage"
                class="mt-8 p-4 bg-green-500 text-white text-center"
            >
                {{ successMessage }}
            </div>
            <div
                v-if="errorMessage"
                class="mt-8 p-4 bg-red-500 text-white text-center"
            >
                {{ errorMessage }}
            </div>
        </div>

        <!-- The rest of the page (Footer, CTA, etc.) is handled in App.vue and Home.vue -->
    </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
    name: "",
    email: "",
    phone: "",
    message: "",
});

const successMessage = ref("");
const errorMessage = ref("");

const submitForm = async () => {
    // Clear previous messages
    successMessage.value = "";
    errorMessage.value = "";

    // Simulate form submission to a backend (replace with actual fetch/API call)
    try {
        console.log("Form data submitted:", formData.value);

        // Simulate a successful response delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        successMessage.value =
            "Thank you! Your message has been sent successfully.";

        // Reset form
        formData.value = {
            name: "",
            email: "",
            phone: "",
            message: "",
        };
    } catch (error) {
        console.error("Submission failed:", error);
        errorMessage.value =
            "Oops! There was an issue sending your message. Please try again later.";
    }
};
</script>
