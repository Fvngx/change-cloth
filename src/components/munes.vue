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
          <!-- <div class="text-box">
            <div class="text">
              1.您可以在龙头基础上，选用不同颜色的画笔画出龙的下半身，作画过程中也可撤销或选择重画；
            </div>
            <div class="text">
              2.您可将游戏分享给您的好友，每日分享上限为
              <span style="color: #b2170d">30</span>
              次；好友每成功为您<span style="color: #b2170d">助力1次</span>
              ，您可随机获得1张背景壁纸，总共有5张不同的背景壁纸；
              <span style="color: #b2170d">壁纸可用于装扮您的画作，且每张壁纸对应5档不同额度的钻石会员积分；</span>
            </div>
            <div class="text">祥龙献瑞壁纸--好运即将降临</div>
            <div class="text">龙光焕发壁纸--10钻石会积分</div>
            <div class="text">龙华富贵壁纸--20钻石会积分</div>
            <div class="text">钱龙驾到壁纸--30钻石会壁纸</div>
            <div class="text">生亿兴龙壁纸--40钻石会积分</div>

            <div class="text">
              3.<span style="color: #b2170d">
                若集齐5张壁纸，即可合成一张召唤神龙卡，该卡为终极大奖，可直接兑换10万钻石会积分；
              </span>
            </div>
            <div class="text">
              4.游戏共有八个分区（五缘海悦、云启东方、湖畔润璟、缦玥长滩、璟云、叁里云庐、书香泊月、文澜春晓），
              <span style="color: #b2170d">玩家只能选择进入其中一个分区参与游戏；</span>
            </div>
            <div class="text">
              5.活动结束后，
              <span style="color: #b2170d">
                您需要根据所选项目前往线下对应的营销中心，凭兑奖二维码核销获取钻石会积分；
              </span>
            </div>
            <div class="text">6.本公司保留在法律范围内对本次活动的解释权。</div>
          </div> -->
        </div>
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
  import { ref } from 'vue'
  import data from '@/js/data'

  const fixed = ref('')

  const clickMenu = (p) => {
    console.log(p)
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
      .queding-btn {
        width: 34vw;
        height: 8vw;
        margin-top: 10vw;
      }
    }
  }
</style>
