<template>
  <div class="loading center-bg" style="background-image: url('/assets/img/bg/bg1.jpg')">
    <div class="logo center-bg" style="background-image: url('/assets/img/other/logo.png')"></div>
    <div class="long-txt center-bg" style="background-image: url('/assets/img/other/long_txt.png')"></div>

    <div class="long center-bg" style="background-image: url('/assets/img/other/long.png')"></div>
    <div class="yun center-bg" style="background-image: url('/assets/img/other/yun_ceng.png')"></div>

    <div class="loading-box center-bg" style="background-image: url('/assets/img/bg/bg2.png')">
      <div class="loading-title center-bg" style="background-image: url('/assets/img/other/hua_long_red.png')"></div>
      <div class="loading-bar fit flex-box flex flex-column flex-center">
        <div class="skill-bar">
          <div class="filled" :data-width="loadPercent + '%'" :style="`width:${loadPercent}%`">
            <div class="filed-circle"></div>
          </div>
        </div>
        <div class="load-title">
          {{ loadPercent }}%
          <!-- <dot>...</dot> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import data from '@/js/data'
  // import store from '@/store'

  const loadPercent = ref(5)
  const baseurl = ref('')
  let mytime = 0
  let loadNum = 0

  const setFullImg = () => {
    let list = JSON.parse(JSON.stringify(data))
    let picarr = []
    let href = ''

    let getArr = (obj) => {
      let img = []
      for (let key in obj) {
        img.push(setUrl(obj[key]))
      }
      return img
    }
    let setUrl = (url) => {
      let img = ''
      if (url.indexOf('http') > -1) {
        img = url
      } else {
        img = href + baseurl.value + url
      }
      return img
    }

    for (let key in list) {
      let obj = list[key]
      picarr = picarr.concat(getArr(obj))
    }
    getLoadImg(picarr)
  }

  const getLoadImg = (arr) => {
    let onloadarr = []
    // console.log(arr)

    let backFun = () => {
      loadNum += 1
      loadPercent.value = (loadNum / arr.length) * 100
      // console.log(i, url)
      // console.log(loadNum, arr.length, loadNum / arr.length, 1 / 2)
      if (loadNum === arr.length - 1) {
        // console.log('11111')

        mytime = setTimeout(() => {
          clearTimeout(mytime)
        }, 500)
      }
    }

    for (let i = 0; i < arr.length; i++) {
      onloadarr[i] = new Image()
      onloadarr[i].onload = () => {
        // console.log(i, arr[i])
        backFun()
      }
      onloadarr[i].src = arr[i]
      console.log(i, arr[i])
    }
  }

  // const toStart = () => {
  //   store.commit('changeShowType', 'introduce')
  // }

  onMounted(() => {
    if (process.env.NODE_ENV === 'production') {
      baseurl.value = window.baseurl
    }
    setFullImg()
  })
  // export default defineComponent({
  //   props: {
  //     title: {
  //       type: String
  //     }
  //   },
  //   setup() {
  //     const loadPercent = ref(5)

  //     onMounted(() => {
  //       setFullImg()
  //     })

  //     const setFullImg = () => {
  //       const t = setInterval(() => {
  //         loadPercent.value += 1
  //         if (loadPercent.value === 100) {
  //           clearInterval(t)
  //         }
  //         console.log(loadPercent.value)
  //       }, 100)
  //     }

  //     return {
  //       loadPercent
  //     }
  //   }
  // })
</script>

<style lang="less">
  .loading {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: @main-bg;
    .logo {
      position: absolute;
      width: 76vw;
      height: 20vw;
      top: 8vw;
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
    .skill-bar {
      width: 60%;
      height: 6px;
      // overflow: hidden;
      background: #ffffff;
      border-radius: 10px;
      .filled {
        position: relative;
        height: 100%;
        // background: linear-gradient(to right, #7c45f3, #4d5aec, #72a7f7, #92dae6);
        background: #990000;
        // overflow: hidden;
        border-radius: 10px;
        // .filed-circle {
        //   position: absolute;
        //   top: -0px;
        //   right: 0;
        //   width: 6px;
        //   height: 6px;
        //   border: 4px solid #b0efe8;
        //   border-radius: 50%;
        // }
      }
      z-index: 4;
    }
    .load-title {
      margin-top: 10px;
      color: #990000;
      font-weight: bold;
      z-index: 4;
      // dot {
      //   display: inline-block;
      //   height: 1em;
      //   text-align: left;
      //   overflow: hidden;
      //   font-weight: bold;
      // }
      // dot::before {
      //   display: block;
      //   content: '...\A..\A.';
      //   white-space: pre-wrap;
      //   animation: dot 3s infinite step-start both;
      // }
    }
  }
</style>
