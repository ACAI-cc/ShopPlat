
// 引入路由组件
import Home from '@/pages/Home/home.vue'
import Login from '@/pages/Login/login.vue'
import Register from '@/pages/Register/register.vue'
import Search from '@/pages/Search/search.vue'
import Detail from '@/pages/Detail/index.vue'


export default [
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
    },{
        path:"/detail/:skuId?",
        name:'detail',
        component:Detail,
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