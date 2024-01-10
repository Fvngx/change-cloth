<template>
  <div :class="`wrapper app-${showType}`">
    <transition name="up">
      <loadingData key="1" v-if="showType === 'loading'" />
    </transition>
    <transition name="up">
      <introduce key="2" v-if="showType === 'introduce'" />
    </transition>
    <transition name="up">
      <zhulipage key="3" v-if="showType === 'zhuli'" />
    </transition>
    <transition name="up" v-if="showType === 'draw'">
      <drawcanvas />
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
  import { computed } from 'vue'
  import loadingData from './others/loadingData.vue'
  import introduce from './others/introduce.vue'
  import zhulipage from './others/zhuli.vue'
  import drawcanvas from './others/drawcanvas.vue'
  // import register from './others/register.vue'
  // import picChoose from './others/pic-choose.vue'
  // import myMass from './others/mass.vue'
  // import award from './others/award.vue'

  import store from '@/store'

  const showType = computed(() => store.state.showType)
  // export default defineComponent({
  //   components: {
  //     loading,
  //     introduce,
  //     register,
  //     picChoose,
  //     myMass,
  //     award
  //   },
  //   computed: {
  //     showType() {
  //       return this.$store.state.showType
  //     }
  //   },
  //   setup() {
  //     // const showType = ref('introduce')
  //     onMounted(() => {
  //       // showType.value = 'introduce'
  //     })
  //     return {
  //       // showType
  //     }
  //   }
  // })
</script>

<style lang="less">
  .wrapper {
    width: 100%;
    height: 100%;
  }
</style>
