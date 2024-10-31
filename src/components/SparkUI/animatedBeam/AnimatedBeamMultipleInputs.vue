<script setup lang="ts">
import { ref } from 'vue'
import Angular from '@/components/icons/Angular.vue'
import Astro from '@/components/icons/Astro.vue'
import Qwik from '@/components/icons/Qwik.vue'
import React from '@/components/icons/React.vue'
import Svelte from '@/components/icons/Svelte.vue'
import Vite from '@/components/icons/ViteIcon.vue'
import Vue from '@/components/icons/Vue.vue'
import AnimatedBeam from '@/components/SparkUI/animatedBeam/AnimatedBeam.vue'
import Circle from '@/components/SparkUI/animatedBeam/Circle.vue'

const containerRef = ref<HTMLDivElement>()
const div1Ref = ref()
const div2Ref = ref()
const div3Ref = ref()
const div4Ref = ref()
const div5Ref = ref()
const div6Ref = ref()
const div7Ref = ref()
</script>

<template>
  <div
    ref="containerRef"
    class="relative flex w-[300px] items-center justify-center overflow-hidden rounded-lg border px-4 md:w-[700px] md:p-0"
  >
    <div
      class="flex size-full max-w-lg flex-row items-stretch justify-between gap-10"
    >
      <div class="flex flex-col justify-center gap-2">
        <Circle ref="div1Ref">
          <React />
        </Circle>
        <Circle ref="div2Ref">
          <Svelte />
        </Circle>
        <Circle ref="div3Ref">
          <Astro />
        </Circle>
        <Circle ref="div4Ref">
          <Angular />
        </Circle>
        <Circle ref="div5Ref">
          <Qwik />
        </Circle>
      </div>
      <div class="flex flex-col justify-center">
        <Circle ref="div6Ref">
          <Vite />
        </Circle>
      </div>
      <div class="flex flex-col justify-center">
        <Circle ref="div7Ref">
          <Vue />
        </Circle>
      </div>
    </div>
    <AnimatedBeam
      :container-ref="containerRef"
      :from-ref="div1Ref"
      :to-ref="div6Ref"
    />
    <AnimatedBeam
      :container-ref="containerRef"
      :from-ref="div2Ref"
      :to-ref="div6Ref"
    />
    <AnimatedBeam
      :container-ref="containerRef"
      :from-ref="div3Ref"
      :to-ref="div6Ref"
    />
    <AnimatedBeam
      :container-ref="containerRef"
      :from-ref="div4Ref"
      :to-ref="div6Ref"
    />
    <AnimatedBeam
      :container-ref="containerRef"
      :from-ref="div5Ref"
      :to-ref="div6Ref"
    />
    <AnimatedBeam
      :container-ref="containerRef"
      :from-ref="div6Ref"
      :to-ref="div7Ref"
    />
  </div>
</template>
