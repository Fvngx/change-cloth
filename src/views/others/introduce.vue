<template>
  <div class="introduce center-bg" :style="`background-image: url(${data.bg.bg1})`">
    <div class="top">
      <div class="logo center-bg" style="background-image: url('/assets/img/other/logo.png')"></div>
      <div class="hua-long center-bg" style="background-image: url('/assets/img/other/hua_long_jin.png')"></div>
    </div>
    <div class="center">
      <div class="center-box">
        <div class="item center-bg" v-for="item in list" :key="item.id" :style="`background-image: url(${item.img})`">
          <div class="btn center-bg" :style="`background-image: url(${data.btn.xuanze})`" @click="toSquare(item)"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="btns">
        <div class="fenxiang center-bg" :style="`background-image: url(${data.btn.fenxiang})`" @click="toShare"></div>
        <div class="jifen center-bg" :style="`background-image: url(${data.btn.jifen})`" @click="toJifen"></div>
      </div>

      <div class="txt">今日已分享1次</div>
      <munes />
    </div>

    <div v-if="showJifen" class="fixed">
      <div class="body">
        <div class="content user-content paiming-content center-bg" :style="`background-image: url(${data.bg.bg3})`">
          <div class="title center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
          <div class="user-list">
            <div class="user-item">
              <div class="user">
                <div class="pai-ming">1</div>
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="name-txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="name-num">1000</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="name-txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="name-line">感谢ta的帮助</div>
                <div class="name-line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="name-txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="name-line">感谢ta的帮助</div>
                <div class="name-line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="name-txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="name-line">感谢ta的帮助</div>
                <div class="name-line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="name-txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="name-line">感谢ta的帮助</div>
                <div class="name-line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="name-txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="name-line">感谢ta的帮助</div>
                <div class="name-line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="name-txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="name-line">感谢ta的帮助</div>
                <div class="name-line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="name-txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="name-line">感谢ta的帮助</div>
                <div class="name-line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="name-txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="name-line">感谢ta的帮助</div>
                <div class="name-line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="name-txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="name-line">感谢ta的帮助</div>
                <div class="name-line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="name-txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="name-line">感谢ta的帮助</div>
                <div class="name-line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="name-txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="name-line">感谢ta的帮助</div>
                <div class="name-line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
            <div class="user-item">
              <div class="user">
                <div class="avatar center-bg" :style="`background-image: url(${data.btn.zhuli})`"></div>
                <div class="user-name">
                  <span class="name-txt">WEsdfasdfsdfsfa</span>
                </div>
              </div>
              <div class="info">
                <div class="name-line">感谢ta的帮助</div>
                <div class="name-line">您获得了一张祥龙献瑞壁纸</div>
              </div>
            </div>
          </div>
        </div>
        <div class="tips">您当前在积分排行榜第342位</div>
        <div
          class="queding-btn jifen-btn center-bg"
          :style="`background-image: url(${data.btn.queding})`"
          @click="hideFixed"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import data from '@/js/data'
  import store from '@/store'
  import munes from '../../components/munes.vue'
  const list = ref([
    {
      id: '1',
      name: '云起东方',
      type: 'jinmao',
      img: data.other.jinmao
    },
    {
      id: '2',
      name: '五缘海悦',
      type: 'haiyue',
      img: data.other.haiyue
    },
    {
      id: '3',
      name: '建发·缦玥长滩',
      type: 'manyue',
      img: data.other.manyue
    },
    {
      id: '4',
      name: '建发招商璟云',
      type: 'jinyun',
      img: data.other.jinyun
    },
    {
      id: '5',
      name: '建发·叁里云庐',
      type: 'yunlu',
      img: data.other.yunlu
    },
    {
      id: '6',
      name: '建发·书香泊月',
      type: 'boyue',
      img: data.other.boyue
    },
    {
      id: '7',
      name: '建发·文澜春晓',
      type: 'wenlan',
      img: data.other.wenlan
    },
    {
      id: '8',
      name: '湖畔润璟',
      type: 'runjing',
      img: data.other.runjing
    }
  ])
  const showJifen = ref(false)

  const toSquare = (item) => {
    console.log(item)
    store.commit('changeSquare', item.type)
  }

  const toShare = () => {
    console.log('share')
  }

  const toJifen = () => {
    showJifen.value = true
  }

  const hideFixed = () => {
    showJifen.value = false
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
      overflow-x: hidden;
      overflow-y: scroll;
      .center-box {
        padding: 0 9vw;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        box-sizing: border-box;
        margin-top: 3.5vw;
      }
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
      .btns {
        display: flex;
      }
      .fenxiang {
        width: 30vw;
        height: 7vw;
      }
      .jifen {
        width: 30vw;
        height: 7vw;
        margin-left: 7vw;
      }
      .txt {
        color: #7e0202;
        margin-top: 4vw;
        font-weight: bolder;
        font-size: 14px;
      }
    }
    .introduce-fixed {
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
          width: 67vw;
          height: 92.5vw;
        }
      }
    }
    .fixed {
      .paiming-content {
        .user-item {
          .user {
            .user-name {
              width: 150px !important;
            }
          }
        }
        .pai-ming {
          color: #b2170d;
          font-weight: bold;
          margin-right: 1vw;
        }
        .name-num {
          color: #b2170d;
          // font-weight: bold;
        }
      }
      .tips {
        margin-top: 7vw;
        color: #fffbd6;
        font-size: 13px;
        font-weight: bold;
      }
      .jifen-btn {
        margin-top: 7vw;
      }
    }
  }
</style>
