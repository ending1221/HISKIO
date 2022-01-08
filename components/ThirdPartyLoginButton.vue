<template>
<a href="javascript:void(0)" class="flex items-center justify-center border-gray-500 border py-2.5 rounded-lg w-[320px] mb-3">
    <img :src="image" :alt="alt" class="mr-3"> 
    <p class="text-base text-gray-600 w-140px">{{label}}</p>
</a>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
        },
        alt: {
            type: String,
        },
        label: {
            type: String
        }

    }

}
</script>

<style>

</style>