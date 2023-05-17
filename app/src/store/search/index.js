// search模块的仓库
import {reqSearchInfo} from '@/api';


// state：仓库存储数据的地方
const state={
    searchList:{},
};
// mutations：唯一修改state的地方
const mutations={
    SEARCHLIST(state,searchList){
        state.searchList = searchList;
    }
};
// actions：处理action，梳理逻辑业务，也可以处理异步
const actions = {
    async searchList({commit}, params = {}){
        // params形参：是当前用户派发action的时候，第二个传递过来的参数，至少是一个空对象
        let result = await reqSearchInfo(params);
        if(result.code == 200){
            commit('SEARCHLIST',result.data)
        }
    },

};
// getters：可以理解为计算属性，用于简化仓库数据，让组件获取仓库的数据变得更加方便
const getters = {
    // 此处state指的是当前仓库的state
    // 计算属性的属性值至少是个属性值
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    },
    attrsList(state){
        return state.searchList.attrsList || [];
    }

};



// 对外暴露仓库
export default ({
    state,
    mutations,
    actions,
    getters
 })