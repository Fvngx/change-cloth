<template>
  <div class="introduce center-bg" :style="`background-image: url(${data.bg.bg1})`">
    <div class="top">
      <div class="logo center-bg" style="background-image: url('/assets/img/other/logo.png')"></div>
      <div class="hua-long center-bg" style="background-image: url('/assets/img/other/hua_long_jin.png')"></div>
    </div>
    <div class="center">
      <div class="item center-bg" v-for="item in list" :key="item.id" :style="`background-image: url(${item.img})`">
        <div class="btn center-bg" :style="`background-image: url(${data.btn.xuanze})`" @click="toSquare(item)"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="fenxiang center-bg" :style="`background-image: url(${data.btn.fenxiang})`" @click="toShare"></div>
      <div class="txt">今日已分享1次</div>
      <munes />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import data from '@/js/data'
  // import store from '@/store'
  import munes from '../../components/munes.vue'
  const list = ref([
    {
      id: '1',
      name: '云起东方',
      img: data.other.jinmao
    },
    {
      id: '2',
      name: '五缘海悦',
      img: data.other.haiyue
    },
    {
      id: '3',
      name: '建发·缦玥长滩',
      img: data.other.manyue
    },
    {
      id: '4',
      name: '建发招商璟云',
      img: data.other.jinyun
    },
    {
      id: '5',
      name: '建发·叁里云庐',
      img: data.other.yunlu
    },
    {
      id: '6',
      name: '建发·书香泊月',
      img: data.other.boyue
    },
    {
      id: '7',
      name: '建发·文澜春晓',
      img: data.other.wenlan
    },
    {
      id: '8',
      name: '湖畔润璟',
      img: data.other.runjing
    }
  ])

  const toSquare = (item) => {
    console.log(item)
  }

  const toShare = () => {
    console.log('share')
  }
</script>

<style lang="less">
  .introduce {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: @main-bg;
    display: flex;
    flex-direction: column;
    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .logo {
      // position: absolute;
      width: 76vw;
      height: 20vw;
      margin-top: 7vw;
    }
    .hua-long {
      // position: absolute;
      width: 66vw;
      height: 21.5vw;
      margin-top: 2vw;
    }
    .center {
      flex: 1;
      padding: 0 9vw;
      overflow-x: hidden;
      overflow-y: scroll;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      box-sizing: border-box;
      margin-top: 3.5vw;
      .item {
        position: relative;
        width: 37vw;
        height: 23.6vw;
        .btn {
          width: 22vw;
          height: 5vw;
          position: absolute;
          left: 7.5vw;
          bottom: -2vw;
        }
      }
      .item:nth-child(n + 3) {
        margin-top: 5vw;
      }
    }
    .bottom {
      display: flex;
      margin-top: 4vw;
      flex-direction: column;
      align-items: center;
      .fenxiang {
        width: 38vw;
        height: 8vw;
      }
      .txt {
        color: #7e0202;
        margin-top: 4vw;
        font-weight: bolder;
        font-size: 14px;
      }
    }
  }
</style>
