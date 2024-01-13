import axios from 'axios'

const BASE_URL = 'https://sws.beibeixy.com/h5/gcw/home/Api/apiHl/'

axios.defaults.baseURL = BASE_URL

const http = axios.create({
  timeout: 20000,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

const post = http.post
http.post = (url, params, config) => {
  return post(url, params, config).then((data) => {
    return Promise.resolve(data.data ? data.data : false)
  })
}

// let loading = false

http.interceptors.request.use(
  (config) => {
    // let info = window.localStorage.getItem('info')
    // if (info) {
    //   config.headers.token = `${JSON.parse(info).token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default http
