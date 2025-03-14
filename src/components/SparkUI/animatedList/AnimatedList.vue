<script lang="ts" setup>
import { computed, onMounted, ref, useSlots } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  delay: {
    type: Number,
    default: 1000,
  },
})

const slots = useSlots()
const index = ref(0)
const slotsArray = ref<any>([])

onMounted(loadComponents)

const itemsToShow = computed(() => {
  return slotsArray.value.slice(0, index.value)
})

async function loadComponents() {
  slotsArray.value = slots.default ? slots.default()[0]?.children : []

  while (index.value < slotsArray.value.length) {
    index.value++
    await delay(props.delay)
  }
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getInitial(idx: number) {
  return idx === index.value - 1
    ? {
        scale: 0,
        opacity: 0,
      }
    : undefined
}
function getEnter(idx: number) {
  return idx === index.value - 1
    ? {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 250,
          damping: 40,
        },
      }
    : undefined
}

function getLeave() {
  return {
    scale: 0,
    opacity: 0,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 350,
      damping: 40,
    },
  }
}
</script>

<template>
  <div
    :class="
      cn(
        'h-[370px] w-[250px] overflow-auto rounded-lg md:w-[600px]',
        $props.class
      )
    "
  >
    <transition-group
      name="animated-beam"
      tag="div"
      class="flex flex-col-reverse items-center p-2"
      move-class="move"
    >
      <div
        v-for="(item, idx) in itemsToShow"
        :key="idx"
        v-motion
        :initial="getInitial(idx)"
        :enter="getEnter(idx)"
        :leave="getLeave()"
        :class="cn('mx-auto mb-4 w-full')"
      >
        <component :is="item" />
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.move {
  transition: transform 0.4s ease-out;
}
</style>
