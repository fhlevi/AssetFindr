<template>
    <table class="w-full">
        <thead>
            <tr class="border-t border-gray-200 bg-gray-50 h-11 text-slate-600 text-xs font-medium">
                <th>Asset ID/Tag</th>
                <th>Asset Name</th>
                <th>Description</th>
                <th>Purchase Cost</th>
                <th>Purchase Date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in items" :key="i">
                <td>{{ item.idAsset }}</td>
                <td>{{ item.AssetName }}</td>
                <td>{{ item.Deskripsi }}</td>
                <td>{{ convertToIDR(item.PurchaseCost) }}</td>
                <td>{{ dayjsFormat(item.PurchaseDate, 'D MMM YYYY') }}</td>
                <td><ChipStatus :status-text="item.Status" /></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import ChipStatus from '@/components/molecules/ChipStatus.vue';
import { convertToIDR } from '@/utils/localFormatter';
import { dayjsFormat } from '@/utils/dayjs'

defineProps<{
    items?: any[]
}>()
</script>