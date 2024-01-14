<template>
  <div class="zhu-li-page center-bg" :style="`background-image: url(${data.bg.bg1})`">
    <div class="logo center-bg" :style="`background-image: url(${data.other.logo})`"></div>
    <div class="long-txt center-bg" :style="`background-image: url(${data.other.long_txt})`"></div>

    <div class="long center-bg" :style="`background-image: url(${data.other.long})`"></div>
    <div class="yun center-bg" :style="`background-image: url(${data.other.yun_ceng})`"></div>

    <div class="loading-box center-bg" :style="`background-image: url(${data.bg.bg2})`">
      <div class="loading-title center-bg" :style="`background-image: url(${data.other.hua_long_red})`"></div>
      <div class="btns">
        <button class="wei-ta center-bg" :style="`background-image: url(${data.btn.weita})`" @click="toZhuli"></button>
        <button class="me-too center-bg" :style="`background-image: url(${data.btn.metoo})`" @click="toStart"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import data from '@/js/data'
  import store from '@/store'
  // import http from '../../js/http'
  import { useRoute } from 'vue-router'
  const route = useRoute()

  const toZhuli = () => {
    console.log(route)
    // http.post('getLog', {id: })
  }
  const toStart = () => {
    store.commit('changeShowType', 'introduce')
    store.commit('changeIsLog', false)
  }
</script>

<style lang="less" scoped>
  .zhu-li-page {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: @main-bg;
    .logo {
      position: absolute;
      width: 76vw;
      height: 20vw;
      top: 7vw;
      left: 12vw;
    }
    .long-txt {
      position: absolute;
      width: 76vw;
      height: 16vw;
      top: 33vw;
      left: 12vw;
    }
    .long {
      position: absolute;
      width: 72vw;
      height: 95vw;
      bottom: 0vw;
      left: 13vw;
      z-index: 2;
    }
    .yun {
      position: absolute;
      width: 100vw;
      height: 59vw;
      bottom: 0;
      left: 0;
      z-index: 3;
    }
    .loading-box {
      position: absolute;
      width: 76vw;
      height: 100vw;
      top: 46.5vw;
      left: 12vw;
      .loading-title {
        position: absolute;
        width: 67vw;
        height: 20.5vw;
        top: 5vw;
        left: 4.5vw;
      }
      .loading-bar {
        position: absolute;
        top: -8vw;
      }
    }
    .btns {
      position: absolute;
      z-index: 5;
      top: 30vw;
      left: 18vw;
      display: flex;
      flex-direction: column;
      button {
        width: 40vw;
        height: 10vw;
        border: none;
        background-color: transparent;
      }
      .me-too {
        margin-top: 5vw;
      }
    }
  }
</style>
