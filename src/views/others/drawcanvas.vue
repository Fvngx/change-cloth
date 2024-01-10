<template>
  <div class="draw-canvas center-bg" :style="`background-image: url(${data.bg.bg1})`">
    <div class="banner">
      <img :src="data.banner[square]" :alt="data.banner[square]" />
    </div>

    <div class="draw-center">
      <canvas ref="myCanvas"></canvas>
    </div>

    <div class="draw-bottom">
      <munes />
    </div>
  </div>
</template>

<script setup>
  import { computed, ref, onMounted } from 'vue'
  import munes from '../../components/munes.vue'
  import data from '@/js/data'

  import store from '@/store'

  const myCanvas = ref()

  const square = computed(() => store.state.square)

  onMounted(() => {
    myCanvas.value.width = window.innerWidth
    // myCanvas.value.height =
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
    .draw-center {
      flex: 1;
    }
  }
</style>
