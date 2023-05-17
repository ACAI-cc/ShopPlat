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