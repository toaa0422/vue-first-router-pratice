import { createRouter, createWebHashHistory } from "vue-router";
import Login from "./components/MyLogin.vue"
import Home from "./components/MyHome.vue"

import Users from "./components/menu/MyUser.vue"
import Rights from "./components/menu/MyRights.vue"
import Goods from "./components/menu/MyGoods.vue"
import Orders from "./components/menu/MyOrders.vue"
import Settings from "./components/menu/MySettings.vue"
import UserDetail from "./components/user/MyUserDetail.vue"


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        {
            path: '/home',
            redirect: "/home/users",
            component: Home,
            children: [
                { path: 'users', component: Users },
                { path: 'rights', component: Rights },
                { path: 'goods', component: Goods },
                { path: 'orders', component: Orders },
                { path: 'settings', component: Settings },
                { path: 'users/:id', component: UserDetail, props: true },

            ]
        },

    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()
    const token = localStorage.getItem('token')
    if (!token) {
        return next('/login')
    }
    next()

})

export default router