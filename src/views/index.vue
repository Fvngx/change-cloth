<template>
  <div :class="`wrapper app-${showType}`">
    <transition v-if="showType === 'loading'" name="up">
      <loading v-if="showType === 'loading'" />
    </transition>
    <transition name="up">
      <introduce v-if="showType === 'introduce'" />
    </transition>
    <transition name="up">
      <register v-if="showType === 'register'" />
    </transition>
    <transition name="up">
      <pic-choose v-if="showType === 'picChoose'" />
    </transition>
    <transition name="up">
      <my-mass v-if="showType === 'mass'" />
    </transition>
    <transition name="up">
      <award v-if="showType === 'award'" />
    </transition>
  </div>
</template>

<script>
  import { defineComponent, onMounted } from 'vue'
  import loading from './others/loadingData.vue'
  import introduce from './others/introduce.vue'
  import register from './others/register.vue'
  import picChoose from './others/pic-choose.vue'
  import PicChoose from './others/pic-choose.vue'
  import myMass from './others/mass.vue'
  import award from './others/award.vue'
  export default defineComponent({
    components: {
      loading,
      introduce,
      register,
      picChoose,
      PicChoose,
      myMass,
      award
    },
    computed: {
      showType() {
        return this.$store.state.showType
      }
    },
    setup() {
      // const showType = ref('introduce')
      onMounted(() => {
        // showType.value = 'introduce'
      })
      return {
        // showType
      }
    }
  })
</script>

<style lang="less">
  .wrapper {
    width: 100%;
    height: 100%;
  }
</style>
