<template>
    <div :class="{
        'w-full h-11 px-4 py-2 justify-start items-center gap-6 inline-flex hover:bg-neutral-100 cursor-pointer': true, 
        'bg-neutral-100': active
    }"
    @click="$emit('linkEvent', name, link)">
        <Icon :source="`${icon}`" />
        <Text class-name="text-slate-700 text-sm font-medium">
            {{ name }}
        </Text>
    </div>
</template>

<script setup lang="ts">
import Text from '@/components/atoms/Text.vue';
import Icon from '@/components/atoms/Icon.vue';

defineProps<{
    link: string
    name: string
    icon: string
    active: boolean
}>()
</script>