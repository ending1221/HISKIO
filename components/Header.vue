<template>
    <header class="fixed top-0 z-10 w-full bg-white shadow-sm h-[50px]">
        <section class="relative flex items-center justify-between h-full xl:mx-auto max-w-1170 ml-4 mr-2 lg:mr-2">
            <div class="flex items-stretch justify-start flex-grow h-full">
                <a href="/" class="logo-hiskio block w-66px h-full bg-contain bg-center bg-no-repeat overflow-hidden whitespace-nowrap lg:block lg:mr-3 lg:w-[100px] mr-3"></a>
                <a href="https://www.1111.com.tw/corp/73081297/" target="_blank" class="items-center mr-[20px] flex">
                    <img src="https://frontend.f5ezcode.in/img/header-recruit.3e1f6fd.png" alt="recruit" width="80px">
                </a>
            </div>
            <div class="flex items-center justify-end">
                <ul class="items-center justify-end h-full mobile lg:flex flex">
                    <li class="text-gray-700 header-btn lg:block">
                        <a href="/teach" class="text-gray-700 transition-colors duration-100 ease-in cursor-pointer px-2 textBtn hover:text-green-3"> 我想開課
                        </a>
                    </li> 
                    <li 
                        v-if="isLogin"
                        class="relative text-gray-700 header-btn lg:block">
                        <span class=""></span> 
                        <a href="/account/missions" class="text-gray-700 transition-colors duration-100 ease-in cursor-pointer px-2 textBtn hover:text-green-3">
                        <span class=""></span>
                        任務板
                        </a>
                    </li>
                    <li v-if="isLogin"
                        class="text-gray-700 transition-colors duration-100 ease-in cursor-pointer px-2 header-btn lg:block textBtn hover:text-green-3">
                        <a href="/account/courses?tab=continue" class="">我的學習</a>
                    </li>
                </ul> 
                <ul class="items-center justify-end h-full lg:flex flex">
                    <li class="flex-shrink-0 lg:mr-2">
                        <button class="relative block text-lg leading-none w-40px h-40px text-gray-400">
                            <span 
                                v-if="cartsHasCarouse" 
                                class="absolute top-[10px] right-[10px] rounded-full w-[6px] h-[6px] bg-red-5 z-2"></span>
                            <svg
                                :class="{'text-green-3': cartsHasCarouse}"
                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-shopping-cart fa-w-18">
                                <path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" class="" data-darkreader-inline-fill="" style="--darkreader-inline-fill:currentColor;"></path>
                            </svg>
                        </button>
                    </li> 
                    <!-- 頭像 -->
                    <li v-if="isLogin" class="lg:block">
                        <div class="rounded-full cursor-pointer w-[32px] h-[32px]" style="background-image: url(&quot;https://lh6.googleusercontent.com/-zaTOxv3k6rs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcF58bPi3b-09xEah-rj-SGqzx1Ew/mo/photo.jpg&amp;sz=250&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat;">
                        </div>
                    </li>
                    <li class="flex-shrink-0 lg:hidden">
                        <button class="w-[40px] h-[40px]">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLnByZWZpeF9fY2xzLTJ7ZmlsbDojOGM4YzhjfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0icHJlZml4X19pY29uLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NjUgLTUwNTIpIj4KICAgICAgICA8cGF0aCBpZD0icHJlZml4X19SZWN0YW5nbGVfMTQxNSIgZmlsbD0ibm9uZSIgZD0iTTAgMEgxOFYxOEgweiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTQxNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDY1IDUwNTIpIi8+CiAgICAgICAgPGcgaWQ9InByZWZpeF9fR3JvdXBfMjQ1IiBkYXRhLW5hbWU9Ikdyb3VwIDI0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAxKSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJwcmVmaXhfX1JlY3RhbmdsZV8xNDEyIiB3aWR0aD0iMTYiIGhlaWdodD0iMiIgY2xhc3M9InByZWZpeF9fY2xzLTIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDE0MTIiIHJ4PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NjMgNTA1MykiLz4KICAgICAgICAgICAgPHJlY3QgaWQ9InByZWZpeF9fUmVjdGFuZ2xlXzE0MTMiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyIiBjbGFzcz0icHJlZml4X19jbHMtMiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTQxMyIgcng9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2MyA1MDU5KSIvPgogICAgICAgICAgICA8cmVjdCBpZD0icHJlZml4X19SZWN0YW5nbGVfMTQxNCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIGNsYXNzPSJwcmVmaXhfX2Nscy0yIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNDE0IiByeD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDYzIDUwNjUpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" width="18px" height="18px" alt="menu" class="mx-auto">
                        </button>
                    </li>
                </ul> 
                <button class="text-xl leading-none text-gray-700 w-[40px] h-[40px] lg:hidden hidden">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="svg-inline--fa fa-times fa-w-11">
                        <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class="" data-darkreader-inline-fill="" style="--darkreader-inline-fill:currentColor;"></path>
                    </svg>
                </button> 
                <button class="text-xl leading-none text-gray-700 w-[40px] h-[40px] lg:hidden hidden">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="svg-inline--fa fa-times fa-w-11">
                        <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class="" data-darkreader-inline-fill="" style="--darkreader-inline-fill:currentColor;"></path>
                    </svg>
                </button> 
                <div v-if="!isLogin" class="items-center justify-end hidden h-full lg:flex">
                    <Button 
                        class="btn-outline-primary"
                        :click="loginAlert">登入</Button> 
                    <Button class="btn-primary">註冊</Button>
                </div>
            </div>
        </section>
    </header>
</template>

<script>
import Button from '~/components/Button.vue';
export default {
    components: {
        Button
    },
    methods: {
        loginAlert() {
            this.$emit('change:LoginAlertState', true);
        }
    },
    data() {
        return {
            cartsHasCarouse: null,
            isLogin: false,
            meData: {}
        }
    },
    mounted() {
        try {
            const token = this.$cookies.get('HISKIOUID');
            if(token !== undefined) this.$store.dispatch('getMember', token);
        } catch (error) {
            console.log(error);
        }
    },
    computed: {
        carts() {
            return this.$store.state.cartCourseData
        },
        me() {
            return this.$store.state.me
        },
        // login() {
        //     return this.$store.state.isLogin
        // }
    },
    watch: {
        carts(newCarts, oldCarts) {
            this.cartsHasCarouse = newCarts.data.length > 0 ? true : false;
        },
        me(newMe) {
            this.isLogin = true;
            this.meData = newMe;
        },
        // login(newState) {
        //     this.isLogin = newState;
        // }
    }
}
</script>

<style lang="scss">

.logo-hiskio {
    background-image: url('/images/logo-hiskio.svg');
}

</style>