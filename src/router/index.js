import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/identity',
      name: 'identity',
      component: () => import('../views/RegisterIdentityView.vue')
    },
    {
      path: '/return',
      name: 'return',
      component: () => import('../views/ReturnView.vue')
    },
    {
      path: '/mainmenu',
      name: 'mainmenu',
      component: () => import('../views/MainMenuView.vue')
    }
  ]
})

export default router
