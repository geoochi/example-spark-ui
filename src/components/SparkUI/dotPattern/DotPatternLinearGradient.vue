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
      :width="20"
      :height="20"
      :cx="1"
      :cy="1"
      :cr="1"
      :class="
        cn(
          '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]'
        )
      "
    />
  </div>
</template>
