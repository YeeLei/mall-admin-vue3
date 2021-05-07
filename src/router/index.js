import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import AddGood from '@/views/AddGood.vue'
import Login from '@/views/Login.vue'
import Swiper from '@/views/Swiper.vue'
import IndexConfig from '@/views/IndexConfig.vue'
import Category from '@/views/Category.vue'
import Goods from '@/views/Goods.vue'
import Order from '@/views/Order.vue'
import OrderDetail from '@/views/OrderDetail.vue'
import Guest from '@/views/Guest.vue'
import Account from '@/views/Account.vue'

const router = createRouter({
  history: createWebHashHistory(), //hash模式
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/addGood',
      name: 'addGood',
      component: AddGood
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: Swiper
    },
    {
      path: '/hot',
      name: 'hot',
      component: IndexConfig
    },
    {
      path: '/new',
      name: 'new',
      component: IndexConfig
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: IndexConfig
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      children: [
        {
          path: '/category/level2',
          name: 'level2',
          component: Category,
        },
        {
          path: '/category/level3',
          name: 'level3',
          component: Category,
        }
      ]
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }, {
      path: '/order_detail',
      name: 'order_detail',
      component: OrderDetail
    },
    {
      path: '/guest',
      name: 'guest',
      component: Guest
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    }
  ]
})

export default router