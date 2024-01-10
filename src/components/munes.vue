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

    <div v-if="fixed === 'showRule'" class="fixed">
      <div class="body">
        <div class="content center-bg" :style="`background-image: url(${data.bg.bg3})`">
          <div class="title center-bg" :style="`background-image: url(${data.btn.guize})`"></div>
          <div class="text-box center-bg" :style="`background-image: url(${data.other.ruletxt})`"></div>
        </div>
        <div
          class="queding-btn center-bg"
          :style="`background-image: url(${data.btn.queding})`"
          @click="hideFixed"
        ></div>
      </div>
    </div>
    <div v-else-if="fixed === 'showZhuli'" class="fixed">
      <div class="body">
        <div class="content user-content center-bg" :style="`background-image: url(${data.bg.bg3})`">
          <div class="title center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
          <div class="user-list">
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="line">感谢ta的帮助</div>
                <div class="line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="queding-btn center-bg"
          :style="`background-image: url(${data.btn.queding})`"
          @click="hideFixed"
        ></div>
      </div>
    </div>
    <div v-else-if="fixed === 'showBizhi'" class="fixed">
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
              <img :src="item.src" alt="img" />
            </slide>
          </carousel-3d>
          <div class="info">
            <div class="title-txt">祥龙献瑞×4</div>
            <div class="detail">
              <div class="line">当前壁纸可兑换500钻石会积分，详见游戏规则</div>
            </div>
          </div>
          <div class="zhaohuan-box center-bg" :style="`background-image: url(${data.bg.bg4})`">
            <div
              class="zhaohuan center-bg"
              :style="`background-image: url(${data.btn.zhaohuan})`"
              @click="zhuanhuan"
            ></div>
          </div>
        </div>
        <div
          class="queding-btn center-bg"
          :style="`background-image: url(${data.btn.queding})`"
          @click="hideFixed"
        ></div>
      </div>
    </div>
    <div v-else-if="fixed === 'showHecheng'" class="fixed">
      <div class="body">
        <div class="content hecheng-content">
          <div class="guang center-bg" :style="`background-image: url(${data.other.guang})`">
            <div class="hecheng center-bg" :style="`background-image: url(${data.btn.hecheng})`"></div>
            <img class="img img1" key="1" :src="data.bg.bizhi1" :alt="data.bg.bizhi1" />
            <img class="img img2" key="2" :src="data.bg.bizhi1" :alt="data.bg.bizhi1" />
            <img class="img img3" key="3" :src="data.bg.bizhi1" :alt="data.bg.bizhi1" />
            <img class="img img4" key="4" :src="data.bg.bizhi1" :alt="data.bg.bizhi1" />
            <img class="img img5" key="5" :src="data.bg.bizhi1" :alt="data.bg.bizhi1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import data from '@/js/data'
  import { Carousel3d, Slide } from 'vue3-carousel-3d'

  const fixed = ref('')
  const carousel = ref()
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

  const onSlideChange = (temp) => {
    console.log(carousel.value, 'xxx', temp)
    // this.carouselIndex = temp
  }

  const clickMenu = (p) => {
    if (p === 'guize') {
      fixed.value = 'showRule'
    } else if (p === 'bizhi') {
      fixed.value = 'showBizhi'
    } else if (p === 'zhuli') {
      fixed.value = 'showZhuli'
    }
  }

  const hideFixed = () => {
    fixed.value = ''
  }

  const zhuanhuan = () => {
    console.log('zhaohuan')
    fixed.value = 'showHecheng'
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
  .fixed {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    .body {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .content {
        position: relative;
        width: 80vw;
        height: 116vw;
        .title {
          position: absolute;
          width: 33vw;
          height: 7.8vw;
          top: -3vw;
          left: 23.5vw;
        }
        .text-box {
          width: 70vw;
          height: 93vw;
          margin-left: 5vw;
          margin-top: 12vw;
        }
      }
      .user-content {
        padding: 7vw 3vw 5vw;
        .user-list {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          overflow-y: auto;
          padding: 0 2vw 2vw;
          .user-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2vw 0;
            margin-top: 2vw;
            border-bottom: 1px dashed #b2170d;
            .user {
              display: flex;
              align-items: center;
              .avatar {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: #b2170d;
                overflow: hidden;
              }
              .user-name {
                position: relative;
                width: 90px;
                height: 30px;
                font-size: 12px;
                color: #b2170d;
                // font-weight: bold;
                .txt {
                  position: absolute;
                  text-align: start;
                  width: 120%;
                  left: 53%;
                  transform-origin: top left;
                  transform: scale(0.8) translate(-50%, -50%);
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
            }
            .line {
              text-align: end;
              font-size: 12px;
              color: #b2170d;
              font-weight: bold;
              transform: scale(0.8);
              margin-right: -10px;
              // position: absolute;
            }
          }
        }
      }
      .bizhi-content {
        padding: 3vw 5vw 5vw;
        .info {
          color: #7e0202;
          .title-txt {
            font-size: 13px;
            font-weight: bold;
          }
          .detail {
            position: relative;
            margin-top: 2.5vw;
            color: #a50000;
            font-size: 12px;
            .line {
              position: absolute;
              text-align: start;
              left: 50%;
              transform-origin: top left;
              transform: scale(0.6) translate(-50%, -50%);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        .zhaohuan-box {
          position: relative;
          width: 58vw;
          height: 9vw;
          margin-top: 12vw;
          margin-left: 6vw;
          .zhaohuan {
            position: absolute;
            width: 19vw;
            height: 19vw;
            left: 19.5vw;
            top: -5vw;
          }
        }
      }
      .hecheng-content {
        display: flex;
        justify-content: center;
        align-items: center;
        .guang {
          position: relative;
          width: 66vw;
          height: 66vw;
          display: flex;
          justify-content: center;
          align-items: center;
          .hecheng {
            width: 19vw;
            height: 19vw;
          }
          .img {
            position: absolute;
            width: 21vw;
            height: 29vw;
          }
          .img1 {
            top: -12vw;
          }
          .img2 {
            top: 14vw;
            right: -3vw;
          }
          .img3 {
            bottom: -11vw;
            right: 9vw;
          }
          .img4 {
            bottom: -11vw;
            left: 9vw;
          }
          .img5 {
            top: 14vw;
            left: -3vw;
          }
        }
      }
      .queding-btn {
        width: 34vw;
        height: 8vw;
        margin-top: 10vw;
      }
    }
  }
  .carousel-3d-slide {
    background-color: transparent !important;
    border: none !important;
    &.right-1 {
      transform: translateX(72px) translateZ(-200px) rotateY(0deg) !important;
    }
    &.left-1 {
      transform: translateX(-72px) translateZ(-200px) rotateY(-0deg) !important;
    }
    &.left-1,
    &.right-1 {
      img {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
      }
    }
  }
</style>
