<template>
    <aside class="h-screen w-64 flex-col justify-start items-start inline-flex border-r border-black border-opacity-10 px-2 sticky top-0 left-0 bg-white">
        <div class="w-full h-36 pt-6 pb-8 inline-flex justify-center">
            <Icon :source="Logo" class-name="w-[90px] h-full" />
        </div>
        <MenuLink
            v-for="(item, i) in state.Links"
            :key="i"
            :link="item.to"
            :name="item.label"
            :icon="item.icon"
            :active="item.active"
            @link-event="triggerLinkDirection"
        />
    </aside>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Icon from '@/components/atoms/Icon.vue';
import MenuLink from '@/components/molecules/MenuLink.vue';

import Home from '@/assets/images/icons/home.png';
import Wallet from '@/assets/images/icons/wallet.png';
import Settings from '@/assets/images/icons/settings.png';
import Logo from '@/assets/images/logo.png';

interface Link {
  label: string;
  to: string;
  icon: string;
  active: boolean;
}

const router = useRouter()
const route = useRoute()

const state = reactive({
    Links: <Link[]> [
        { 
            label: "Home", 
            to: "/", 
            icon: Home,
            active: true, 
        },
        { 
            label: "Manage Asset", 
            to: "/manage-asset", 
            icon: Wallet,
            active: false,
        },
        { 
            label: "Settings", 
            to: "#", 
            icon: Settings,
            active: false,
        },
    ]
})

onMounted(() => {
    triggerLinkDirection()
})

const triggerLinkDirection = (label?: string | undefined, to?: string) => {
    if (to) router.push(to)

    const title = label ?? route?.meta?.title

    state.Links.forEach(link => {
        link.active = link.label === title; 
    });
}
</script>