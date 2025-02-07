// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Perfil from '../pages/perfil.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'Perfil',
    component: Perfil
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
