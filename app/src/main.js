import Vue from 'vue'
import App from './App.vue'

// 引入和注册全局组件
//三级联动全局组件
import TypeNav from './pages/Home/TypeNav';
// 注册全局组件
// 有两个参数：组件名字和导入的组件名字
Vue.component(TypeNav.name,TypeNav)

// 引入路由
import router from '@/router';

// 引入vuex仓库
import store from '@/store';

// test
import { reqCategoryList} from "@/api/index.js";
reqCategoryList();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由 -->组件身上会拥有 $route和$router
  router,
  // 注册仓库 -->组件身上会拥有$store属性
  store
}).$mount('#app')
