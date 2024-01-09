<template>
    <div :class="[className, 'w-full bg-white border border-black border-opacity-10']">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    className?: string
}>()
</script>