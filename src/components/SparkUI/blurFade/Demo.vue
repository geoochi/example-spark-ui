<script setup lang="ts">
import BlurFade from './BlurFade.vue'
</script>

<template>
  <div class="flex flex-col space-y-2">
    <BlurFade in-view :delay="250">
      <span
        class="leading-1 text-[45px] font-bold tracking-tighter dark:text-white"
      >
        Hello World 👋
      </span>
    </BlurFade>
    <BlurFade in-view :delay="350 * 2">
      <span class="text-[20px] font-[500] tracking-tighter dark:text-white">
        Nice to meet you ✨
      </span>
    </BlurFade>
  </div>
</template>
