import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Order from './views/Order.vue'
import Payment from './views/Payment'
import Admin from './admin/Home'
import Grud from './admin/Grud'
import Upload from './admin/Upload'
import AdminLogin from './admin/Login'
import AdminLogout from './admin/Logout'
import AdminMain from './admin/Main'
import Profile from './views/Profile'
import Login from './views/Login'
import Register from './views/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/order', name: 'order', component: Order },
    { path: '/payment/:order_id', name: 'payment', component: Payment },
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/admin', name: 'main', component: AdminMain },
    { path: '/admin/home', name: 'admin', component: Admin },
    { path: '/admin/grud/:target', name: 'grud', component: Grud },
    { path: '/admin/upload', name: 'upload', component: Upload },
    { path: '/admin/login', name: 'adminlogin', component: AdminLogin },
    { path: '/admin/logout', name: 'adminlogout', component: AdminLogout }
  ]
})
