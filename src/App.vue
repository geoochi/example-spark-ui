// src/App.vue
<template>
  <div class="container mx-auto p-4">
    <nav class="mb-8">
      <RouterLink 
        to="/" 
        class="mr-4 px-4 py-2 rounded hover:bg-gray-100"
        active-class="bg-blue-500 text-white"
      >
        Home
      </RouterLink>
      <RouterLink 
        to="/page1" 
        class="mr-4 px-4 py-2 rounded hover:bg-gray-100"
        active-class="bg-blue-500 text-white"
      >
        Page 1
      </RouterLink>
      <RouterLink 
        to="/page2" 
        class="mr-4 px-4 py-2 rounded hover:bg-gray-100"
        active-class="bg-blue-500 text-white"
      >
        Page 2
      </RouterLink>
    </nav>

    <!-- Router outlet where page components will be rendered -->
    <RouterView></RouterView>
  </div>
</template>
