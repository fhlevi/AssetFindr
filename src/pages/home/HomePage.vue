<template>
    <Wrapper>
        <Card class-name="h-[351px] rounded flex-col flex justify-center items-center">
            <Icon :source="Logo" class-name="w-[90px] h-[90px]" />
            <Text class-name="pb-4 pt-8 text-2xl">Welcome to Asset Findr</Text>
        </Card>
    </Wrapper>
</template>

<script setup lang="ts">
import Wrapper from '@/components/atoms/Wrapper.vue'
import Card from '@/components/atoms/Card.vue'
import Text from '@/components/atoms/Text.vue'
import Icon from '@/components/atoms/Icon.vue'

import Logo from '@/assets/images/logo.png';
</script>