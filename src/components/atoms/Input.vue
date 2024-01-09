<template>
    <input 
        ref="inputField"
        class="h-full w-full focus:outline-0"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @input="handleInput"  
    />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    placeholder?: string
    modelValue?: string | number
}>()

const emit = defineEmits(['update:modelValue'])

const handleInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;

  emit('update:modelValue', inputValue);
}
</script>