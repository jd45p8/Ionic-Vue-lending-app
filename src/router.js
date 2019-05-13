import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import Home from './views/Home.vue'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'      
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("./views/Login.vue")
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import("./views/UserDashboard.vue"),
      children: [
        {
          path: '/lending',
          name:'user-lending',
          component: () => import("./views/UserLending.vue")
        },
        {
          path: '/settings',
          name: 'user-settings',
          component: () => import("./views/UserSettings.vue")
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
