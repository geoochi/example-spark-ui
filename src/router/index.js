import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AnimatedBeamDemo from '@/components/animatedBeam/Demo.vue'
import AnimatedGradientTextDemo from '@/components/animatedGradientText/Demo.vue'
import AnimatedListDemo from '@/components/animatedList/Demo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/AnimatedBeamDemo',
    name: 'AnimatedBeamDemo',
    component: AnimatedBeamDemo,
  },
  {
    path: '/AnimatedGradientTextDemo',
    name: 'AnimatedGradientTextDemo',
    component: AnimatedGradientTextDemo,
  },
  {
    path: '/AnimatedListDemo',
    name: 'AnimatedListDemo',
    component: AnimatedListDemo,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
