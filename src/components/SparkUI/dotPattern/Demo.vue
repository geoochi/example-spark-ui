<script setup lang="ts">
import { cn } from '@/lib/utils'
import DotPattern from './DotPattern.vue'
</script>

<template>
  <div
    class="relative flex size-full h-[450px] w-[300px] items-center justify-center overflow-hidden md:w-[600px] lg:w-[850px]"
  >
    <p
      class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
    >
      Dot Pattern
    </p>
    <DotPattern
      :class="
        cn(
          '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
        )
      "
    />
  </div>
</template>
