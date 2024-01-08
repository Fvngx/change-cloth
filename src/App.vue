<template>
  <audio id="myAudio" :src="'/assets/music/bgm.mp3?v=31'" autoplay muted loop="loop"></audio>
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
        // document.addEventListener('DOMContentLoaded', function () {
        //   function audioAutoPlay() {
        //     console.log(1111)
        //     document.getElementById('myAudio').play()
        //     document.addEventListener(
        //       'WeixinJSBridgeReady',
        //       function () {
        //         document.getElementById('myAudio').play()
        //       },
        //       false
        //     )
        //   }
        //   audioAutoPlay()
        // })
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
</style>
