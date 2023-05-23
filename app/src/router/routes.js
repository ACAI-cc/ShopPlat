
// 引入路由组件
import Home from '@/pages/Home/home.vue'
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import Search from '@/pages/Search/search.vue'
import Detail from '@/pages/Detail/index.vue'
import AddCartSuccess from '@/pages/AddCartSuccess/index.vue'
import ShopCart from '@/pages/ShopCart/index.vue'
import Trade from '@/pages/Trade/index.vue'
import Pay from '@/pages/Pay/index.vue'
import PaySuccess from '@/pages/PaySuccess/index.vue'


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
    },
    {
        path:"/detail/:skuId?",
        name:'detail',
        component:Detail,
        meta:{
            show:true,
        }
    },

    {
        path:"/addcartsuccess",
        name:'addcartsuccess',
        component:AddCartSuccess,
        meta:{
            show:true,
        }
    },
    {
        path:"/shopcart",
        name:'shopcart',
        component:ShopCart,
        meta:{
            show:true,
        }
    },
    {
        path:"/trade",
        name:'trade',
        component:Trade,
        meta:{
            show:true,
        }
    },
    {
        path:"/pay",
        name:'pay',
        component:Pay,
        meta:{
            show:true,
        }
    },
    {
        path:"/paysuccess",
        name:'paysuccess',
        component:PaySuccess,
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