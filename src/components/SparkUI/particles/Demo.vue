<script setup lang="ts">
import HeroParticles from './Particles.vue'
import HeroBackground from './ParticlesBackground.vue'
</script>

<template>
  <div class="relative h-[400px] w-[300px] md:w-[500px]">
    <HeroParticles :accelerate="true" class="absolute top-0" />
    <HeroBackground />
  </div>
</template>
