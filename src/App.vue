<template>
  <div class="flex h-screen">
    <!-- Sidebar navigation with fixed header and scrollable content -->
    <nav class="flex w-64 flex-col border-r bg-gray-50">
      <!-- Fixed Header -->
      <RouterLink to="/spark-ui-examples">
        <div class="border-b p-4">
          <h1 class="text-xl font-bold text-gray-800">Spark UI Examples</h1>
        </div>
      </RouterLink>

      <!-- Scrollable Navigation -->
      <div class="flex-1 overflow-y-auto p-4">
        <ul class="flex flex-col gap-2">
          <li v-for="route in routes" :key="route.path">
            <RouterLink
              :to="route.path"
              class="block rounded px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
              exact-active-class="bg-blue-500 text-white hover:bg-blue-600 hover:text-black"
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
        { path: '/animatedBeam', name: 'animatedBeam' },
        { path: '/animatedGradientText', name: 'animatedGradientText' },
        { path: '/animatedList', name: 'animatedList' },
        { path: '/animatedShinyText', name: 'animatedShinyText' },
        { path: '/avatarCircle', name: 'avatarCircle' },
        { path: '/bento', name: 'bento' },
        { path: '/blurFade', name: 'blurFade' },
        { path: '/blurIn', name: 'blurIn' },
        { path: '/dotPattern', name: 'dotPattern' },
        { path: '/globe', name: 'globe' },
        { path: '/gradualSpacing', name: 'gradualSpacing' },
        { path: '/letterUp', name: 'letterUp' },
        { path: '/marquee', name: 'marquee' },
        { path: '/marquee3D', name: 'marquee3D' },
        { path: '/marqueeVertical', name: 'marqueeVertical' },
        { path: '/meteors', name: 'meteors' },
        { path: '/orbitingCircles', name: 'orbitingCircles' },
        { path: '/particles', name: 'particles' },
        { path: '/retroGrid', name: 'retroGrid' },
        { path: '/ripple', name: 'ripple' },
        { path: '/skewedInfiniteScroll', name: 'skewedInfiniteScroll' },
        { path: '/typingAnimation', name: 'typingAnimation' },
      ],
    }
  },
}
</script>
