import Home from '@/views/Home.vue'
import Project from '@/views/Project.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/project/:id', name: 'project', component: Project, props: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
