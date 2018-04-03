import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Loupan from './views/Loupan.vue'

import Dongtai from './views/Dongtai.vue'
import We from './views/We.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/loupan/:fenlei',
      name: 'loupan',
      component:Loupan
    },
    {
      path: '/dongtai',
      name: 'dongtai',
      component: Dongtai
    },
    {
      path: '/we',
      name: 'we',
      component: We
    }
  ]
})
