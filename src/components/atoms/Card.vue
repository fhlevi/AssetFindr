<template>
    <div :class="['w-full bg-white border border-black border-opacity-10', className]">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    className?: string
}>()
</script>