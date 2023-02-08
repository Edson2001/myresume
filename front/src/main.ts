import { createApp } from 'vue'
import './assets/scss/App.scss'
import App from './App.vue'
import naive from 'naive-ui'
import route from './router'

const app = createApp(App)
app.use(route)
app.use(naive)
app.mount('#app')
