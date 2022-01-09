<template>
    <div class="flex flex-col items-center justify-center pt-[60px]">
        <img src="https://frontend.f5ezcode.in/img/no-collection.7189b1d.svg" alt="no collection" class="object-cover mb-2 w-[300px] h-[150px]"> 
        <p class="text-lg text-gray-600">{{label}}</p>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String
        }
    }
}
</script>

<style>

</style>