<template>
  <!-- Remove mx-auto to allow full-width, or keep it for centered layout -->
  <div class="flex h-screen">
    <!-- Added h-screen for full height -->
    <!-- Sidebar navigation -->
    <nav class="w-64 bg-gray-50 p-4 border-r">
      <ul class="flex flex-col gap-2">
        <li v-for="route in routes" :key="route.path">
          <RouterLink
            :to="route.path"
            class="block px-4 py-2 rounded transition-color hover:bg-gray-100"
            exact-active-class="bg-blue-500 text-white hover:bg-blue-600"
          >
            {{ route.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Main content -->
    <main class="flex-1 p-4">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { path: "/", name: "Home" },
        { path: "/animatedBeam", name: "animatedBeam" },
        { path: "/animatedGradientText", name: "animatedGradientText" },
        { path: "/animatedList", name: "animatedList" },
        { path: "/animatedShinyText", name: "animatedShinyText" },
        { path: "/avatarCircle", name: "avatarCircle" },
        { path: "/bento", name: "bento" },
        { path: "/blurFade", name: "blurFade" },
        { path: "/blurIn", name: "blurIn" },
        { path: "/dotPattern", name: "dotPattern" },
        { path: "/globe", name: "globe" },
        { path: "/gradualSpacing", name: "gradualSpacing" },
        { path: "/letterUp", name: "letterUp" },
        { path: "/marquee", name: "marquee" },
        { path: "/marquee3D", name: "marquee3D" },
      ],
    };
  },
};
</script>
