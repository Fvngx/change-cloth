<template>
  <div class="draw-canvas center-bg" :style="`background-image: url(${data.bg.bg1})`">
    <div class="banner">
      <img :src="data.banner[square]" :alt="data.banner[square]" />
    </div>
    <div class="line-bg center-bg" :style="`background-image: url(${data.other.line})`"></div>

    <div ref="canvasBox" class="draw-center">
      <div
        class="box center-bg"
        :style="`background-image: url(${data.bg.bg5});width:${canvasOpt.realWidth}px;height:${canvasOpt.realHeight}px;left:${borderLeft}px`"
      >
        <div
          class="center-bg"
          :style="`background-image: url(${drawBg});
          width:${canvasOpt.realWidth - 26}px;height:${canvasOpt.realHeight - 24}px;
          position: absolute;;top:11px;left:13px;z-index:-1`"
        ></div>
        <div
          class="back center-bg"
          :style="`background-image: url(${data.btn.back});left:${canvasOffset.left + 20}px`"
          @click="toBack"
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
              <div @click.stop v-if="showColor" class="color-bar" :style="`right:${canvasOffset.left + 90}px`">
                <div
                  class="color"
                  v-for="color in colors"
                  :key="color.color"
                  :style="`background: ${color.color};border:1px solid ${color.border}`"
                  @click="chooseColor(color.color)"
                >
                  <div
                    v-if="canvasOpt.strokeStyle === color.color"
                    class="active"
                    :style="`background-image: url(${data.btn.active})`"
                  ></div>
                </div>
                <div class="b-line"></div>
                <div class="draw-sizes">
                  <div class="size size1" :class="canvasOpt.lineWidth === 8 ? 'act' : ''" @click="chooseSize(8)"></div>
                  <div
                    class="size size2"
                    :class="canvasOpt.lineWidth === 16 ? 'act' : ''"
                    @click="chooseSize(16)"
                  ></div>
                  <div
                    class="size size3"
                    :class="canvasOpt.lineWidth === 32 ? 'act' : ''"
                    @click="chooseSize(32)"
                  ></div>
                </div>
              </div>
            </div>
            <div class="tool-btn center-bg" :style="`background-image: url(${data.btn.pre})`" @click="revoke"></div>
            <div class="tool-btn center-bg" :style="`background-image: url(${data.btn.reset})`" @click="reset"></div>
          </div>
        </div>
        <div class="bottm-btns">
          <div class="create-btn btn" @click="toCreate">
            <img :src="data.btn.create" :alt="data.btn.create" />
          </div>
          <div class="use-btn btn" @click="toUsebizhi">
            <img :src="data.btn.usebizhi" :alt="data.btn.usebizhi" />
          </div>
          <div class="share-btn btn" @click="toShare">
            <img :src="data.btn.shareto" :alt="data.btn.shareto" />
          </div>
        </div>
        <canvas ref="myCanvas" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend"> </canvas>
      </div>
    </div>

    <div class="draw-bottom">
      <munes />
    </div>

    <div v-if="showBizhi" class="fixed">
      <div class="body">
        <div class="content bizhi-content center-bg" :style="`background-image: url(${data.bg.bg3})`">
          <div class="title center-bg" :style="`background-image: url(${data.btn.bizhi})`"></div>
          <carousel-3d
            ref="carousel"
            @before-slide-change="onSlideChange"
            :autoplayTimeout="3000"
            :perspective="35"
            :display="3"
            :animationSpeed="1000"
            :width="172"
            :height="248"
            :controlsVisible="false"
            :controlsHeight="60"
          >
            <slide v-for="(item, i) in slides" :index="i" :key="i">
              <img :src="item.src" alt="img" @click="chooseSlide(i)" />
            </slide>
          </carousel-3d>
          <div class="info">
            <div class="title-txt">祥龙献瑞×4</div>
            <div class="detail">
              <div class="line">当前壁纸可兑换500钻石会积分，详见游戏规则</div>
            </div>
          </div>
          <div class="zhaohuan-box center-bg" :style="`background-image: url(${data.bg.bg4})`">
            <div class="zhaohuan center-bg" :style="`background-image: url(${data.btn.zhaohuan})`"></div>
          </div>
        </div>
        <div
          class="queding-btn center-bg"
          :style="`background-image: url(${data.btn.queding})`"
          @click="hideFixed"
        ></div>
      </div>
    </div>
    <div v-if="endPost" class="post-fixed">
      <div class="post-body">
        <div class="post-content">
          <img class="post-end" :src="endPost" :alt="endPost" />
        </div>
        <div class="tips">长按保存海报，立即去分享大作吧~</div>
        <div
          class="queding-btn center-bg"
          :style="`background-image: url(${data.btn.queding})`"
          @click="hideFixed"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref, onMounted, nextTick } from 'vue'
  import munes from '../../components/munes.vue'
  import { throttle } from '@/utils'
  // import http from '../../js/http'
  import data from '@/js/data'

  import store from '@/store'

  const canvasBox = ref()
  const myCanvas = ref()
  const ctx = ref()
  const ratio = ref(1)
  const openBtn = ref(null)
  const showColor = ref(false)
  const colors = ref([
    { color: '#ffffff', border: '#000000' },
    { color: '#000000', border: '#a5a5a5' },
    { color: '#c3037c', border: '#dc6bb2' },
    { color: '#8bba25', border: '#8bba25' },
    { color: '#e32221', border: '#ef7d7c' },
    { color: '#008d5a', border: '#d2ebe2' },
    { color: '#ea611e', border: '#f3a27b' },
    { color: '#0695ba', border: '#e2f3f7' },
    { color: '#f18d1b', border: '#f7bc79' },
    { color: '#2970af', border: '#e6eef6' },
    { color: '#fdc50b', border: '#fedd6f' },
    { color: '#434d98', border: '#e9eaf3' }
  ])

  const canvasOpt = ref({
    width: 720,
    height: 970,
    dragonWidth: 310,
    dragonHeight: 303,
    realWidth: 310,
    realHeight: 303,
    drawing: false,
    startPoint: {
      x: '',
      y: ''
    },
    lineWidth: 8,
    strokeStyle: '#ffffff',
    info: {},
    points: []
  })
  const canvasHistory = ref([])
  const showBizhi = ref(false)
  const curBizhi = ref('')
  const endPost = ref()

  const slides = ref([
    {
      id: '1',
      src: data.bg.bizhi1
    },
    {
      id: '1',
      src: data.bg.bizhi1
    },
    {
      id: '1',
      src: data.bg.bizhi1
    },
    {
      id: '1',
      src: data.bg.bizhi1
    }
  ])
  const curSlide = ref(0)
  const square = computed(() => store.state.square)
  const canvasOffset = computed(() => {
    if (myCanvas.value) {
      return { left: myCanvas.value.offsetLeft, right: myCanvas.value.offsetRight }
    }
    return { left: 10, right: 10 }
  })
  const borderLeft = computed(() => {
    return (window.innerWidth - canvasOpt.value.realWidth) / 2
  })
  const drawBg = computed(() => {
    if (curBizhi.value) return curBizhi.value
    return data.bg.default
  })

  const toBack = () => {
    store.commit('changeShowType', 'introduce')
  }

  // 是否显示工具
  const changeTools = () => {
    openBtn.value = !openBtn.value
    showColor.value = false
  }
  // 显示颜色
  const toShowColor = () => {
    showColor.value = !showColor.value
  }
  // 选择颜色
  const chooseColor = (color) => {
    canvasOpt.value.strokeStyle = color
  }
  // 选择线条大小
  const chooseSize = (width) => {
    canvasOpt.value.lineWidth = width
  }
  // 撤销
  const revoke = () => {
    undo()
  }
  // 重置
  const reset = () => {
    if (canvasHistory.value.length <= 0) return
    drawbizhi(drawBg.value)
    clearDraw()
    drawBorder()
  }

  const toCreate = async () => {
    // await canvasImgInit(drawBg.value)
    try {
      await drawBorder()
      await drawbizhi(drawBg.value)
      const len = canvasHistory.value.length
      if (len <= 0) {
        await drawDradgonHead()
      } else {
        await drawImage(canvasHistory.value[len - 1], 0, 0, myCanvas.value.width, myCanvas.value.height)
      }
      await drawImage(
        data.other.qr,
        myCanvas.value.width - 80 * ratio.value,
        myCanvas.value.height - 80 * ratio.value,
        50 * ratio.value,
        50 * ratio.value
      )
      const res = myCanvas.value.toDataURL('image/png')
      endPost.value = res

      // http.post('setImg', { openid: JSON.parse(localStorage.getItem('userInfo')).openid, base64: res }).then((res) => {
      //   console.log(res)
      // })

      ctx.value.clearRect(0, 0, canvasOpt.value.realWidth * ratio.value, canvasOpt.value.realHeight * ratio.value)
      if (len <= 0) {
        await drawDradgonHead()
      } else {
        await drawImage(canvasHistory.value[len - 1], 0, 0, myCanvas.value.width, myCanvas.value.height)
      }
      // drawImage(canvasHistory.value[len - 1], 0, 0, myCanvas.value.width, myCanvas.value.height)
    } catch (error) {
      console.log(error)
    }
  }
  const toUsebizhi = () => {
    showBizhi.value = true
  }
  const toShare = () => {}

  const onSlideChange = (temp) => {
    curSlide.value = temp
  }
  const chooseSlide = (index) => {
    if (index !== curSlide.value) return
    curBizhi.value = slides.value[index].src
    hideFixed()
  }
  const hideFixed = () => {
    showBizhi.value = false
    endPost.value = ''
  }

  // 绘制开始
  const touchstart = (e) => {
    console.log(e, canvasOpt.value.info)
    canvasOpt.value.drawing = true
    const [x, y] = [
      e.touches[0].clientX - canvasOpt.value.info.left,
      // e.touches[0].clientY
      e.touches[0].clientY - canvasOpt.value.info.top
    ]
    canvasOpt.value.points.push({ x, y })
    canvasOpt.value.startPoint.x = x
    canvasOpt.value.startPoint.y = y
  }
  // 绘制中
  const touchmove = throttle((e) => {
    if (!canvasOpt.value.drawing) return
    const [x, y] = [
      e.touches[0].clientX - canvasOpt.value.info.left,
      // e.touches[0].clientY
      e.touches[0].clientY - canvasOpt.value.info.top
    ]
    canvasOpt.value.points.push({ x, y })
    if (canvasOpt.value.points.length > 3) {
      const startPoint = Object.assign({}, canvasOpt.value.startPoint)
      const lastTwoPoints = canvasOpt.value.points.slice(-4)
      const control_1 = {
        x: (lastTwoPoints[0].x + lastTwoPoints[1].x) / 2,
        y: (lastTwoPoints[0].y + lastTwoPoints[1].y) / 2
      }
      const control_2 = {
        x: (control_1.x + lastTwoPoints[2].x) / 2,
        y: (control_1.y + lastTwoPoints[2].y) / 2
      }
      const controlPoint = {
        x: (canvasOpt.value.startPoint.x + control_1.x) / 2,
        y: (canvasOpt.value.startPoint.y + control_1.y) / 2
      }

      const endPoint = {
        x: (controlPoint.x + control_2.x) / 2,
        y: (controlPoint.y + control_2.y) / 2
      }
      drawLine(startPoint, controlPoint, endPoint)
      canvasOpt.value.startPoint.x = endPoint.x
      canvasOpt.value.startPoint.y = endPoint.y
    }
  }, 18)
  // 绘制结束
  const touchend = () => {
    canvasOpt.value.drawing = false
    canvasOpt.value.points = []
    canvasHistory.value.push(myCanvas.value.toDataURL())
  }

  // 获取分辨率比
  const getPixelRatio = (ctx) => {
    const backingStore =
      ctx.backingStorePixelRatio ||
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1
    console.log('backingStore', backingStore, window.devicePixelRatio)
    return (window.devicePixelRatio || 1) / backingStore
  }

  // 画布初始化
  const canvasInit = () => {
    ctx.value = myCanvas.value.getContext('2d')
    ctx.value.lineJoin = 'round'
    // ctx.value.lineCap = 'round'
    ratio.value = getPixelRatio(ctx.value)

    let height = canvasBox.value.offsetHeight
    let width = (height / canvasOpt.value.height) * canvasOpt.value.width
    if (width > window.innerWidth) {
      width = window.innerWidth * 0.9
      height = (width / canvasOpt.value.width) * canvasOpt.value.height
    }
    canvasOpt.value.realWidth = width
    canvasOpt.value.realHeight = height
    // console.log(width, window.innerWidth)

    myCanvas.value.style.width = width + 'px'
    myCanvas.value.style.height = height + 'px'

    myCanvas.value.width = width * ratio.value
    myCanvas.value.height = height * ratio.value
    console.log(myCanvas.value.width, myCanvas.value.height)
  }

  // 清画布
  const clearDraw = () => {
    ctx.value.clearRect(0, 0, canvasOpt.value.realWidth * ratio.value, canvasOpt.value.realHeight * ratio.value)
    drawDradgonHead()
  }

  const undo = () => {
    if (canvasHistory.value.length <= 0) return
    canvasHistory.value = canvasHistory.value.slice(0, -1)
    console.log(canvasHistory.value)
    const len = canvasHistory.value.length
    if (len > 0) {
      ctx.value.clearRect(0, 0, canvasOpt.value.realWidth * ratio.value, canvasOpt.value.realHeight * ratio.value)
      drawImage(canvasHistory.value[len - 1], 0, 0, myCanvas.value.width, myCanvas.value.height)
    } else if (len <= 0) {
      clearDraw()
    }
  }

  // 划线
  const drawLine = (startPoint, controlPoint, endPoint) => {
    ctx.value.beginPath()
    ctx.value.moveTo(startPoint.x * ratio.value, startPoint.y * ratio.value)
    ctx.value.quadraticCurveTo(
      controlPoint.x * ratio.value,
      controlPoint.y * ratio.value,
      endPoint.x * ratio.value,
      endPoint.y * ratio.value
    )
    ctx.value.strokeStyle = canvasOpt.value.strokeStyle
    ctx.value.lineWidth = canvasOpt.value.lineWidth

    ctx.value.stroke()
    ctx.value.closePath()
  }

  // 绘制图片
  const drawImage = (src, startX, startY, endX, endY) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        console.log(src, startX, startY, endX, endY)
        ctx.value.drawImage(img, startX, startY, endX, endY)
        resolve(true)
      }
      img.onerror = (e) => {
        reject(e)
      }
    })
  }

  // 绘制边框
  const drawBorder = () => {
    const src = data.bg.bg5
    const width = canvasOpt.value.realWidth * ratio.value
    const height = canvasOpt.value.realHeight * ratio.value
    return drawImage(src, 0, 0, width, height)
  }

  // 绘制壁纸
  const drawbizhi = (bizhi) => {
    const src = bizhi || data.bg.default
    const width = canvasOpt.value.realWidth * ratio.value
    const height = canvasOpt.value.realHeight * ratio.value
    return drawImage(src, 10.5 * ratio.value, 10.5 * ratio.value, width - ratio.value * 21, height - ratio.value * 21)
  }

  // 绘制龙头
  const drawDradgonHead = () => {
    return new Promise((resolve, reject) => {
      const src = data.other.head
      const width = canvasOpt.value.realWidth * ratio.value
      const height = canvasOpt.value.realHeight * ratio.value
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

  // // 初始图片绘制
  // const canvasImgInit = async (bizhi) => {
  //   return drawBorder().then(() => {
  //     return drawbizhi(bizhi)
  //   })
  // }

  onMounted(async () => {
    canvasInit()
    await drawDradgonHead()
    nextTick(() => {
      setTimeout(() => {
        canvasOpt.value.info = myCanvas.value.getBoundingClientRect()
        console.log(canvasOpt.value)
      }, 700)
    })
    // canvasImgInit()
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
    .line-bg {
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
        z-index: 2;
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
              // position: relative;
              width: 9vw;
              height: 9vw;
              margin-top: 3vw;
            }
            .color-bar {
              position: fixed;
              width: 21vw;
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              padding: 0 2vw 2vw 2vw;
              background-color: #fff;
              border-radius: 2vw;
              border: 1px solid #c91b22;
              .color {
                margin: 0 1vw;
                position: relative;
                width: 6vw;
                height: 6vw;
                margin-top: 2vw;
                box-sizing: border-box;
              }
              .active {
                position: absolute;
                width: 4vw;
                height: 4vw;
                top: calc(1vw - 1px);
                left: calc(1vw - 1px);
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
              }
              .b-line {
                width: 100%;
                height: 1px;
                margin-top: 2vw;
                background-color: #000000;
              }
              .draw-sizes {
                display: flex;
                width: 100%;
                padding: 0 1vw;
                align-items: center;
                justify-content: space-between;
                margin-top: 2vw;
                .size {
                  position: relative;
                  width: 1.5vw;
                  height: 1.5vw;
                  // padding: 1vw;
                  background-color: #000000;
                  border-radius: 50%;
                }
                .act::after {
                  position: absolute;
                  content: '';
                  top: -1.5vw;
                  left: -1.5vw;
                  width: 4.5vw;
                  height: 4.5vw;
                  border-radius: 50%;
                  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
                }
                .size2 {
                  width: 2vw;
                  height: 2vw;
                  &.act::after {
                    top: -1.25vw;
                    left: -1.25vw;
                  }
                }
                .size3 {
                  width: 3vw;
                  height: 3vw;
                  &.act::after {
                    top: -1vw;
                    left: -1vw;
                    width: 5vw;
                    height: 5vw;
                  }
                }
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
        .bottm-btns {
          position: absolute;
          bottom: 10vw;
          padding: 0 6vw;
          width: 100%;
          display: flex;
          justify-content: space-between;
          .btn {
            width: 30%;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .post-fixed {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
    .post-body {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      animation: ani 2s forwards;
      .post-content {
        position: relative;
        width: 80vw;
        height: 110vw;
        img {
          width: 100%;
        }
      }
      .tips {
        margin-top: 4vw;
        color: #efd7af;
        font-size: 13px;
        font-weight: bold;
      }
      .queding-btn {
        width: 34vw;
        height: 8vw;
        margin-top: 10vw;
      }
    }
  }
  @keyframes ani {
    0% {
      opacity: 0.2;
      transform: scale(0.2) rotateY(0deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotateY(720deg);
    }
  }
</style>
