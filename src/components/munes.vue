<template>
  <div class="menus center-bg" :style="`background-image: url(${data.other.menuborder})`">
    <div class="menu" @click="clickMenu('guize')">
      <div class="img center-bg" :style="`background-image: url(${data.other.youxiguize})`"></div>
    </div>
    <div class="menu" @click="clickMenu('bizhi')">
      <div class="img center-bg" :style="`background-image: url(${data.other.wodebizhi})`"></div>
    </div>
    <div class="menu" @click="clickMenu('zhuli')">
      <div class="img img3 center-bg" :style="`background-image: url(${data.other.haoyouzhuli})`"></div>
    </div>
  </div>
</template>

<script setup>
  import data from '@/js/data'

  const clickMenu = (p) => {
    console.log(p)
  }
</script>

<style lang="less">
  .menus {
    margin-top: 4vw;
    width: 100vw;
    height: 10.5vw;
    background-color: #7e0202;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu {
      width: 33.3vw;
      display: flex;
      align-items: center;
      justify-content: center;
      .img {
        width: 20vw;
        height: 4.5vw;
      }
      .img3 {
        width: 27vw;
      }
    }
  }
</style>
