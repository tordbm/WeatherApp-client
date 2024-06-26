import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('@/views/Home.vue') },
    ],
  },
  {
    path: '/about',
    component: () => import('@/layouts/Default.vue'),
    children: [
      { path: '', name: 'About', component: () => import('@/views/About.vue') },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory('/WeatherApp-client/'),
  routes: routes,
})
