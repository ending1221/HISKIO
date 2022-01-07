<template>
<div v-if="carousesData" class="pt-5 pb-[44px] bg-hi-courses-box md:pb-[36px] lg:pt-[40px] lg:pb-[60px]">
    <div class="mx-auto px-[15px] max-w-1200">
        <h2 class="mb-6 font-medium text-22px text-hi-price sn-1000:text-xl">正在募資中的課程</h2> 
        <ul class="global-card-list grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            <FundraisingCard 
                :carouse="carouse" 
                v-for="carouse in carousesData" 
                :key="carouse.id" />
        </ul>
    </div>
</div>
</template>

<script>
import { apiGetFundraising } from '~/api';
import FundraisingCard from '~/components/FundraisingCard.vue';
export default {
    components: {
        FundraisingCard
    },
    data() {
        return {
            carousesData: []
        }
    },
    async fetch() {
        try {
            const res = await apiGetFundraising();
            this.carousesData = res.data;

        } catch (error) {
            console.log('fundraising api error: ', error);
        }
    }
}
</script>

<style>

</style>