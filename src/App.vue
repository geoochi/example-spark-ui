<template>
  <div class="flex h-screen">
    <!-- Sidebar navigation with fixed header and scrollable content -->
    <nav class="flex w-64 flex-col border-r bg-gray-50">
      <!-- Fixed Header -->
      <RouterLink to="/spark-ui-examples">
        <div class="border-b p-4">
          <h1 class="text-xl font-bold text-gray-800">Spark UI examples</h1>
        </div>
      </RouterLink>

      <!-- Scrollable Navigation -->
      <div class="flex-1 overflow-y-auto p-4">
        <ul class="flex flex-col gap-2">
          <li v-for="route in routes" :key="route.path">
            <RouterLink
              :to="route.path"
              class="block rounded px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
              exact-active-class="bg-blue-500 text-white hover:bg-blue-600"
            >
              {{ route.name }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Optional: Fixed Footer/Profile Section -->
      <!-- <div class="p-4 border-t">
        <div class="flex items-center px-4 py-2">
          <span class="text-sm text-gray-700">User Profile</span>
        </div>
      </div> -->
    </nav>

    <!-- Main content -->
    <main class="flex-1 overflow-auto p-4">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { path: '/spark-ui-examples/animatedBeam', name: 'animatedBeam' },
        { path: '/spark-ui-examples/animatedGradientText', name: 'animatedGradientText' },
        { path: '/spark-ui-examples/animatedList', name: 'animatedList' },
        { path: '/spark-ui-examples/animatedShinyText', name: 'animatedShinyText' },
        { path: '/spark-ui-examples/avatarCircle', name: 'avatarCircle' },
        { path: '/spark-ui-examples/bento', name: 'bento' },
        { path: '/spark-ui-examples/blurFade', name: 'blurFade' },
        { path: '/spark-ui-examples/blurIn', name: 'blurIn' },
        { path: '/spark-ui-examples/dotPattern', name: 'dotPattern' },
        { path: '/spark-ui-examples/globe', name: 'globe' },
        { path: '/spark-ui-examples/gradualSpacing', name: 'gradualSpacing' },
        { path: '/spark-ui-examples/letterUp', name: 'letterUp' },
        { path: '/spark-ui-examples/marquee', name: 'marquee' },
        { path: '/spark-ui-examples/marquee3D', name: 'marquee3D' },
        { path: '/spark-ui-examples/marqueeVertical', name: 'marqueeVertical' },
        { path: '/spark-ui-examples/meteors', name: 'meteors' },
        { path: '/spark-ui-examples/orbitingCircles', name: 'orbitingCircles' },
        { path: '/spark-ui-examples/particles', name: 'particles' },
        { path: '/spark-ui-examples/retroGrid', name: 'retroGrid' },
        { path: '/spark-ui-examples/ripple', name: 'ripple' },
        { path: '/spark-ui-examples/skewedInfiniteScroll', name: 'skewedInfiniteScroll' },
        { path: '/spark-ui-examples/typingAnimation', name: 'typingAnimation' },
      ],
    }
  },
}
</script>
