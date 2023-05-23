// 引入插件
import Vue from "vue"
import VueRouter from "vue-router"

import routes from './routes'
// 使用插件
Vue.use(VueRouter)

// 引入store进行token判断
import store from '@/store'

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
let router = new VueRouter({
    //配置路由数组 
    routes,
    scrollBehavior(){
        // 跳转新页面，滚轮在页面最上方
        return{ y:0 }
    }
});
router.beforeEach(async (to,from,next)=>{
    
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;

    if(token){
        // 已经登入，拒绝跳转登入页面
        if(to.path == 'login'){
            next('/home')
        }else{
            // 跳转其他页面，携带用户信息过去
            if(name){
                next();
            }else{
              try {
                  // 没有用户信息，则派发,派发后放行
               await store.dispatch("getUserInfo");
               next();
              } catch (error) {
                // 此时获取不到用户信息，即token失效了，需要清空token，重新登入
                // 派发退出登入，放行至登入页
               await store.dispatch("userLogout");
               next('/login')
              }
            }
        }
    }else{
        // 未登入不能跳转支付，交易相关的页面以及个人中心
        let toPath = to.path;
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
          //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
          next('/login?redirect=' + toPath);
        } else {
          //去的不是上面这些路由（home|search|shopCart）---放行
          next();
        }
    }
})

export default router