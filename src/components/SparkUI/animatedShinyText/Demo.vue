<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { cn } from '@/lib/utils'
import AnimatedShinyText from './AnimatedShinyText.vue'
</script>

<template>
  <div class="grid min-h-screen w-full place-items-center">
    <div class="z-10 flex min-h-[16rem] items-center justify-center">
      <div
        :class="
          cn(
            'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
          )
        "
      >
        <AnimatedShinyText
          class="inline-flex items-center justify-center px-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
        >
          <span>✨ Introducing Spark UI</span>
          <Icon
            icon="ic:sharp-keyboard-arrow-right"
            class="ml-1 h-5 w-5 text-neutral-400 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
          />
        </AnimatedShinyText>
      </div>
    </div>
  </div>
</template>
