import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YingXiong from '../views/YingXiong.vue'
import XingXiu from '../views/XingXiu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },{
    path: '/yingXiong',
    name: 'yingXiong',
    component: YingXiong
  },{
    path: '/xingXiu',
    name: 'xingXiu',
    component: XingXiu
  },
  {
    path: '/wangzhe',
    name: 'wangzhe',
    component: () => import("../views/WangZhe.vue")
  },
  {
    path: '/juedi',
    name: 'juedi',
    component: () => import("../views/JueDi.vue")
  },

  
]

const router = new VueRouter({
  routes
})

export default router
