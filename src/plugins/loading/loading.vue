<template>
  <div class="fix-loading">{{ showInfo }}</div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      }
    },
    computed: {
      showInfo(props) {
        if (props.title) {
          return props.title
        }
        return '加载中...'
      }
    }
  }
</script>

<style lang="less">
  .fix-loading {
    position: fixed;
    left: 50%;
    top: 50%;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    width: 100px;
    height: 100px;
    line-height: 100px;
  }
</style>
