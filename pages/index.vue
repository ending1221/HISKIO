<template>
<div>
    <Header @change:LoginAlertState="handleLoginAlertState" />
    <Carts />
    <OtherCourses />
    <LoginAlert 
        :login_alert="login_alert"
        @change:LoginAlertState="handleLoginAlertState"/>
</div>
    
</template>

<script>
import '~/assets/scss/layout.scss';
import Header from '~/components/Header.vue';
import LoginAlert from '~/components/LoginAlert.vue';
import Carts from '~/components/Carts.vue';
import OtherCourses from '~/components/OtherCourses.vue';
export default {
    components: {
        Header,
        LoginAlert,
        Carts,
        OtherCourses
    },
    data() {
        return {
            login_alert: false,
        }
    },
    methods: {
        handleLoginAlertState(state) {
            this.login_alert = state;
        }
    }
}
</script>

<style lang="scss">
$green: rgb(40,143,172);

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.7);
}
.bg-layout {
    background-image: url('https://frontend.f5ezcode.in/images/login.png');
}
.transition-colors {
    transition-property: background-color,border-color,color,fill,stroke;
}

.input-text {
    width: 100%;
    border-radius: 4px;
    background-color: rgb(250,250,250);
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 3rem;
    font-size: .875rem;
    line-height: 1.25rem;
    --tw-text-opacity: 1;
    color: rgb(140,140,140);
    outline: 2px solid transparent;
    outline-offset: 2px;
}
.text-red-4 {
    color: rgb(226,82,82);
}
.text-green {
    color: $green;
}
.bg-green {
    background-color: $green;
}
.default-solid-btn {
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: $green;
    color: rgb(255,255,255);
}
</style>