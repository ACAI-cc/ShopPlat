// 当前模块对接口pi进行统一管理

import requests from "./requst";

// 三级联动接口
// 请求地址：/api/product/getBaseCategoryList  GET 无参数

export const reqCategoryList = () =>{
    // 发送请求
    return requests({
        url:"/product/getBaseCategoryList",
        method:"GET",
    })
}