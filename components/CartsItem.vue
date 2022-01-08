<template>
    <li class="border-gray-400 border-b-1">
        <div class="flex items-center py-5 pl-3 pr-[26px] sn-1000:flex-col sn-1000:pt-3 sn-1000:pl-3 sn-1000:pr-[15px] sn-1000:pb-[14px]">
            <div class="flex w-1/2 items-center sn-1000:items-start sn-1000:mb-2 sn-1000:w-full">
                <div class="relative flex-shrink-0 mr-3 w-[120px] sn-1000:mr-2 sn-1000:w-[62px]">
                    <img :src="cartsItemData.thumbnails.w300" alt="course" class="object-cover w-full h-[68px] rounded-md sn-1000:h-[34px]">
                </div> 
                <a :href="`/fundraising/${cartsItemData.id}/about`" class="sn-1000:flex-grow sn-1000:text-sm" target="_blank">
                    <p class="self-start font-medium text-gray-700 sn-1000:leading-tight">{{cartsItemData.name}}</p>
                </a> 
                <button class="flex-shrink-0 hidden text-lg leading-none text-gray-500 hover:text-gray-400 focus:text-gray-600 ml-[36px] sn-1000:block">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-trash fa-w-14">
                        <path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" class=""></path>
                    </svg>
                </button>
            </div> 
            <div class="flex items-center justify-between flex-grow text-center sn-1000:w-full">
                <div class="flex flex-col items-center flex-shrink-0 w-1/3 whitespace-nowrap sn-1000:flex-row">
                    <del class="text-sm text-gray-500 sn-1000:hidden">{{fundraisingPrice}}</del> 
                    <span class="text-lg text-gray-600 sn-1000:mr-1 sn-1000:text-xs">{{$carts.addThousand(cartsItemData.courses[0].price)}}</span> 
                    <span class="p-1 text-sm leading-none text-blueGray-4 border-1 border-blueGray-4 rounded-default sn-1000:text-xs sn-1000:leading-none">募資優惠</span>
                </div> 
                <div class="flex flex-col items-center flex-shrink-0 w-1/3 whitespace-nowrap sn-1000:flex-row sn-1000:justify-center sn-1000:text-xs text-sm text-gray-500">適用抵用券</div> 
                <span class="flex-shrink-0 w-1/3 text-gray-700 text-22px sn-1000:text-right sn-1000:text-sm sn-1000:font-medium">{{$carts.addThousand(cartsItemData.courses[0].price)}}</span>
            </div> 
            <button 
                @click="delInCarts(cartsItemData.id)"
                class="text-lg text-gray-500 hover:text-gray-400 focus:text-gray-600 sn-1000:hidden">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-trash fa-w-14">
                    <path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" class=""></path>
                </svg>
            </button>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        cartsItemData: {
            type: Object,
            default: ()=>({})
        }
    },
    methods: {
        delInCarts(id) {
            this.$store.dispatch('delCarouseInCarts', id);
        }
    },
    computed: {
        fundraisingPrice() {
            if(this.cartsItemData.courses) {
                let prices = this.cartsItemData.courses[0].prices;
                let index = this.$carts.getLastFundraisingData(prices);
                let price = this.$carts.addThousand(prices[index].price);
                return price
            }
        }
    }
}
</script>

<style>

</style>