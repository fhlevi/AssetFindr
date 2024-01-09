<template>
    <div :class="`${className ?? 'font-normal text-sm'}`">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        className?: string
    }>()
</script>