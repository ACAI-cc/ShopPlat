// 引入插件
import Vue from "vue"
import VueRouter from "vue-router"

// 使用插件
Vue.use(VueRouter)

// 引入路由组件
import Home from '@/pages/Home/home.vue'
import Login from '@/pages/Login/login.vue'
import Register from '@/pages/Register/register.vue'
import Search from '@/pages/Search/search.vue'


// 配置路由：对外暴露路由对象  
export default new VueRouter({
    //配置路由数组 
    routes:[
        {
            path:"/home",
            name:'home',
            component:Home,
            meta:{
                show:true,
            }
        },
        {
            path:"/login",
            name:'login',
            component:Login,
            meta:{
                show:false,
            }
        },
        {
            path:"/register",
            name:'register',
            component:Register,
            meta:{
                show:false,
            }
        },
        {
            path:"/search",
            name:'search',
            component:Search,
            meta:{
                show:true,
            }
        },
        // 重定向，设置默认页面
        {
            path:'*',
            redirect:'/home'
        }
    ]
})