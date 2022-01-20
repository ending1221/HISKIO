<template>
<div class="flex-shrink-0 max-w-[776px] w-[66.21%] mr-4 sn-1000:mr-0 sn-1000:w-full">
    <div class="mb-70px sn-1000:mb-6">
        <header class="items-center justify-between mb-5 sn-1000:flex">
            <Title class="sn-1000:text-xl" label="購物車" />
            <button class="lg:hidden text-xs underline text-yellow-3 sn-1000:block">我追蹤的課程</button>
        </header> 
        <div v-if="length > 0" class="bg-white rounded-[10px]" style="box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 15px;">
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
        <div v-if="!length" class="flex flex-col items-center justify-center">
            <img src="https://frontend.f5ezcode.in/img/img-EmptyCart.ccc1cf3.png" alt="no cart" class="object-cover mb-5 w-400px h-200px"> 
            <p class="mb-5 text-gray-600 sn-1000:text-sm">購物車裡是空的，去逛逛喜歡的課程吧！</p> 
            <button class="default-solid-btn">前往探索目錄</button>
        </div>
    </div> 
    <div class="lg:block sn-1000:hidden">
        <Title class="mb-5" label="我追蹤的課程" />
        <div class="mb-10">
            <SubTitle label="單堂課程" />
            <NoCollection label="你尚未追蹤單堂課程" />
        </div> 
        <div class="mb-10">
            <SubTitle label="電子書" />
            <NoCollection label="你尚未追蹤電子書" />
        </div> 
        <div>
            <SubTitle label="課程組合" />
            <NoCollection label="你尚未追蹤課程組合" />
        </div>
    </div>
</div>
</template>

<script>
import Title from '~/components/Title.vue';
import SubTitle from '~/components/SubTitle.vue';
import CartsItem from '~/components/CartsItem.vue';
import NoCollection from '~/components/NoCollection.vue';
export default {
    components: {
        CartsItem,
        Title,
        SubTitle,
        NoCollection
    },
    async mounted() {
        try {
            const token = await this.$store.dispatch('getLocalToken');
            await this.$store.dispatch('getLoginCarts', token);
        } catch (error) {
            console.log('error:', error);
        }
    },
    data() {
        return {
            newCartsData: {},
            length: 0
        }
    },
    computed: {
        carts() {
            return this.$store.state.cartCourseData
        }
    },
    watch: {
        carts(newCarts, oldCarts) {
            let carts = JSON.parse(JSON.stringify(newCarts))
            if(newCarts){
                this.newCartsData = carts;
                this.length = carts.data.length;
            } 
        }
    }
}
</script>

<style>

</style>