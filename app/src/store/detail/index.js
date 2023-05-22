import { reqDetailInfo,reqUpdateShopCartNum } from "@/api";
// 封装游客身份模块。
import { getUUID } from '@/utils/uuid_token'

const state={
    goodsInfo:{},
    uuid_token:getUUID(),
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
    },
    // 返回一个promis对象
    async UpdateShopCartNum({commit},{skuId,skuNum}){
        let result = await reqUpdateShopCartNum(skuId,skuNum);
        // console.log(result)
        // 加入服务器成功后只返回的code：200
        if(result.code == 200){
            //返回非空字符串，表示加入服务器成功
            return "OK"
        }else{
            // 返回reject，表示加入服务器失败
            return Promise.reject(new Error('faile'));
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