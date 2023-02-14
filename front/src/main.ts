import { createApp } from 'vue'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import './assets/scss/App.scss'
import App from './App.vue'
import route from './router'
import Contianer from "./components/Container.vue"
import InputType from "./components/InputType.vue"
import PrimeVue from 'primevue/config';

const app = createApp(App)
app.use(route)
app.use(PrimeVue)
app.component('container', Contianer)
app.component('InputType', InputType)
app.mount('#app')