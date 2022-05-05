<template>
  <div class="loading flex-box flex flex-column flex-center">
    <div class="skill-bar">
      <div class="filled" :data-width="loadPercent + '%'" :style="`width:${loadPercent}%`">
        <div class="filed-circle"></div>
      </div>
    </div>
    <div class="load-title">正在加载中 <dot>...</dot></div>
  </div>
</template>

<script>
  import { defineComponent, onMounted, ref } from 'vue'
  export default defineComponent({
    props: {
      title: {
        type: String
      }
    },
    setup() {
      const loadPercent = ref(5)

      onMounted(() => {
        setFullImg()
      })

      const setFullImg = () => {
        const t = setInterval(() => {
          loadPercent.value += 1
          if (loadPercent.value === 100) {
            clearInterval(t)
          }
          console.log(loadPercent.value)
        }, 100)
      }

      return {
        loadPercent
      }
    }
  })
</script>

<style lang="less">
  .loading {
    width: 100vw;
    height: 100vh;
    background-color: @main-bg;
    .skill-bar {
      width: 80vw;
      height: 20px;
      // overflow: hidden;
      background: rgba(126, 165, 189, 0.3);
      border-radius: 10px;
      .filled {
        position: relative;
        height: 100%;
        background: linear-gradient(to right, #7c45f3, #4d5aec, #72a7f7, #92dae6);
        // overflow: hidden;
        border-radius: 10px;
        .filed-circle {
          position: absolute;
          top: -0px;
          right: 0;
          width: 20px;
          height: 20px;
          border: 4px solid #b0efe8;
          border-radius: 50%;
        }
      }
    }
    .load-title {
      margin-top: 20px;
      color: @ddd;
      dot {
        display: inline-block;
        height: 1em;
        text-align: left;
        overflow: hidden;
        font-weight: bold;
      }
      dot::before {
        display: block;
        content: '...\A..\A.';
        white-space: pre-wrap;
        animation: dot 3s infinite step-start both;
      }
    }
  }
</style>
