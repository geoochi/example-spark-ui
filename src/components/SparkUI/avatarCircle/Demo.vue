<script setup lang="ts">
import AvatarCircles from './AvatarCircles.vue'

const avatarUrls = [
  'https://github.com/selemondev.png',
  'https://avatars.githubusercontent.com/u/16860528',
  'https://github.com/atinux.png',
  'https://github.com/danielroe.png',
]
</script>

<template>
  <div class="grid min-h-screen w-full place-items-center">
    <AvatarCircles :num-people="99" :avatar-urls="avatarUrls" />
  </div>
</template>
