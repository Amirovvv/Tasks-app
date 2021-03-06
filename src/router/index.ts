import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Main',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router