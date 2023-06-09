import Vue from "vue";
import Vuex from "vuex";
// 使用vuex
Vue.use(Vuex);
// vuex是一个拥有store方法的对象--store方法是一个构造函数，初始化仓库


// 引入子仓库
import home  from "./home";
import search from "./search";
import detail from "./detail";
import shopcart from "./shopcart";
import user from "./user";
import trade from "./trade";

// 对外暴露仓库
export default new Vuex.Store({
    // 实现vuex模块化开发
    modules:{
        home,
        search,
        detail,
        shopcart,
        user,
        trade,
    }
})