import { reqDetailInfo } from "@/api";

const state={
    goodsInfo:{}
};

const mutations={
    GOODSINFOLIST(state,goodsInfo){
        state.goodsInfo = goodsInfo

    }
};

const actions={
    async goodsInfoList({commit},skuId){
        let result = await reqDetailInfo(skuId);
        // console.log(result)
        if(result.code == 200){
            commit('GOODSINFOLIST',result.data)
        }
    }
};

const getters={
    // 路径导航的简化
    categoryView(state){
        return state.goodsInfo.categoryView||{}
    },
    // 产品信息的简化
    skuInfo(state){
        return state.goodsInfo.skuInfo||{}
    },
    // 商品属性的简化
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList || []
    }
};

// 对外暴露仓库
export default ({
    state,
    mutations,
    actions,
    getters
 })