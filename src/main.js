// src/main.js
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import './asset/css/tailwind.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
