import { reqCartList,reqDelCartById,reqUpdateCheckedById } from "@/api";

const state={
    cartList:[]
};

const mutations={
  GETCARTLIST(state,cartList){
    state.cartList = cartList
  },
};

const actions={
  //  获取购物车列表数据
  async getCartList({commit}){
    let result = await reqCartList();
    if(result.code == 200){
      commit('GETCARTLIST',result.data)
    }
  },
  // 删除购物车商品
  async deleteCartListById({commit},skuId){
    let result = await reqDelCartById(skuId);
    if(result.code == 200){
      return "ok"
    }else{
      return new Promise.reject(new Error("faile"))
    }
  },
  // 修改购物车商品的选中状态
  async updateCheckedById({commit},{skuId,isChecked}){
    let result = await reqUpdateCheckedById(skuId,isChecked)
    // 服务器修改后，不返回数据，只需告诉组件是否成功即可
    if(result.code == 200){
      return "ok"
    }else{
      return new Promise.reject(new Error("faile"))
    }
  },
  // 删除购物车选中商品
   deleteAllCheckedCart({dispatch,getters}){
    // context小仓库副本:commit【提交mutations修改state】 getters【计算属性】 dispatch【派发action】 state【当前仓库数据】
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked == 1 ? dispatch('deleteCartListById',item.skuId) : '';
      // 将每次返回的promise添加到数组中
      PromiseAll.push(promise)
    });
    // promise.all是一个数组，全成功则返回成功，有一个失败返回失败
    return Promise.all (PromiseAll)
  },
  // 修改全选框状态
  updateAllChecked({dispatch,state},isChecked){
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach(item=>{
      let promise = dispatch("updateCheckedById",{skuId:item.skuId,isChecked});
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  }

};

const getters={
    // 简化购物车返回的数据
    cartList(state){
      return state.cartList[0]||{}
    },
    cartInfoList(state){
      return state
    }
};

// 对外暴露仓库
export default ({
    state,
    mutations,
    actions,
    getters
 })