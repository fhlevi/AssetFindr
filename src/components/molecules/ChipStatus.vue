<template>
    <Chip :class-name="`${translatedColor.background} mix-blend-multiply`">
        <Text :class-name="`${translatedColor.text} text-center text-xs font-medium leading-[18px]`">
            {{ translatedStatus }}
        </Text>
    </Chip>
</template>

<script setup lang="ts">
import Chip from '@/components/atoms/Chip.vue'
import Text from '@/components/atoms/Text.vue'

type ColorValue = {
  background: string;
  text: string;
}

const props = defineProps<{
    statusText?: string
}>()

const statusMapping: Record<string, string> = {
    'Aktif': 'active',
    'Tidak aktif': 'inactive'
}

const colorMapping:  Record<string, ColorValue> = {
    'Aktif': {
        background: 'bg-emerald-50',
        text: 'text-emerald-700'
    },
    'Tidak aktif': {
        background: 'bg-pink-100',
        text: 'text-rose-700'
    }
}

const translatedStatus = statusMapping[props.statusText || ''];
const translatedColor = colorMapping[props.statusText || ''];
</script>