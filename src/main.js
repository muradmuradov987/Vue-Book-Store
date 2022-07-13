import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import scss from './assets/scss/style.scss'
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import customswiper from './assets/js/customswiper.js'



createApp(App).use(store).use(router).use(scss).use(customswiper).mount('#app')


 