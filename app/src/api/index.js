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
        data: params,
    })

}

// 商品详情页 请求地址/api/item/{ skuId } GET
export const reqDetailInfo = (skuId) => {
    return requests({
        url: `/item/${skuId}`,
        method: "GET",
    })
}

// 将产品添加到购物车，修改产品个数 请求地址：/api/cart/addToCart/{ skuId }/{ skuNum } POST
export const reqUpdateShopCartNum = (skuId, skuNum) => {
    return requests({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: "POST"
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
export const reqDelCartById = (skuId) => {
    return requests({
        url: `/cart/deleteCart/${skuId}`,
        method: "DELETE",
    })
}

// 切换商品请求状态 URL:/api/cart/checkCart/{skuId}/{isChecked} GET
export const reqUpdateCheckedById = (skuId, isChecked) => {
    return requests({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: "GET"
    })
}

// 获取验证码 URL：/api/user/passport/sendCode/{phone} GET
export const reqGetCode = (phone) => {
    return requests({
        url: `/user/passport/sendCode/${phone}`,
        method: "GET"
    })
}

// 用户注册 URL：/api/user/passport/register POST 要携带phone password code
export const reqRegister = (data) =>{
    return requests({
        url:"/user/passport/register",
        data,//key,value一致
        method:'POST'
    })
}

// 用户登录 URL:/api/user/passport/login POST 携带参数：phone password
export const reqLogin = (data) =>{
    return requests ({
        url:"/user/passport/login",
        data,
        method:'POST'
    })
}

// 获取用户信息 URL：/user/passport/auth/getUserInfo token通过请求头发送
export const reqUserInfo = ()=>{
    return requests({
        url:'/user/passport/auth/getUserInfo',
        method:'GET'
    })
}

// 退出登入 URL:/api/user/passport/logout GET
export const reqLogout = ()=>{
    return requests({
        url:'/user/passport/logout',
        method:'GET'
    })
}

// 获取用户信息 URL /api/user/userAddress/auth/findUserAddressList get
export const reqAddressInfo = ()=>{
    return requests({
        url:'user/userAddress/auth/findUserAddressList',
        method:'GET'
    })
}

// 获取交易页订单信息 URL：/api/order/auth/trade GET
export const reqOrderInfo = () =>{
    return requests({
        url:'/order/auth/trade',
        method:'GET'
    })
}

// 提交订单 URL:/api/order/auth/submitOrder?tradeNo={tradeNo} POST
export const reqSubmitOrder = (tradeNo,data)=>{
    return requests({
        url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
        data,
        method:'POST'
    })
}

// 获取订单信息 URL：/api/payment/weixin/createNative/{orderId} GET
export const reqPayInfo = (orderId) =>{
    return requests({
        url:`/payment/weixin/createNative/${orderId}`,
        method:'GET'
    })
}

// 查询支付状态 URL:/api/payment/weixin/queryPayStatus/{orderId} GET
export const reqPayStatus =(orderId)=>{
    return requests({
        url:`/payment/weixin/queryPayStatus/${orderId}`,
        method:'GET'
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