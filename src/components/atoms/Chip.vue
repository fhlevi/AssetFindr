<template>
    <div :class="[className, 'min-w-[53px] w-auto h-[22px] px-2 py-0.5 rounded-2xl justify-start items-center inline-flex']">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    className?: string | string[]
}>()
</script>