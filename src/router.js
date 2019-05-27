import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Order from './views/Order.vue'
import Payment from './views/Payment'
import Admin from './admin/Home'
import Grud from './admin/Grud'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/order', name: 'order', component: Order },
    { path: '/payment', name: 'payment', component: Payment },
    { path: '/admin/home', name: 'admin', component: Admin },
    { path: '/admin/grud/:target', name: 'grud', component: Grud }
  ]
})
