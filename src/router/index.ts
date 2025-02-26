import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import animatedBeam from '@/components/SparkUI/animatedBeam/Demo.vue'
import animatedGradientText from '@/components/SparkUI/animatedGradientText/Demo.vue'
import animatedList from '@/components/SparkUI/animatedList/Demo.vue'
import animatedShinyText from '@/components/SparkUI/animatedShinyText/Demo.vue'
import avatarCircle from '@/components/SparkUI/avatarCircle/Demo.vue'
import bento from '@/components/SparkUI/bento/Demo.vue'
import blurFade from '@/components/SparkUI/blurFade/Demo.vue'
import blurIn from '@/components/SparkUI/blurIn/Demo.vue'
import dotPattern from '@/components/SparkUI/dotPattern/Demo.vue'
import globe from '@/components/SparkUI/globe/Demo.vue'
import gradualSpacing from '@/components/SparkUI/gradualSpacing/Demo.vue'
import letterUp from '@/components/SparkUI/letterUp/Demo.vue'
import marquee from '@/components/SparkUI/marquee/Demo.vue'
import marquee3D from '@/components/SparkUI/marquee/3DDemo.vue'
import marqueeVertical from '@/components/SparkUI/marquee/VerticalDemo.vue'
import meteors from '@/components/SparkUI/meteors/Demo.vue'
import orbitingCircles from '@/components/SparkUI/orbitingCircles/Demo.vue'
import particles from '@/components/SparkUI/particles/Demo.vue'
import retroGrid from '@/components/SparkUI/retroGrid/Demo.vue'
import ripple from '@/components/SparkUI/ripple/Demo.vue'
import skewedInfiniteScroll from '@/components/SparkUI/skewedInfiniteScroll/Demo.vue'
import typingAnimation from '@/components/SparkUI/typingAnimation/Demo.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/animatedBeam', name: 'animatedBeam', component: animatedBeam },
  {
    path: '/animatedGradientText',
    name: 'animatedGradientText',
    component: animatedGradientText,
  },
  { path: '/animatedList', name: 'animatedList', component: animatedList },
  {
    path: '/animatedShinyText',
    name: 'animatedShinyText',
    component: animatedShinyText,
  },
  { path: '/avatarCircle', name: 'avatarCircle', component: avatarCircle },
  { path: '/bento', name: 'bento', component: bento },
  { path: '/blurFade', name: 'blurFade', component: blurFade },
  { path: '/blurIn', name: 'blurIn', component: blurIn },
  { path: '/dotPattern', name: 'dotPattern', component: dotPattern },
  { path: '/globe', name: 'globe', component: globe },
  {
    path: '/gradualSpacing',
    name: 'gradualSpacing',
    component: gradualSpacing,
  },
  { path: '/letterUp', name: 'letterUp', component: letterUp },
  { path: '/marquee', name: 'marquee', component: marquee },
  { path: '/marquee3D', name: 'marquee3D', component: marquee3D },
  {
    path: '/marqueeVertical',
    name: 'marqueeVertical',
    component: marqueeVertical,
  },
  {
    path: '/meteors',
    name: 'meteors',
    component: meteors,
  },
  {
    path: '/orbitingCircles',
    name: 'orbitingCircles',
    component: orbitingCircles,
  },
  {
    path: '/particles',
    name: 'particles',
    component: particles,
  },
  {
    path: '/retroGrid',
    name: 'retroGrid',
    component: retroGrid,
  },
  {
    path: '/ripple',
    name: 'ripple',
    component: ripple,
  },
  {
    path: '/skewedInfiniteScroll',
    name: 'skewedInfiniteScroll',
    component: skewedInfiniteScroll,
  },
  {
    path: '/typingAnimation',
    name: 'typingAnimation',
    component: typingAnimation,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
