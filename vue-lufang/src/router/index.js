import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/youxuan',
    name: 'youxuan',
    component: () => import('../views/youxuan.vue')
  },
  {
    path: '/richang',
    name: 'richang',
    component: () => import('../views/richang.vue')
  },
  {
    path: '/mengqu',
    name: 'mengqu',
    component: () => import('../views/mengqu.vue')
  },
  {
    path: '/yuanchuang',
    name: 'yuanchuang',
    component: () => import('../views/yuanchuang.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
