<template>
    <div :class="[props.className, 'w-[233px] h-10 px-4 rounded-lg border border-gray-200']">
        <Input 
            :placeholder="props.placeholder"
            :model-value="modelValue" 
            @update:modelValue="handleInput"
        />
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

import Input from '@/components/atoms/Input.vue'

const props = defineProps<{
    className?: string
    placeholder?: string
    modelValue?: string | number
}>()

const emit = defineEmits(['update:modelValue'])

const handleInput = (inputValue: Event) => {
  emit('update:modelValue', inputValue);
}
</script>