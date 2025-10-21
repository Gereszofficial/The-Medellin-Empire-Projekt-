import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Install from '../views/Install.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/install', name: 'Install', component: Install },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
