<template>
  <div class="pic-choose flex flex-column flex-center">
    <div class="btn-box">
      <my-btn type="primary">从相册导入</my-btn>
      <input class="updata" ref="iptImg" type="file" accept="image/*" @change="onChange" />
    </div>
    <img :src="imgUrl" style="width: 100%" alt="" />
  </div>
</template>

<script>
  import myBtn from '../../components/myBtn.vue'
  import { ref } from 'vue'
  export default {
    components: {
      myBtn
    },
    setup() {
      const imgUrl = ref(null)
      const iptImg = ref(null)
      const orval = ref()

      const tinyPic = (img) => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const na_w = img.naturalWidth
        const na_h = img.naturalHeight

        orval.value = `w:${na_w}-h:${na_h}`

        let w = na_w > 1080 ? 1080 : na_w
        let h = (na_h / na_w) * w
        if (h > 1080) {
          w = (w / h) * 1080
          h = 1080
        }

        canvas.width = w
        canvas.height = h
        ctx.drawImage(img, 0, 0, w, h)
        return canvas.toDataURL('image/jpg', 1.0)
      }

      const onChange = async (ev) => {
        // console.log(iptImg.value)
        // const file = iptImg.value
        const file = ev.target.files[0]
        if (!file) return
        let obj = new FileReader()
        obj.readAsDataURL(file)
        obj.onload = () => {
          let img = new Image()
          img.src = obj.result
          img.onload = () => {
            imgUrl.value = tinyPic(img)
          }
        }
      }

      return {
        imgUrl,
        iptImg,
        orval,
        onChange
      }
    }
  }
</script>

<style lang="less">
  .pic-choose {
    width: 100%;
    height: 100%;
    .btn-box {
      position: relative;
      .updata {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  }
</style>
