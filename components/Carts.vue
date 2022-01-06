<template>
    <div class="min-h carts-outside">
        <div class="flex items-start mx-auto pt-20 pb-16 px-4 max-w-1200 sn-1000:block sn-1000:pt-5 sn-1000:pb-6">
            <CartsList />
            <SubTotal />
        </div>
    </div>
</template>

<script>
import CartsList from '~/components/CartsList.vue';
import SubTotal from '~/components/SubTotal.vue';

export default {
    components: {
        CartsList,
        SubTotal,
    },

}
</script>

<style lang="scss" scoped>
    .carts-outside {
        padding-top: 50px;
    }
</style>