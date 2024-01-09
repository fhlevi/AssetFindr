<template>
    <Button :class-name="buttonClass">
        <Text :class-name="textClass">
            {{ text }}
        </Text>
    </Button>
</template>

<script setup lang="ts">
import Button from '@/components/atoms/Button.vue'
import Text from '@/components/atoms/Text.vue'

defineProps<{
    text: string
    buttonClass?: string
    textClass?: string
}>()
</script>