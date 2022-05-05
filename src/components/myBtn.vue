<template>
  <button class="my-btn" :class="[size, type]" :style="bgString">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      bg: {
        type: String
      },
      title: {
        type: String
      },
      size: {
        type: String
      },
      type: {
        type: String
      }
    },
    computed: {
      bgString: (props) => {
        let bgStr = ''
        if (props.bg) {
          bgStr = `background:url(${props.bg}) center center no-repeat`
        }

        return bgStr
      }
    },
    data: function () {
      return {}
    }
  }
</script>

<style lang="less">
  .my-btn {
    width: 30vw;
    // height: 8vw;
    line-height: 8vw;
    background-size: cover;
    color: white;
    background-color: @999;
    border: unset;
    border-radius: 1vw;
    &.small {
      width: 16vw;
    }
    &.primary {
      background-color: @primary !important;
    }
  }
</style>
