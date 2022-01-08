<template>
    <li class="border-b-default border-gray-400 lg:border-b-0">
        <a :href="`https://hiskio.com/fundraising/${carouse.id}/about`" class="block w-full pt-5 rounded-[10px] lg:p-0 lg:bg-white lg:drop-shadow-[0px_10px_15px_rgba(0,0,0,0.05)] pb-[26px]">
            <div class="flex w-full lg:flex-col lg:mb-0 mb-4">
                <div class="relative flex-shrink-0 mr-4 bg-center bg-cover rounded-md course-card-image w-[114px] h-64px lg:mr-0 lg:pt-[54.64285%] lg:w-full lg:h-auto lg:rounded-t-[10px] lg:rounded-b-none" :data-src="`${carouse.thumbnails.w300}`" lazy="loaded" :style="`background-image: url(&quot;${carouse.thumbnails.w300}&quot;);`">
                    <div class="absolute inset-x-0 bottom-0 flex items-end justify-end p-2 leading-none course-card-cover h-1/2 text-22px md:hidden" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(250, 250, 250, 0));">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="mr-3 text-white hover:text-[#ffd26b] svg-inline--fa fa-bell fa-w-14">
                            <path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" class=""></path>
                        </svg> 
                        <svg
                            @click="addCarts(carouse.id)"                            
                            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="text-white hover:text-yellow-3 svg-inline--fa fa-shopping-cart fa-w-18">
                            <path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" class=""></path>
                        </svg>
                    </div>
                </div> 
                <div class="flex flex-col flex-grow lg:pt-3 lg:pb-[9px] lg:px-3 lg:w-full">
                    <h3 class="h-[38px] text-sm leading-[19px] font-medium -order-1 line-clamp-2 text-gray-700 lg:mb-[4.34px] lg:h-[58px] lg:text-xl lg:leading-[29px] lg:text-hi-price">{{carouse.title}}
                    </h3> 
                    <div class="hidden justify-between items-center flex-wrap mb-[7.5px] lg:flex lg:w-full lg:order-2 lg:mb-[10px]">
                        <p class="hidden text-sm leading-[19px] text-gray-700 lg:block lg:mb-[6px]">剩 3 天</p> 
                        <p class="text-sm leading-[19px] text-gray-700 lg:mb-6px">已募資 {{formatFundraisingPercent}}%</p>
                        <div class="relative w-[39.54%] h-[6px] bg-hi-input-gray rounded-md overflow-hidden lg:w-full lg:h-[10px]">
                            <div class="absolute inset-y-0 left-0 rounded-md" :style="`background: linear-gradient(90deg, rgb(235, 103, 103) 0%, rgb(227, 74, 74) 100%); width: ${formatFundraisingPercent}%;`"></div>
                        </div>
                    </div> 
                    <div class="flex justify-between items-center mt-auto lg:justify-start lg:mt-0 lg:order-1 lg:mb-[4.81px]">
                        <div class="flex-shrink-0 hidden bg-center bg-cover rounded-full mr-[5px] w-[23px] h-[23px] lg:block lg:mr-[10px] lg:w-[37.25px] lg:h-[37.25px]" :data-src="carouse.lecturers[0].avatar" lazy="loaded" :style="`background-image: url(&quot;${carouse.lecturers[0].avatar}&quot;);`">
                        </div> 
                        <p class="text-xs leading-[14px] text-gray-600 lg:text-base lg:leading-[27.64px]">{{carouse.lecturers[0].username}}</p> 
                        <p class="font-bold leading-none lg:hidden text-red-1">${{$carts.addThousand(carouse.price)}}</p>
                    </div> 
                    <div class="hidden items-center lg:flex lg:items-end lg:order-3">
                        <span class="mr-[5px] text-sm leading-[17px] text-blueGray-4 font-bold lg:mr-1 lg:text-22px lg:leading-[24px]">$1,190</span> 
                        <del class="text-sm leading-[17px] text-gray-500 lg:leading-[18px]">${{$carts.addThousand(carouse.fixed_price)}}</del>
                    </div>
                </div>
            </div> 
            <div class="flex lg:hidden">
                <div class="flex items-center justify-center flex-shrink-0 mr-4 w-100px">
                    <p class="text-sm leading-none text-gray-700">已募資 {{formatFundraisingPercent}}%</p>
                </div> 
                <div class="flex items-center justify-center flex-grow">
                    <div class="relative flex-grow overflow-hidden rounded-md h-[6px] bg-gray-400 lg:bg-hi-input-gray">
                        <div class="absolute inset-y-0 left-0 rounded-md bg-red-1" :style="`width: ${formatFundraisingPercent}%;`"></div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</template>

<script>
export default {
    methods: {
        addCarts(id) {
            event.preventDefault();
            this.$store.dispatch('addCarts', id);
        }
    },
    props: {
        carouse: {
            type: Object,
            default: ()=>({})
        }
    },
    computed: {
        formatFundraisingPercent() {
            const fundraising_tickets = this.carouse.fundraising_tickets;
            const consumers = this.carouse.consumers;
            if(fundraising_tickets && consumers)
                return Math.round(consumers / fundraising_tickets * 100);
        }
    }
}
</script>
