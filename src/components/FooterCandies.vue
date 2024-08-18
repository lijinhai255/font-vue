<template>
  <div class="fly-footer">
    <p><a target="_blank">苏苏糖果店铺</a> 2024 &copy;</p>
    <p>
      <a
        href="https://mp.weixin.qq.com/s/wDY7UuQld3U6zub5MUCtbQ"
        target="_blank"
        >18615153989</a
      >
      <!-- <a
        href="https://mp.weixin.qq.com/s/H9JI0dR1jPUN12qsRZ2r5Q"
        target="_blank"
        >React兴趣小组</a
      > -->
      <a
        href="javascript:void(0)"
        @mouseover="show()"
        @mouseout="hide()"
        style="position:relative;"
      >
        微信号（xin9627）
        <img
          class="qr"
          v-if="isShow"
          src="../assets/img/qrcode-small.jpg"
          alt
        />
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'FooterCandies',
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    show() {
      this.isShow = true
    },
    hide() {
      setTimeout(() => {
        this.isShow = false
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
.qr {
  width: 120px;
  height: 120px;
  position: absolute;
  left: 0;
  top: -130px;
}
</style>
