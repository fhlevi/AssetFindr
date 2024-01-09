<template>
    <button :class="[className, 'w-[156px] h-[38px] bg-blue-600 rounded-lg flex-col justify-center items-center inline-flex']">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps<{
    className?: string
}>()
</script>