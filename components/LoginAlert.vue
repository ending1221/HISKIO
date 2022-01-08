<template>
    <div v-if="login_alert" class="overlay flex justify-center items-center">
        <div class="relative w-full max-h-screen overflow-auto bg-white bg-top bg-no-repeat bg-contain bg-layout max-w-450 rounded-xl pb-7 pt-10 sn-1000:h-auto  sm:rounded-xl sm:h-full sm:pb-12">
            <button 
                class="absolute top-3 right-2.5 w-[40px] h-[40px] text-xl leading-none"
                @click="closeLoginAlert">
                <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="text-gray-700 svg-inline--fa fa-times fa-w-11">
                    <path  fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class=""></path>
                </svg>
            </button> 
            <div  class="w-full overflow-hidden">
                <div class="flex justify-center">
                    <button class="text-4xl leading-[37px] w-160px text-center font-black text-gray-400 pt-5 pb-2 transition-colors float-left text-green">登入</button> 
                    <button class="text-4xl leading-[37px] w-160px text-center font-black text-gray-400 pt-5 pb-2 transition-colors float-right">註冊</button>
                </div>
                <div class="clear-both w-full mx-auto bg-white max-w-320">
                    <span class="block transition-transform duration-150 dash bg-green w-80px h-1 left-0 text-green transform translate-x-10"></span>
                </div>
            </div> 
            <div  class="w-full">
                <div class="w-full h-full">
                    <div class="flex flex-col items-center justify-between w-1/2 mx-auto mt-6">
                        <ThirdPartyLoginButton
                            image="/images/icon-facebook.svg"
                            alt="HiSKIO facebook login"
                            label="使用Facebook登入" />
                        <ThirdPartyLoginButton
                            image="/images/icon-google.svg"
                            alt="HiSKIO google login"
                            label="使用google登入" />
                        <ThirdPartyLoginButton
                            image="/images/icon-github.svg"
                            alt="HiSKIO github login"
                            label="使用Github登入" />
                        <ThirdPartyLoginButton
                            image="/images/icon-linkedin.svg"
                            alt="HiSKIO linkedin login"
                            label="使用LinkedIn登入" />
                    </div> 
                    <p class="text-base text-center text-gray-700 mt-6 mb-5 ">使用 HiSKIO ID 登入</p> 
                    <div class="mx-auto overflow-hidden w-320px">
                        <ul>
                            <li class="relative">
                                <input 
                                :class="{'error': errorMsg.account.length > 0}"
                                    v-model="account" 
                                    type="email" placeholder="請輸入 HiSKIO ID" class="input-text"> 
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="absolute text-gray-400 top-1/2 w-20px h-20px left-5% -translate-y-1/2 transform svg-inline--fa fa-user-circle fa-w-16">
                                        <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" class=""></path>
                                </svg>
                            </li> 
                            <p class="text-xs text-red-4">{{errorMsg.account}}</p> 
                            <li class="relative mt-2">
                                <input 
                                    v-model="password" 
                                    :class="{'error': errorMsg.password.length > 0}"
                                    type="password" placeholder="請輸入登入密碼" class="input-text"> 
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="absolute text-gray-400 top-1/2 transform -translate-y-1/2 w-20px h-20px left-5% svg-inline--fa fa-lock fa-w-14">
                                    <path fill="currentColor" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                                </svg>
                            </li> 
                            <p class="text-xs text-red-4">{{errorMsg.password}}</p>
                        </ul>
                    </div> 
                    <div class="flex items-center mx-auto policy w-320px mt-5">
                        <a @click="changeConfirmState" 
                            href="javascript:void(0)" class="flex items-center justify-center float-left text-white w-[18px] h-[18px] bg-green rounded-2px mr-1">
                            <svg 
                                v-show="confirm"
                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-check fa-w-16 fa-xs">
                                <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class=""></path>
                            </svg>
                        </a> 
                        <div>
                            <p class="text-sm text-gray-400">登入註冊即代表您同意
                                <a href="https://hiskio.com/user-policy" target="_blank" rel="noopener noreferrer" class="underline cursor-pointer">使用者</a>及<a href="https://hiskio.com/privacy-policy" target="_blank" rel="noopener noreferrer" class="underline cursor-pointer">隱私權政策</a>
                            </p>
                        </div>
                    </div> 
                    <Button 
                        @click="login" 
                        class="mx-auto btn-solid-default mt-7 py-2">登入</Button> 
                    <button class="flex justify-center mx-auto text-center btn-text-gray-600 mt-5">忘記密碼</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '~/components/Button.vue';
import ThirdPartyLoginButton from '~/components/ThirdPartyLoginButton.vue';
export default {
    components: {
        Button,
        ThirdPartyLoginButton
    },
    props: {
        login_alert: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            account: '',
            password: '',
            confirm: true,
            errorMsg: {
                account: '',
                password: ''
            }
        }
    },
    methods: {
        closeLoginAlert() {
            this.$emit('change:LoginAlertState', false);
        },
        changeConfirmState() {
            this.confirm = !this.confirm;
        },
        async login() {
            if(this.verifyLoginData()) {
                let token = await this.$store.dispatch('login', {
                    account: this.account,
                    password: this.password,
                    confirm: this.confirm
                })
                await this.$store.dispatch('getMember', token);
                await this.$store.dispatch('getLoginCarts', token);
                this.$emit('change:LoginAlertState', false);
            }
        },
        verifyLoginData() {
            let account = this.checkAccount();
            let password = this.checkPassword();
            let confirm = this.checkConfirm()
            if(account && password && confirm) {
                return true
            } else {
                return false
            }
        },
        checkAccount() {
            if(this.account.length > 0) {
                this.errorMsg.account = '';
                return true
            } else {
                this.errorMsg.account = '請輸入帳號';
            }
        },
        checkPassword() {
            if(this.password.length > 0) {
                this.errorMsg.password = '';
                return true
            } else {
                this.errorMsg.password = '請輸入密碼';
            }
        },
        checkConfirm() {
            if(this.confirm) {
                return true
            } else {
                alert('你尚未同意 HiSKIO 使用者及隱私權政策');
            }
        }
    },
}
</script>

<style>

</style>