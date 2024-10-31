import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AnimatedBeamDemo from '@/components/animatedBeam/Demo.vue'
import AnimatedGradientTextDemo from '@/components/animatedGradientText/Demo.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
