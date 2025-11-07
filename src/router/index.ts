import Attributions from '@/views/Attributions.vue'
import Contact from '@/views/Contact.vue'
import Home from '@/views/Home.vue'
import Project from '@/views/Project.vue'
import Projects from '@/views/Projects.vue'
import Services from '@/views/Services.vue'
import Showcase from '@/views/Showcase.vue'
import WhoAmI from '@/views/WhoAmI.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const blogModules = (import.meta as any).glob('../blog/*.md', { eager: true })

const blogRoutes = Object.entries(blogModules).map(([path, mod]: [string, any]) => {
  // create slug: filename without extension
  const slug = path.split('/').pop().replace(/\.md$/, '')
  console.log(`Registered blog post: ${slug}`)
  return {
    path: `/xsfs/${slug}`,
    name: `${slug}`,
    component: (mod as any).default, // a Vue component compiled from markdown
    meta: (mod as any).frontmatter || {}
  }
})

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/whoami', name: 'whoami', component: WhoAmI },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/services', name: 'services', component: Services },
  { path: '/showcase', name: 'showcase', component: Showcase },
  { path: '/attributions', name: 'attributions', component: Attributions },
  { path: '/project/:id', name: 'project', component: Project, props: true },
  { path: '/xsfs', component: () => import('@/views/XSFS.vue') },
  ...blogRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
