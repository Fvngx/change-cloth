<template>
  <div class="draw-canvas center-bg" :style="`background-image: url(${data.bg.bg1})`">
    <div class="banner">
      <img :src="data.banner[square]" :alt="data.banner[square]" />
    </div>
    <div class="line center-bg" :style="`background-image: url(${data.other.line})`"></div>

    <div ref="canvasBox" class="draw-center">
      <div class="box">
        <div
          class="back center-bg"
          :style="`background-image: url(${data.btn.back});left:${canvasOffset.left + 20}px`"
        ></div>
        <div
          class="tools center-bg"
          :style="`background-image: url(${data.btn.tool});right:${canvasOffset.left + 20}px`"
          @click="changeTools"
        >
          <div
            class="down center-bg"
            :class="openBtn ? 'open' : ''"
            :style="`background-image: url(${data.btn.down})`"
          ></div>
          <div @click.stop class="tool-btns" :class="openBtn !== null ? (openBtn ? 'show' : 'hidden') : ''">
            <div class="tool-btn center-bg" :style="`background-image: url(${data.btn.draw})`" @click="toShowColor">
              <div @click.stop v-if="showColor" class="color-bar" :style="`right:${canvasOffset.left + 66}px`">
                <div class="color" v-for="color in colors" :key="color" :style="`background: ${color}`"></div>
              </div>
            </div>
            <div class="tool-btn center-bg" :style="`background-image: url(${data.btn.pre})`" @click="revoke"></div>
            <div class="tool-btn center-bg" :style="`background-image: url(${data.btn.reset})`" @click="reset"></div>
          </div>
        </div>
        <canvas ref="myCanvas" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend"> </canvas>
      </div>
    </div>

    <div class="draw-bottom">
      <munes />
    </div>
  </div>
</template>

<script setup>
  import { computed, ref, onMounted } from 'vue'
  import munes from '../../components/munes.vue'
  import { throttle } from '@/utils'
  import data from '@/js/data'

  import store from '@/store'

  const canvasBox = ref()
  const myCanvas = ref()
  const ctx = ref()
  const ratio = ref(1)
  const openBtn = ref(null)
  const showColor = ref(false)
  // const isDrawing = ref(false)
  console.log(throttle)
  const colors = ref([
    '#c3037c',
    '#8bba25',
    '#e32221',
    '#008d5a',
    '#ea611e',
    '#0695ba',
    '#f18d1b',
    '#2970af',
    '#fdc50b',
    '#434d98',
    '#f4e500',
    '#6c388a'
  ])

  const canvasOpt = ref({
    width: 720,
    height: 970,
    dragonWidth: 310,
    dragonHeight: 303,
    lineWidth: 2,
    strokeStyle: 'black'
  })

  const square = computed(() => store.state.square)
  const canvasOffset = computed(() => {
    if (myCanvas.value) {
      return { left: myCanvas.value.offsetLeft, right: myCanvas.value.offsetRight }
    }
    return { left: 10, right: 10 }
  })

  const changeTools = () => {
    openBtn.value = !openBtn.value
    showColor.value = false
  }
  const toShowColor = () => {
    showColor.value = !showColor.value
  }
  const revoke = () => {}
  const reset = () => {}

  const touchstart = (e) => {
    console.log(e)
  }
  const touchmove = throttle((e) => {
    console.log(e)
  }, 200)
  const touchend = (e) => {
    console.log(e)
  }

  const getPixelRatio = (ctx) => {
    const backingStore =
      ctx.backingStorePixelRatio ||
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1
    return (window.devicePixelRatio || 1) / backingStore
  }

  const canvasInit = () => {
    ctx.value = myCanvas.value.getContext('2d')
    ratio.value = getPixelRatio(ctx.value)

    let height = canvasBox.value.offsetHeight
    let width = (height / canvasOpt.value.height) * canvasOpt.value.width

    myCanvas.value.style.width = width + 'px'
    myCanvas.value.style.height = height + 'px'

    myCanvas.value.width = width * ratio.value
    myCanvas.value.height = height * ratio.value
  }

  const drawImage = (src, startX, startY, endX, endY) => {
    return new Promise((resolve, reject) => {
      let img = new Image()
      img.src = src
      img.onload = () => {
        ctx.value.drawImage(img, startX, startY, endX, endY)
        resolve(true)
      }
      img.onerror = () => {
        reject(false)
      }
    })
  }

  const drawBorder = () => {
    const src = data.bg.bg5
    const width = myCanvas.value.width
    const height = myCanvas.value.height
    return drawImage(src, 0, 0, width, height)
  }

  const drawbizhi = (bizhi) => {
    const src = bizhi || data.bg.default
    const width = myCanvas.value.width
    const height = myCanvas.value.height
    return drawImage(src, 10.5 * ratio.value, 10.5 * ratio.value, width - ratio.value * 21, height - ratio.value * 21)
  }

  const drawDradgonHead = () => {
    return new Promise((resolve, reject) => {
      const src = data.other.head
      const width = myCanvas.value.width
      const height = myCanvas.value.height
      let img = new Image()
      img.src = src
      img.onload = () => {
        const imgWidth = (canvasOpt.value.dragonWidth / canvasOpt.value.width) * width
        const imgHeight = (canvasOpt.value.dragonHeight / canvasOpt.value.height) * height
        const startX = width / 2 - imgWidth / 2

        const startY = 30 * ratio.value
        ctx.value.drawImage(img, startX, startY, imgWidth, imgHeight)
        resolve(true)
      }
      img.onerror = () => {
        reject(false)
      }
    })
  }

  const canvasImgInit = async () => {
    try {
      await drawBorder()
      await drawbizhi()
      await drawDradgonHead()
    } catch (error) {
      console.log(error)
    }
  }

  onMounted(() => {
    canvasInit()
    canvasImgInit()
  })
