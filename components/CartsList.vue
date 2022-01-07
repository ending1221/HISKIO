<template>
<div class="flex-shrink-0 max-w-[776px] w-[66.21%] mr-4 sn-1000:mr-0 sn-1000:w-full">
    <div class="mb-70px sn-1000:mb-6">
        <header class="items-center justify-between mb-5 sn-1000:flex">
            <h2 class="text-2xl font-medium text-blueGray-4 sn-1000:text-xl">購物車</h2> 
            <button class="lg:hidden text-xs underline text-yellow-3 sn-1000:block">我追蹤的課程</button>
        </header> 
        <div v-if="newCartsData" class="bg-white rounded-[10px]" style="box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 15px;">
            <header class="flex items-center pt-4 pb-3 pl-3 text-gray-600 border-gray-400 pr-26px border-b-1 sn-1000:hidden">
                <span class="w-1/2">項目</span> 
                <div class="flex items-center justify-between flex-grow text-center">
                    <span class="flex-shrink-0 w-1/3">售價</span> 
                    <span class="flex-shrink-0 w-1/3">&nbsp;</span> 
                    <span class="flex-shrink-0 w-1/3">結帳金額</span>
                </div> 
                <span class="w-12px">&nbsp;</span>
            </header> 
            <ul>
                <CartsItem v-for="cartsItem in newCartsData.data" :key="cartsItem.id" :cartsItemData="cartsItem" />
            </ul>
        </div>
        <!-- 購物車為空 -->
        <div v-if="!newCartsData" class="flex flex-col items-center justify-center">
            <img src="https://frontend.f5ezcode.in/img/img-EmptyCart.ccc1cf3.png" alt="no cart" class="object-cover mb-5 w-400px h-200px"> 
            <p class="mb-5 text-gray-600 sn-1000:text-sm">購物車裡是空的，去逛逛喜歡的課程吧！</p> 
            <button class="default-solid-btn">前往探索目錄</button>
        </div>
    </div> 
    <div class="lg:block sn-1000:hidden">
        <h2 class="mb-5 text-2xl font-medium text-blueGray-4">我追蹤的課程</h2> 
        <div class="mb-10">
            <h3 class="mb-5 text-xl font-medium text-gray-600">單堂課程</h3> 
            <div class="flex flex-col items-center justify-center pt-[60px]">
                <img src="https://frontend.f5ezcode.in/img/no-collection.7189b1d.svg" alt="no collection" class="object-cover mb-2 w-[300px] h-[150px]"> 
                <p class="text-lg text-gray-600">你尚未追蹤單堂課程</p>
            </div>
        </div> 
        <div class="mb-10">
            <h3 class="mb-5 text-xl font-medium text-gray-600">電子書</h3> 
            <div class="flex flex-col items-center justify-center pt-[60px]">
                <img src="https://frontend.f5ezcode.in/img/no-collection.7189b1d.svg" alt="no collection" class="object-cover mb-2 w-[300px] h-[150px]">
                <p class="text-lg text-gray-600">你尚未追蹤電子書</p>
            </div>
        </div> 
        <div>
            <h3 class="mb-5 text-xl font-medium text-gray-600">課程組合</h3> 
            <div class="flex flex-col items-center justify-center pt-[60px]">
                <img src="https://frontend.f5ezcode.in/img/no-collection.7189b1d.svg" alt="no collection" class="object-cover mb-2 w-[300px] h-[150px]"> 
                <p class="text-lg text-gray-600">你尚未追蹤課程組合</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { apiPostCarts } from '~/api';
import CartsItem from '~/components/CartsItem.vue';
export default {
    components: {
        CartsItem
    },
    async mounted() {
        let carts = JSON.parse(localStorage.getItem('carts'));
        if(carts) {
            try {
                const res = await apiPostCarts(carts)
                this.newCartsData = res.data;
                this.$store.dispatch('changeCartsCourseData', res.data)
                console.log('carts', res.data);
            } catch (error) {
                console.log('error:', error);
            }
        }
    },
    data() {
        return {
            newCartsData: null
        }
    },
    computed: {
        carts() {
            return this.$store.state.cartCourseData
        }
    },
    watch: {
        carts(newCarts, oldCarts) {
            if(newCarts) this.newCartsData = newCarts;
            console.log('newCarts', newCarts);
        }
    }
}
</script>

<style>

</style>