import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AnimatedBeam from '@/components/animatedBeam/Demo.vue'
import AnimatedGradientText from '@/components/animatedGradientText/Demo.vue'
import AnimatedList from '@/components/animatedList/Demo.vue'
import AnimatedShinyText from '@/components/animatedShinyText/Demo.vue'
import AvatarCircle from '@/components/avatarCircle/Demo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/AnimatedBeam',
    name: 'AnimatedBeam',
    component: AnimatedBeam,
  },
  {
    path: '/AnimatedGradientText',
    name: 'AnimatedGradientText',
    component: AnimatedGradientText,
  },
  {
    path: '/AnimatedList',
    name: 'AnimatedList',
    component: AnimatedList,
  },
  {
    path: '/AnimatedShinyText',
    name: 'AnimatedShinyText',
    component: AnimatedShinyText,
  },
  {
    path: '/AvatarCircle',
    name: 'AvatarCircle',
    component: AvatarCircle,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
