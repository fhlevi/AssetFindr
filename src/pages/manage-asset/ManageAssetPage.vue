<template>
    <Wrapper>
        <Card class-name="rounded-xl">
            <div class="text-gray-900 text-lg font-semibold leading-7 px-6 pt-5">
                List Asset
            </div>
            <TableHeader
                @keyword="fetchData"
            />
            <TableList
                :items="state.manageList"
            />
        </Card>
    </Wrapper>
</template>

<script setup lang="ts">
import Wrapper from '@/components/atoms/Wrapper.vue'
import Card from '@/components/atoms/Card.vue'
import TableHeader from '@/components/organisms/TableHeader.vue'
import TableList from '@/components/organisms/TableList.vue'
import ManageAssetApi from '@/api/ManageAssetApi'
import { reactive, onMounted } from 'vue'

const state = reactive({
    manageList: [],
    manageModel: null,
})

state.manageModel = new ManageAssetApi()

onMounted(() => {
    fetchData()
})

const fetchData = async (keyword: string) => {
    try {
        const response = await state.manageModel.getManageAsset(keyword ?? '')

        state.manageList = response.data.data
    } catch (e) {
        console.error(e)
    }
}
</script>