<template>
  <div class="mass flex flex-column">
    <div class="mass-title">当前已经集结: {{ massMembers.length }}/6名勇士</div>
    <div class="mass-avatar">
      <div v-for="i in 6" :key="i" class="img-box">
        <img v-if="avatars[i]" :src="avatars[i]" alt="avatar" />
      </div>
    </div>
    <div class="mass-detail">
      <div>1.集结2名及以上勇士，即可参与抽奖活动；</div>
      <div>2.集结全部6名勇士还有机会获得变形金刚礼品哦！</div>
    </div>
    <my-btn class="mass-btn" type="primary">集结勇士</my-btn>
    <my-btn class="award-btn">抽奖</my-btn>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import myBtn from '../../components/myBtn.vue'
  import MyBtn from '../../components/myBtn.vue'
  export default {
    components: {
      myBtn,
      MyBtn
    },
    computed: {
      avatars() {
        console.log(this)
        return []
      }
    },
    setup() {
      const massMembers = ref([])

      return {
        massMembers
      }
    }
  }
</script>

<style lang="less">
  .mass {
    width: 100%;
    height: 100%;
    padding: 5vw 5vw;
    .mass-title {
      width: 100%;
      text-align: left;
      margin-top: 5vw;
      font-size: 4.2vw;
    }
    .mass-avatar {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .img-box {
        width: 27vw;
        height: 27vw;
        background-color: @ddd;
        margin-top: 5vw;
      }
    }
    .mass-detail {
      width: 100%;
      text-align: left;
      margin-top: 3vw;
      div {
        margin: 2vw 0;
        font-size: 3.3vw;
      }
    }
    .mass-btn {
      margin-top: 5vw;
    }
    .award-btn {
      position: absolute;
      bottom: 20vw;
    }
  }
</style>
