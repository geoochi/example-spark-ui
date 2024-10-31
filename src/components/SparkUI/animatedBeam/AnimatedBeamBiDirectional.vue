<script setup lang="ts">
import { ref } from 'vue'
import Nuxt from '@/components/icons/Nuxt.vue'
import Vue from '@/components/icons/Vue.vue'
import AnimatedBeam from '@/components/SparkUI/animatedBeam/AnimatedBeam.vue'
import Circle from '@/components/SparkUI/animatedBeam/Circle.vue'

const containerRef = ref<HTMLDivElement>()
const div1Ref = ref()
const div2Ref = ref()
</script>

<template>
  <div
    ref="containerRef"
    class="relative flex w-[300px] items-center justify-center overflow-hidden rounded-lg border px-4 md:w-[500px] md:p-0"
  >
    <div class="flex size-full flex-col items-stretch justify-between gap-10">
      <div class="flex flex-row justify-between">
        <Circle ref="div1Ref">
          <Vue />
        </Circle>
        <Circle ref="div2Ref">
          <Nuxt />
        </Circle>
      </div>
    </div>
    <AnimatedBeam
      :container-ref="containerRef"
      :from-ref="div1Ref"
      :to-ref="div2Ref"
      :start-y-offset="10"
      :end-y-offset="10"
      :curvature="-20"
    />
    <AnimatedBeam
      reverse
      :container-ref="containerRef"
      :from-ref="div1Ref"
      :to-ref="div2Ref"
      :start-y-offset="-10"
      :end-y-offset="-10"
      :curvature="20"
    />
  </div>
</template>
