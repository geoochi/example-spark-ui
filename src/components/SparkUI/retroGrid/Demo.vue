<script setup lang="ts">
import RetroGrid from './retroGrid.vue'
</script>

<template>
  <div
    class="bg-background relative flex h-[400px] w-[200px] flex-col items-center justify-center overflow-hidden rounded-lg border lg:w-[600px]"
  >
    <span
      class="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent"
    >
      Retro Grid
    </span>

    <RetroGrid />
  </div>
</template>
