// 当前模块对接口api进行统一管理

import requests from "./requst";

// 引入mock请求接口
import mockRequests from "./mockRequst"

// 三级联动接口
// 请求地址：/api/product/getBaseCategoryList  GET 无参数
export const reqCategoryList = () =>{
    // 发送请求
    return requests({
        url:"/product/getBaseCategoryList",
        method:"GET",
    })
}


// mock数据获取
// 获取banner（轮播图）数据
export const reqBannerList = () =>{
    return mockRequests({
        url:"/banner",
        method:"GET",
    })
}

// 获取floor数据
export const reqFloorList = () =>{
    return mockRequests({
        url:'/floor',
        method:'GET',
    })
}