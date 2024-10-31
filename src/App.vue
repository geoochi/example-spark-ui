<template>
  <div class="container mx-auto p-4">
    <nav class="mb-8">
      <ul class="flex flex-wrap gap-2">
        <li v-for="route in routes" :key="route.path">
          <RouterLink
            :to="route.path"
            class="mr-4 px-4 py-2 rounded transition-color hover:bg-gray-100"
            exact-active-class="bg-blue-500 text-white hover:bg-blue-600"
          >
            {{ route.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>

    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { path: '/', name: 'Home' },
        { path: '/AnimatedBeamDemo', name: 'AnimatedBeamDemo' },
        { path: '/AnimatedGradientTextDemo', name: 'AnimatedGradientTextDemo' },
      ],
    }
  },
}
</script>
