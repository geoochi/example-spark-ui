import { createRouter, createWebHistory } from 'vue-router'
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
  { path: '/spark-ui-examples/', name: 'Home', component: Home },
  { path: '/spark-ui-examples/animatedBeam', name: 'animatedBeam', component: animatedBeam },
  {
    path: '/spark-ui-examples/animatedGradientText',
    name: 'animatedGradientText',
    component: animatedGradientText,
  },
  { path: '/spark-ui-examples/animatedList', name: 'animatedList', component: animatedList },
  {
    path: '/spark-ui-examples/animatedShinyText',
    name: 'animatedShinyText',
    component: animatedShinyText,
  },
  { path: '/spark-ui-examples/avatarCircle', name: 'avatarCircle', component: avatarCircle },
  { path: '/spark-ui-examples/bento', name: 'bento', component: bento },
  { path: '/spark-ui-examples/blurFade', name: 'blurFade', component: blurFade },
  { path: '/spark-ui-examples/blurIn', name: 'blurIn', component: blurIn },
  { path: '/spark-ui-examples/dotPattern', name: 'dotPattern', component: dotPattern },
  { path: '/spark-ui-examples/globe', name: 'globe', component: globe },
  {
    path: '/spark-ui-examples/gradualSpacing',
    name: 'gradualSpacing',
    component: gradualSpacing,
  },
  { path: '/spark-ui-examples/letterUp', name: 'letterUp', component: letterUp },
  { path: '/spark-ui-examples/marquee', name: 'marquee', component: marquee },
  { path: '/spark-ui-examples/marquee3D', name: 'marquee3D', component: marquee3D },
  {
    path: '/spark-ui-examples/marqueeVertical',
    name: 'marqueeVertical',
    component: marqueeVertical,
  },
  {
    path: '/spark-ui-examples/meteors',
    name: 'meteors',
    component: meteors,
  },
  {
    path: '/spark-ui-examples/orbitingCircles',
    name: 'orbitingCircles',
    component: orbitingCircles,
  },
  {
    path: '/spark-ui-examples/particles',
    name: 'particles',
    component: particles,
  },
  {
    path: '/spark-ui-examples/retroGrid',
    name: 'retroGrid',
    component: retroGrid,
  },
  {
    path: '/spark-ui-examples/ripple',
    name: 'ripple',
    component: ripple,
  },
  {
    path: '/spark-ui-examples/skewedInfiniteScroll',
    name: 'skewedInfiniteScroll',
    component: skewedInfiniteScroll,
  },
  {
    path: '/spark-ui-examples/typingAnimation',
    name: 'typingAnimation',
    component: typingAnimation,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
