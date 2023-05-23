import { reqAddressInfo, reqOrderInfo } from "@/api"

const state = {
    address: [],
    orderInfo: {}
};
const mutations = {
    GETUSERADDRESS(state, address) {
        state.address = address;
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo
    }
};
const actions = {
    // 获取用户地址信息
    async getsUserAddress({ commit }) {
        let result = await reqAddressInfo();
        // console.log(result);
        if (result.code == 200) {
            commit('GETUSERADDRESS', result.data)
        }
    },
    //获取订单信息
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo();
        if (result.code == 200) {
            commit('GETORDERINFO', result.data)
        }
    }


};
const getters = {

};

// 对外暴露仓库
export default ({
    state,
    mutations,
    actions,
    getters
})