<script setup lang="ts">
import SkewedInfiniteScroll from './SkewedInfiniteScroll.vue'

const items = [
  { id: '1', text: 'Spark UI' },
  { id: '2', text: 'Magic UI' },
  { id: '3', text: 'Spark UI' },
  { id: '4', text: 'Magic UI' },
  { id: '5', text: 'Spark UI' },
  { id: '6', text: 'Magic UI' },
  {
    id: '7',
    text: 'Spark UI',
  },
  {
    id: '8',
    text: 'Magic UI',
  },
]
</script>

<template>
  <SkewedInfiniteScroll :items="items" />
</template>
