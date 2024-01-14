<template>
  <div :class="`wrapper app-${showType}`">
    <transition name="up">
      <loadingData key="1" v-if="loading" @done="loadingDone" />
    </transition>
    <transition name="up">
      <introduce key="2" v-if="!loading && !isLog && showType === 'introduce'" mode="out-in" />
    </transition>
    <transition name="up">
      <drawcanvas v-if="!loading && !isLog && showType === 'draw'" />
    </transition>
    <transition name="up">
      <zhulipage key="3" v-if="!loading && isLog" />
    </transition>
    <!-- <register key="3" v-else-if="showType === 'register'" /> -->
    <!-- <transition name="up"> -->
    <!-- <pic-choose key="4" v-else-if="showType === 'picChoose'" /> -->
    <!-- </transition> -->
    <!-- <transition name="up"> -->
    <!-- <my-mass key="5" v-else-if="showType === 'mass'" /> -->
    <!-- </transition> -->
    <!-- <award key="6" v-else-if="showType === 'award'" /> -->
  </div>
</template>

<script setup>
  import { computed, ref, onMounted } from 'vue'
  import loadingData from './others/loadingData.vue'
  import introduce from './others/introduce.vue'
  import zhulipage from './others/zhuli.vue'
  import drawcanvas from './others/drawcanvas.vue'

  import store from '@/store'

  const loading = ref(true)

  const showType = computed(() => {
    return store.state.showType
  })
  const isLog = computed(() => {
    return store.state.isLog
  })

  const loadingDone = () => {
    loading.value = false
  }
  onMounted(() => {
    const params = new URL(window.location.href).searchParams
    const isToLog = params.get('isToLog')
    console.log(isToLog)
    if (isToLog && isToLog === '1') {
      store.commit('changeIsLog', true)
    }
  })
</script>

<style lang="less">
  .wrapper {
    width: 100%;
    height: 100%;
  }
</style>
