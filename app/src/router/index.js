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

// 解决：多次执行同参数跳转，会抛出NavigationDuplicated的警告错误

// 保存push | replace原型
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

// 重写push | repalce
// 三个参数：1：push跳转的位置，2：成功回调，3：失败回调
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this, location, resolve, reject)
    }else{
        originPush.call(this, location, () => { }, () => { })
    }
}

VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(thia,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}


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
            path:"/search/:keyword?",
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
          //  路由重定向，设置进入页面默认为home

  
    ]
})