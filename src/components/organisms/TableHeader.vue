<template>
    <div class="py-4 px-6 gap-6 inline-flex">
        <CustomButton 
            text="+ Add Asset"
            text-class="text-white text-base font-semibold"
        />
        <InputField 
            :model-value="props.modelValue"
            placeholder="Search Asset..." 
            @update:model-value="handleListener" 
        />
    </div>
</template>

<script setup lang="ts">
import CustomButton from '@/components/molecules/CustomButton.vue'
import InputField from '@/components/molecules/InputField.vue'

const props = defineProps<{
    modelValue?: string | number
}>()

const emit = defineEmits<{
    (e: 'keyword', value: string | number): void
}>()

const handleListener = (v: string) => {
    emit('keyword', v)
}
</script>