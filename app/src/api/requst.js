// 导入axios
import axios from "axios";  

// 导入nprogress
import nProgress from "nprogress";
// 导入进度条样式
import "nprogress/nprogress.css";



// 利用axios对象的方法create，去创建一个axios实例
// request 就是axios进行了少许配置
const requests = axios.create({
    //配置对象

    // 设置基础路径，发送请求时，路径中会出现api
    baseURL:"/api",

    // 代表请求超时五秒,五秒内没响应则失败
    tiemout:5000,
});

// 请求拦截器
requests.interceptors.request.use(config => {
    // 进度条开始动
    nProgress.start();
    return config;
});

// 响应拦截器
requests.interceptors.response.use(res => {
    // 成功的回调函数：服务器返回数据后，拦截器检测到后，做出相应操作
    // 进度条结束
    nProgress.done();
    return res.data;
},(error) =>{
    // 失败的回调函数
    return Promise.reject(new Error('faile'));
});

export default requests