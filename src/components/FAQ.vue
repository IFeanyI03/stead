<template>
    <section class="md:w-[74.22%] w-[92.1875%]">
        <div class="w-full flex flex-col gap-12 justify-between items-center">
            <div class="text-center">
                <h2 class="text-[20px] md:text-[40px] font-bold w-full">
                    Frequently Asked Questions
                </h2>
            </div>
            <div class="w-full flex flex-col gap-8">
                <FaqItem
                    v-for="(faq, index) in faqs"
                    :key="index"
                    :question="faq.question"
                    :answer="faq.answer"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const FaqItem = {
    props: ["question", "answer"],
    template: `
    <div class="w-full flex flex-col gap-1 ">
      <button
        @click="isOpen = !isOpen"
        :class="isOpen ? 'bg-[#E0490E]' : 'bg-[#636363]'"
        class="text-white w-full p-6.25 rounded-[30px] cursor-pointer flex justify-center items-center"
      >
        <span class="font-semibold text-sm sm:text-base">{{ question }}</span>
      </button>
      <div v-if="isOpen" class="p-4 text-center md:text-start">
        <p class="text-sm sm:text-base">{{ answer }}</p>
      </div>
    </div>
  `,
    setup() {
        const isOpen = ref(false);
        return { isOpen };
    },
};

const faqs = [
    {
        question: "What types of services does SteadAfrica provide?",
        answer: "Yes, we accept a wide range of gift cards from various retailers.",
    },
    {
        question: "What kind of accommodation does Stead Housing offer?",
        answer: "A gift card may be declined due to insufficient funds, an incorrect PIN, or if the card type is not supported. Please double-check the details and try again.",
    },
    {
        question:
            "How does SteadAfrica simplify payments and utility management?",
        answer: "Once a transaction is confirmed on the blockchain, it is irreversible. Please ensure all details are correct before confirming.",
    },
    {
        question:
            "Are there any exclusive amenities or facilities for Stead residents?",
        answer: "Once a transaction is confirmed on the blockchain, it is irreversible. Please ensure all details are correct before confirming.",
    },
];
</script>
