<template>
    <img :src="source" :class="`h-6 w-6 ${className}`" :alt="alt" />
</template>

<script setup lang="ts">
    defineProps<{
        className?: string
        source: string
        alt?: string
    }>()
</script>