<template>
    <button 
        @click="handleClick"
        class="flex items-center justify-center w-16 h-8 text-sm border-solid rounded mx-2">
        <slot/>
    </button> 
</template>

<script>
export default {
    props: {
        click: {
            type: Function
        }
    },
    methods: {
        handleClick() {
            this.click();
        }
    }
}
</script>

<style>

</style>