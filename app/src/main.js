import Vue from 'vue'
import App from './App.vue'

//三级联动全局组件
import TypeNav from './pages/Home/TypeNav';
// 注册全局组件
// 有两个参数：组件名字和导入的组件名字
Vue.component(TypeNav.name,TypeNav)

// 引入路由
import router from '@/router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router
}).$mount('#app')
