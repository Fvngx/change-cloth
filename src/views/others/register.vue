<template>
  <div class="register flex flex-column flex-center">
    <div class="register-title">注册会员</div>
    <div class="register-form flex flex-column">
      <input class="zhanghao" v-model="ipt.zhanghao" placeholder="请输入账号" @change="iptChange" />
      <input class="mima" v-model="ipt.mima" placeholder="请输入密码" @change="iptChange" />
    </div>
    <my-btn-vue class="register-btn" type="primary" @click="onRegister">注册</my-btn-vue>
    <!-- <button class="register-btn">注册</button> -->
  </div>
</template>

<script>
  import { defineComponent, ref, getCurrentInstance } from 'vue'
  import myBtnVue from '../../components/myBtn.vue'
  import store from '@/store'
  export default defineComponent({
    components: {
      myBtnVue
    },
    setup() {
      let { proxy } = getCurrentInstance()
      const ipt = ref({ zhanghao: '', mima: '' })

      const iptChange = (e) => {
        console.log(ipt.value, e)
      }

      const onRegister = (e) => {
        console.log(e, proxy.$loading)
        proxy.$loading.show()
        setTimeout(() => {
          store.commit('changeShowType', 'picChoose')
          proxy.$loading.hide()
        }, 2000)
      }

      return {
        ipt,
        iptChange,
        onRegister
      }
    }
  })
</script>

<style lang="less">
  .register {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: -10vw;
    .register-title {
      margin-top: 10vw;
      font-weight: bold;
    }
    .register-form {
      width: 100%;
      input {
        height: 8vw;
        line-height: 8vw;
        width: 55%;
      }
      .zhanghao {
        margin-top: 10vw;
      }
      .mima {
        margin-top: 10vw;
      }
    }
    .register-btn {
      // position: absolute;
      // bottom: 15vw;
      margin-top: 10vw;
    }
  }
</style>
