import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('../views/HomeView.vue')
    // }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta?.isNotLogin) {
    if (Cookies.get('access_token')) {
      location.href = '/'
      return
    }
    next()
    return
  }

  if (!Cookies.get('access_token')) {
    router.push({ name: 'LoginPage' })
    Cookies.remove('access_token')
    location.href = '/login'
  }
  next()
})

export default router
