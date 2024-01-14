import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import loading from '@/plugins/loading/index.js'
import Carousel3d from 'vue3-carousel-3d'
import 'vant/lib/index.css'

import 'vue3-carousel-3d/dist/index.css'

if (process.env.NODE_ENV !== 'production') {
  console.log('开发环境')
  window.baseurl = ''
} else {
  console.log('生产环境')
  window.baseurl = '/h5/jf2020'
}

const app = createApp(App)
app.config.globalProperties.$loading = loading
app.use(store).use(Carousel3d)

const params = new URL(window.location.href).searchParams
const [openid, headimgurl, nickname, userphone, sign] = [
  params.get('openid'),
  params.get('headimgurl'),
  params.get('nickname'),
  params.get('userphone'),
  params.get('sign')
]
const userInfo = { openid, headimgurl, nickname, userphone, sign }
store.commit('changeUserInfo', userInfo)
console.log(store.state.userInfo)

app.mount('#app')
