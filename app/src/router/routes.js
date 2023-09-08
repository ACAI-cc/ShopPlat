//传统的引入一上来直接加载
//路由懒加载:不是一上来就加载，是需要或者用户跳到组件时才加载组件


export default [
    {
        path: "/home",
        name: 'home',
        component:()=>import ('@/pages/Home'),
        meta: {
            show: true,
        }
    },
    {
        path: "/login",
        name: 'login',
        component: ()=>import('@/pages/Login'),
        meta: {
            show: false,
        }
    },
    {
        path: "/register",
        name: 'register',
        component: ()=>import('@/pages/Register'),
        meta: {
            show: false,
        }
    },
    {
        path: "/search/:keyword?",
        name: 'search',
        component:()=>import('@/pages/Search'),
        meta: {
            show: true,
        }
    },
    {
        path: "/detail/:skuId?",
        name: 'detail',
        component: ()=>import('@/pages/Detail'),
        meta: {
            show: true,
        }
    },

    {
        path: "/addcartsuccess",
        name: 'addcartsuccess',
        component: ()=>import('@/pages/AddCartSuccess'),
        meta: {
            show: true,
        }
    },
    {
        path: "/shopcart",
        name: 'shopcart',
        component: ()=>import('@/pages/ShopCart'),
        meta: {
            show: true,
        }
    },
    {
        path: "/trade",
        name: 'trade',
        component: ()=>import('@/pages/Trade'),
        meta: {
            show: true,
        },
        beforeEnter(to, from, next) {
            // 跳转交易页，必须从购物车跳转
            if (from.path === '/shopcart') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: "/pay",
        name: 'pay',
        component: ()=>import('@/pages/Pay'),
        meta: {
            show: true,
        },
        // 将query参数映射成props传递给路由组件
        props: route => ({ orderId: route.query.orderId }),

        /* 只能从交易界面, 才能跳转到支付界面 */
        beforeEnter(to, from, next) {
            if (from.path === '/trade') {
                next()
            } else {
                next(false)
            }
        }

    },
    {
        path: "/paysuccess",
        name: 'paysuccess',
        component: ()=>import('@/pages/PaySuccess'),
        meta: {
            show: true,
        }
    },
    {
        path: "/center",
        name: 'center',
        component: ()=>import('@/pages/Center'),
        meta: {
            show: true,
        },
        children: [
            {
                path: 'myorder',
                component: ()=>import('@/pages/Center/myOrder'),
            },
            {
                path: 'grouporder',
                component: ()=>import('@/pages/Center/groupOrder')
            },
            // center重定向
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    // 重定向，设置默认页面
    {
        path: '*',
        redirect: '/home'
    }
    //  路由重定向，设置进入页面默认为home


]