<template>
  <audio id="myAudio" :src="'/assets/music/bgm.mp3?v=1'" preload="auto" loop="loop"></audio>
  <HomeIndex />
</template>

<script>
  import { onMounted } from '@vue/runtime-core'
  import HomeIndex from './views/index.vue'

  export default {
    name: 'App',
    components: {
      HomeIndex
    },
    setup() {
      onMounted(() => {
        // function audioAutoPlay() {
        //   document.getElementById('myAudio').play()
        // }
        // document.addEventListener('touchstart', audioAutoPlay, false)
        // document.addEventListener('WeixinJSBridgeReady', audioAutoPlay, false)
        // let audio = document.getElementById('myAudio')
        // audio.onended = function () {
        //   audio.load()
        //   audio.play()
        // }
      })
    }
  }
</script>

<style lang="less">
  body,
  html {
    margin: 0;
    height: 100%;
    overflow: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: @font-color;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: @main-bg;
  }
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b2170d;
    border-radius: 2px;
  }
</style>
