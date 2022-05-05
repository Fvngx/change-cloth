import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import loading from '@/plugins/loading/index.js'

const app = createApp(App)
app.config.globalProperties.$loading = loading
app.use(store).mount('#app')
