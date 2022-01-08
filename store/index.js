import { apiAuthLogin, apiDelCarts, apiPostCarts, apiGetMember } from '~/api';
// state
export const state = () => ({
    cartCourseData: [],
    isLogin: false,
    me: {},
});

// actions
export const actions = {
    async getLocalToken({ commit }) {
        const token = await this.$cookies.get('HISKIOUID');
        token === undefined ? '' : token;
        commit('changeIsLogin', false);
        return token
    },
    async getMember({ commit }, loginUID) {
        if(loginUID === undefined) {
            commit('changeMeData', {});
            return false;
        };

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
        try {
            let item = {
                id: carouseId,
                coupon: '',
                pipeline: '',
                source: '',
                gid: '',
            }

            let oldCarts = JSON.parse(localStorage.getItem('carts'));
            if(oldCarts && oldCarts.items.length > 0) {
                let result = await context.dispatch('delCarouseInCarts', carouseId);
                let isRepeat = result.isRepeat;
                oldCarts = result.oldCarts;
                console.log('isRepeat', isRepeat);
                if(!isRepeat) {
                    oldCarts.items.push(item);
                }
            } else {
                // 若為 null，給預設空值
                oldCarts = { items: [item], coupons: [] };
            }
            await context.dispatch('getCartsData', oldCarts);

        } catch (error) {
            console.log('error', error);
        }
    },
    async getCartsData({ dispatch, commit }, carts) {
        const token = dispatch('getLocalToken');
        const res = await apiPostCarts(carts, token);
        localStorage.setItem('carts', JSON.stringify(carts));
        commit("changeCartsState", res.data);
    },
    async login({ commit }, data) {
        try {
            console.log('login start');
            const res = await apiAuthLogin(data);
            const token = res.data.access_token;
            commit('changeIsLogin', true);
            this.$cookies.remove('HISKIOUID')
            this.$cookies.set('HISKIOUID', token, new Date(new Date() + res.data.expires_in))
            return token
        } catch (error) {
            console.log('error', error);
            return false
        }
    },
    async delCarouseInCarts({ dispatch }, id) {
        try {
            let oldCarts = JSON.parse(localStorage.getItem('carts'));
            let isRepeat = false;
            oldCarts.items.forEach((item, i) => {
                if(item.id == id) {
                    // 查找重複，如果有重複的就刪除
                    isRepeat = true;
                    oldCarts.items.splice(i, 1);
                }
            });
            if(isRepeat) {
                const msg = await dispatch('delCarts', id);
                console.log('msg',msg);
            }
            await dispatch('getCartsData', oldCarts);
            return {
                isRepeat,
                oldCarts
            }
        } catch (error) {
            console.log('error', error);
        }
    },
    async delCarts({ dispatch, state },id) {
        if(!state.isLogin) return
        const token = await dispatch('getLocalToken');
        try {
            const res = await apiDelCarts({
                items: [{
                    id,
                    coupon: ''
                }],
                coupons: [],
            }, token);
            return res.data
        } catch (error) {
            console.log(error);
            return false
        }
    },
    changeCartsCourseData({ commit }, data) {
        commit('changeCartsState', data)
    },
    async getLoginCarts({ commit }, token){
        try {
            let oldCarts = JSON.parse(localStorage.getItem('carts'));
            oldCarts = oldCarts === undefined ? [] : oldCarts;
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
        return state.cartCourseData;
    },
    getMeData: state => {
        return state.me
    },
    getLoginState: state => {
        return state.isLogin
    }
};
