import { apiDelCarts, apiPostCarts, apiGetMember } from '~/api';
// state
export const state = () => ({
    cartCourseData: []
});

// actions
export const actions = {
    async addCarts(context, carouseId) {
        console.log('context', context);
        try {
            let isLogin = false;
            let loginUID = $nuxt.$cookies.get('HiSKIOUID');
            try {
                const meRes = await apiGetMember(loginUID);
                isLogin = true;
                console.log('me', meRes);
            } catch {
                console.log('未登入狀態');
            }
            // isLogin = await apiGetMember(loginUID) ? true : false;
            let data;
            let carts = {
                items: [],
                couponCodes:[]
            };
            let item = {
                id: carouseId,
                coupon: '',
                pipeline: '',
                source: '',
                gid: '',
            }

            let oldCarts = JSON.parse(localStorage.getItem('carts'));
            // 未登入
            if(oldCarts && oldCarts.items.length > 0 && !isLogin) {
                oldCarts.items.forEach((item, i) => {
                    if(item.id === carouseId) {
                        // 查找重複，如果有重複的就刪除
                        oldCarts.items.splice(i, 1);
                    }
                });
            } else {
                // 若為 null，給預設空值
                oldCarts = { items: [] };
            }

            carts.items = [...oldCarts.items, item];
            
            if(isLogin) {
                // delete cart api...
                
            } else {
                loginUID = '';
            }

            const res = await apiPostCarts(carts, loginUID)
            data = res.data;
            localStorage.setItem('carts', JSON.stringify(carts));
            context.commit("changeCartsState", data);
            console.log('data', data);

        } catch (error) {
            console.log('error', error);
        }
    },
    async getMemberData({ commit }, loginUID) {
        try {
            const res = await getMember(loginUID);
            return res.data
        } catch (error) {
            console.log('error', error);
            return ''
        }
    },
    async delCarouseInCarts({ commit }, id, loginUID) {
        try {
            const res = await apiDelCarts(id, loginUID);
            return res
        } catch (error) {
            console.log('error', error);
        }
    }
};

// mutations
export const mutations = {
    changeCartsState(state, cartsData) {
        state.cartCourseData = cartsData;
    },

};

// getters
export const getters = {
    getCarts: state => {
        return state.carts;
    }
};
