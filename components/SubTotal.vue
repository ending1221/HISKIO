<template>
    <div class="flex-grow max-w-380 sn-1000:max-w-none">
        <h2 class="mb-5 text-2xl leading-none text-blueGray-4 font-medium sn-1000:text-xl sn-1000:leading-none">小計</h2> 
        <div class="pt-3 px-4 pb-5 bg-white rounded-xl sn-1000:pt-5" style="box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 15px;">
            <div class="mb-5">
                <label for="coupon-code" class="block mb-3 leading-none text-gray-400">輸入折扣代碼</label> 
                <div class="flex">
                    <input id="coupon-code" type="text" class="flex-grow mr-2 p-2 h-10 border border-gray-400 focus:border-gray-700 focus:text-gray-700 rounded sn-1000:mr-0 text-gray-700"> 
                    <button class="flex-shrink-0 w-[76px] h-10 bg-[#FFE6E6] text-red-1 rounded sn-1000:hidden font-normal">確定</button>
                </div> 
            </div>
            <button class="flex items-center text-lg leading-5 text-gray-700 font-medium hover:text-gray-500 focus:text-gray-700">
                <span class="mr-1 underline">選擇抵用券</span> 
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="text-gray-700 svg-inline--fa fa-arrow-right fa-w-14">
                    <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" class=""></path>
                </svg>
                </button> 
            <div class="flex justify-between mt-5 mb-4 pt-5 border-t border-gray-400">
                <div class="flex-shrink-0 text-gray-400 leading-none">金額</div> 
                <div class="text-gray-700 leading-none">
                    <span class="text-sm leading-4">$</span>0
                </div>
            </div>
            <div class="mb-5 text-right text-32px leading-none text-blueGray-4 font-medium">
                <span class="text-2xl leading-8">$</span>0
            </div> 
            <button class="block mb-3 w-full h-10 bg-gray-200 text-gray-500 cursor-not-allowed">前往結帳</button> 
            <p class="text-xs leading-5 text-gray-600">
                點擊上方按鈕即表示您已閱讀並同意
                <a href="/user-policy" target="_blank" class="underline">「HiSKIO購買與退費政策」</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>