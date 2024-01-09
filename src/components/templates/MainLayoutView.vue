<template>
  <div class="relative min-h-screen h-auto flex">
    <AppSidebar></AppSidebar>
    <div class="flex flex-col w-full">
      <AppHeader></AppHeader>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
  import AppSidebar from '@/components/organisms/Sidebar.vue'
  import AppHeader from '@/components/organisms/Header.vue'
</script>