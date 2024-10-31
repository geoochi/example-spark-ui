// src/views/Home.vue
<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Home Page</h1>
    <p>Welcome to the home page!</p>
    <button 
      @click="goToPage1" 
      class="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
    >
      Go to Page 1
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToPage1() {
      // Programmatic navigation
      this.$router.push('/page1')
      
      // Alternative ways to navigate:
      // this.$router.push({ name: 'Page1' })
      // this.$router.push({ path: '/page1' })
    }
  }
}
</script>