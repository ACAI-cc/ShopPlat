// 当前模块对接口api进行统一管理

import requests from "./requst";

// 引入mock请求接口
import mockRequests from "./mockRequst"

// 服务器数据获取
// 三级菜单 请求地址：/api/product/getBaseCategoryList  GET 无参数
export const reqCategoryList = () => {
    // 发送请求
    return requests({
        url: "/product/getBaseCategoryList",
        method: "GET",
    })
}


// search模块 请求地址：/api/list POST 需要带参数
export const reqSearchInfo = (params) => {
    return requests({
        url: "/list",
        method: "POST",
        // 获取搜索模块数据，至少要给服务器传递一个默认对象：空对象
        data:params,
    })

}

// 商品详情页 请求地址/api/item/{ skuId } GET
export const reqDetailInfo = (skuId) =>{
    return requests({
        url:`/item/${skuId}`,
        method:"GET",
    })
}

// 将产品添加到购物车，修改产品个数 请求地址：/api/cart/addToCart/{ skuId }/{ skuNum } POST
export const reqUpdateShopCartNum = (skuId,skuNum) => {
    return requests({
        url:`/cart/addToCart/${ skuId }/${ skuNum }`,
        method:"POST"
    })
    
}

//获取购物车列表 URL:/api/cart/cartList GET
export const reqCartList = () => {
    // 发送请求
    return requests({
        url: "/cart/cartList",
        method: "GET",
    })
}

// 删除购物车商品 URL：/api/cart/deleteCart/{skuId} DELETE
export const reqDelCartById = (skuId) =>{
    return requests({
        url:`/cart/deleteCart/${skuId}`,
        method:"DELETE",
    })
}

// 切换商品请求状态 URL:/api/cart/checkCart/{skuId}/{isChecked} GET
export const reqUpdateCheckedById = (skuId,isChecked) =>{
    return requests({
        url:`/cart/checkCart/${skuId}/${isChecked}`,
        method:"GET"
    })
}





// mock数据获取
// 获取banner（轮播图）数据
export const reqBannerList = () => {
    return mockRequests({
        url: "/banner",
        method: "GET",
    })
}
// 获取floor数据
export const reqFloorList = () => {
    return mockRequests({
        url: '/floor',
        method: 'GET',
    })
}