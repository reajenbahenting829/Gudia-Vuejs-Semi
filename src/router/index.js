import { createRouter, createWebHistory } from 'vue-router'
import eggplantView from '../views/eggplantView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/eggplant',
      name: 'eggplant',
      component: eggplantView
    },
    {
      path: '/kalabasa',
      name: 'kalabsa',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/kalabasaView.vue')
    },
    {
      path: '/kingcrab',
      name: 'kingcrab',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/kingcrabView.vue')
    }
  ]
})

export default router
