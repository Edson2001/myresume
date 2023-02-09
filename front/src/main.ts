import { createApp } from 'vue'
import './assets/scss/App.scss'
import App from './App.vue'
import route from './router'
import Contianer from "./components/Container.vue"
import InputType from "./components/InputType.vue"


const app = createApp(App)
app.use(route)
app.component('container', Contianer)
app.component('InputType', InputType)
app.mount('#app')