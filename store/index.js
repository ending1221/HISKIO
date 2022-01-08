import { apiAuthLogin, apiDelCarts, apiPostCarts, apiGetMember } from '~/api';
// state
export const state = () => ({
    cartCourseData: [],
    isLogin: false,
    me: {},
});

// actions
export const actions = {
    async getMember({ commit }, loginUID='') {
        // if(loginUID === '') loginUID = $nuxt.$cookies.get('HiSKIOUID');
        // console.log('getMember',loginUID);
        try {
            const meRes = await apiGetMember(loginUID);
            localStorage.setItem('me', JSON.stringify(meRes));
            commit('changeIsLogin', true);
            commit('changeMeData', meRes.data);
        } catch (error) {
            console.log('未登入狀態:', error);
            commit('changeIsLogin', false);
        }
    },
    async addCarts(context, carouseId) {
        // 未登入
        try {
            let data;
            let item = {
                id: carouseId,
                coupon: '',
                pipeline: '',
                source: '',
                gid: '',
            }

            let oldCarts = JSON.parse(localStorage.getItem('carts'));
            if(oldCarts && oldCarts.items.length > 0) {
                let isRepeat = false;
                oldCarts.items.forEach((item, i) => {
                    if(item.id === carouseId) {
                        // 查找重複，如果有重複的就刪除
                        isRepeat = true
                        oldCarts.items.splice(i, 1);
                    }
                });
                isRepeat ? '' : oldCarts.items.push(item);
            } else {
                // 若為 null，給預設空值
                oldCarts = { items: [item], coupons: [] };
            }
            const res = await apiPostCarts(oldCarts)
            data = res.data;
            localStorage.setItem('carts', JSON.stringify(oldCarts));
            context.commit("changeCartsState", data);

        } catch (error) {
            console.log('error', error);
        }
    },
    async login({ commit }, data) {
        try {
            console.log('login start');
            const res = await apiAuthLogin(data);
            const token = res.data.access_token;
            commit('changeIsLogin', true);
            return token
        } catch (error) {
            console.log('error', error);
            return false
        }
    },
    async delCarouseInCarts({ commit }, id) {
        console.log(id);
        try {
            let oldCarts = JSON.parse(localStorage.getItem('carts'));
            oldCarts.items.forEach((item, i) => {
                if(item.id == id) {
                    // 查找重複，如果有重複的就刪除
                    oldCarts.items.splice(i, 1);
                }
            });
            const res = await apiPostCarts(oldCarts);
            localStorage.setItem('carts', JSON.stringify(oldCarts));
            commit("changeCartsState", res.data);
        } catch (error) {
            console.log('error', error);
        }
    },
    changeCartsCourseData({ commit }, data) {
        commit('changeCartsState', data)
    },
    async getLoginCarts({ commit }, token){
        try {
            let oldCarts = JSON.parse(localStorage.getItem('carts'));
            const res = await apiPostCarts(oldCarts, token);
            let arr = {
                items: [],
                coupons: []
            }
            res.data.data.forEach(item => {
                arr.items.push({
                    id: item.id,
                    coupon: '',
                    pipeline: '',
                    source: '',
                    gid: ''
                })
            });
            localStorage.setItem('carts', JSON.stringify(arr));
            commit("changeCartsState", res.data);
        } catch (error) {
            console.log(error);
        }
    }
};

// mutations
export const mutations = {
    changeCartsState(state, cartsData) {
        state.cartCourseData = cartsData;
    },
    changeIsLogin(state, boolean) {
        state.isLogin = boolean;
    },
    changeMeData(state, data) {
        state.me = data;
    },
};

// getters
export const getters = {
    getCarts: state => {
        return state.carts;
    },
    getMeData: state => {
        return state.me
    },
    getLoginState: state => {
        return state.isLogin
    }
};
