<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { cn } from '@/lib/utils'
import AnimatedGradientText from './animatedGradientText.vue'
</script>

<template>
  <AnimatedGradientText>
    🎉
    <hr class="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
    <span
      :class="
        cn(
          `animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
        )
      "
    >
      Introducing Spark UI
    </span>
    <Icon
      icon="ic:sharp-keyboard-arrow-right"
      class="ml-1 size-3 h-4 w-4 text-black transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 dark:text-white"
    />
  </AnimatedGradientText>
</template>

<style>
.animate-gradient {
  background-size: var(--bg-size);
  animation: gradientAnimation 8s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: var(--bg-size) 0;
  }

  50% {
    background-position: 0 0;
  }

  100% {
    background-position: var(--bg-size) 0;
  }
}
</style>
