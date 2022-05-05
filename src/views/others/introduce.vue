<template>
  <div class="introduce flex flex-column flex-around">
    <div class="logo">introdux</div>
    <div class="info-txt">活动介绍</div>
    <my-btn-vue class="start-btn" type="primary" @click="startGame">开始游戏</my-btn-vue>
    <!-- <div class="start-btn">开始游戏</div> -->
  </div>
</template>

<script>
  import myBtnVue from '../../components/myBtn.vue'
  import store from '@/store'
  export default {
    components: {
      myBtnVue
    },
    setup: () => {
      const startGame = () => {
        console.log(store)
        store.commit('changeShowType', 'register')
      }

      return {
        startGame
      }
    },
    mounted: () => {
      console.log(this)
    }
  }
</script>

<style lang="less">
  .introduce {
    width: 100%;
    height: 100%;
    .logo {
      width: 20vw;
      height: 20vw;
      background-size: cover;
    }
  }
</style>
