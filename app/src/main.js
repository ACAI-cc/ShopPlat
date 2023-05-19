import Vue from 'vue'
import App from './App.vue'

// 引入和注册全局组件
//三级联动全局组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
// 注册全局组件
// 有两个参数：组件名字和导入的组件名字
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);



// 引入路由
import router from '@/router';

// 引入vuex仓库
import store from '@/store';

// 引入mockserve.js的mock数据文件
import '@/mock/mockServe';

// 引入swiper样式
import "swiper/css/swiper.css";


Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 全局事件总线配置
  beforeCreate() {
    Vue.prototype.$bus = this;
  },

  // 注册路由 -->组件身上会拥有 $route和$router
  router,
  // 注册仓库 -->组件身上会拥有$store属性
  store
}).$mount('#app')
