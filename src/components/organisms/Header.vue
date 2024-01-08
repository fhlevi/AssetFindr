<template>
    <header class="h-20 w-full px-6 py-4 bg-neutral-50 shadow-inner justify-between items-center inline-flex sticky top-0">
        <Text class-name="text-black text-opacity-60 text-xl font-medium">
            {{ route.meta.title }}
        </Text>
        <div class="inline-flex gap-4 justify-center items-center">
            <Icon :source="Notification" />
            <div class="w-10 h-10 rounded-[48px] justify-center items-center inline-flex bg-zinc-200">
                <span class="z-40 text-black opacity-100">F</span>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Text from '@/components/atoms/Text.vue';
import Icon from '@/components/atoms/Icon.vue';
import Notification from '@/assets/images/icons/notification.png'

const route = useRoute()
</script>