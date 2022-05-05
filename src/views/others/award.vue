<template>
  <div class="award flex flex-column flex-center">
    <template v-if="isShiwu">
      <div class="title">恭喜获得: {{ title }}</div>
      <div class="form-title">请填写您的收货信息</div>
      
    </template>
    <template v-else>
      <div class="title">恭喜获得: {{ title }}</div>
      <my-btn type="primary">领取</my-btn>
    </template>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import myBtn from '../../components/myBtn.vue'

  export default {
    components: {
      myBtn
    },
    setup() {
      const isShiwu = ref(true)
      const title = ref('')

      title.value = '优惠券'

      return {
        isShiwu,
        title
      }
    }
  }
</script>

<style lang="less">
  .award {
    width: 100%;
    height: 100%;
    .title {
      margin-bottom: 10vw;
      font-size: 8vw;
      font-weight: bold;
    }
    .award-shiwu {
      width: 100%;
      height: 100%;
    }
    .award-xuni {
      width: 100%;
      height: 100%;
    }
  }
</style>
