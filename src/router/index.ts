import Attributions from '@/views/Attributions.vue'
import Contact from '@/views/Contact.vue'
import Home from '@/views/Home.vue'
import Project from '@/views/Project.vue'
import Projects from '@/views/Projects.vue'
import Showcase from '@/views/Showcase.vue'
import Socials from '@/views/Socials.vue'
import WhoAmI from '@/views/WhoAmI.vue'
import XSFS from '@/views/XSFS.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/whoami', name: 'whoami', component: WhoAmI },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/socials', name: 'socials', component: Socials },
  { path: '/showcase', name: 'showcase', component: Showcase },
  { path: '/xsfs', name: 'xsfs', component: XSFS },
  { path: '/attributions', name: 'attributions', component: Attributions },
  { path: '/project/:id', name: 'project', component: Project, props: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
