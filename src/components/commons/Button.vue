<template>
    <button
        :class="[
            'cursor-pointer rounded-[30px] border-[0.2px] flex items-center justify-center text-[16px]',
            className
                ? className
                : 'font-medium py-[10px] px-[35px] w-fit border-[#FFFFFF80]',
        ]"
    >
        {{ text }}
        <slot></slot>
    </button>
</template>

<script setup>
defineProps({
    text: String,
    className: String,
});
</script>
