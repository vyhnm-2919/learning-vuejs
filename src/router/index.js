import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/Welcome')
  },
  {
    path: '/about',
    component: () => import('../pages/About')
  },
  {
    path: '/done',
    component: () => import('../components/StatusBar')
  },
  {
    path: '/todos',
    component: () => import('../components/Todos')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