</script>

<style lang="less">
  .draw-canvas {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .banner {
      width: 100%;
      height: 55.4vw;
      img {
        width: 100%;
      }
    }
    .line {
      height: 1vw;
    }
    .draw-center {
      position: relative;
      flex: 1;
      .box {
        position: absolute;
        width: 100%;
        top: 2vw;
        margin: 0 auto;
        .back,
        .tools {
          position: absolute;
          top: 35px;
        }
        .back {
          width: 13vw;
          height: 16vw;
        }
        .tools {
          width: 11vw;
          height: 11vw;
          .down {
            position: absolute;
            width: 3vw;
            height: 1.5vw;
            bottom: 1.5vw;
            left: 4vw;
            transition: all 0.3s;
            transform: rotate(180deg);
          }
          .open {
            transform: rotate(0deg);
          }
          .tool-btns {
            position: absolute;
            left: 1vw;
            top: 11vw;
            height: 0;
            overflow: hidden;
            .tool-btn {
              width: 9vw;
              height: 9vw;
              margin-top: 3vw;
            }
            .color-bar {
              position: fixed;
              width: 22vw;
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              padding: 0 3vw 3vw 3vw;
              background-color: #fff;
              border-radius: 2vw;
              border: 1px solid #c91b22;
              .color {
                width: 6vw;
                height: 6vw;
                margin-top: 3vw;
              }
            }
            .color-bar::after {
              position: absolute;
              content: '';
              width: 0;
              height: 0;
              right: -5px;
              top: 9px;
              border-top: 0;
              border: 5px solid transparent;
              border-right: 0;
              border-left-color: #fff;
            }
            .color-bar::before {
              position: absolute;
              content: '';
              width: 0;
              height: 0;
              right: -6px;
              top: 8px;
              border-top: 0;
              border: 6px solid transparent;
              border-right: 0;
              border-left-color: #c91b22;
            }
          }
          .show {
            height: 37vw;
            transition: all 0.5s;
          }
          .hidden {
            height: 0;
            transition: all 0.5s;
          }
          @keyframes show {
            0% {
              height: 0;
            }
            100% {
              height: auto;
            }
          }
        }
      }
    }
  }
</style>
