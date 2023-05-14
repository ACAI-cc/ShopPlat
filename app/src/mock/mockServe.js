// 引入Mock对象
import Mock from "mockjs";
// 引入mock数据
import banner from "./banner.json"
import floor from "./floor.json"

// mock数据：第一个参数：参数请求地址，第二个参数：请求的数据
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor",{code:200,data:floor});