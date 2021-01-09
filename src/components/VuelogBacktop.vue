<template>
  <div v-show="isShowBackTop" class="vp-backtop" @click="backtopHandle">
    <slot>UP</slot>
  </div>
</template>

<script>
export default {
  name: 'vuelog-backtop',
  props: {
    target: [String],
    visibilityHeight: {
      type: Number,
      default: 200,
    },
  },
  data () {
    return {
      controllNum: 80,
      intervalDelay: 1,
      timer: null,
      isShowBackTop: false,
    }
  },
  mounted () {
    window.addEventListener('scroll', this.debounce(this.scrollHandle, 100))
  },
  methods: {
    // 防抖
    debounce (fn, wait) {
      let timer = null
      return function () {
        if (timer !== null) clearInterval(timer)
        timer = setTimeout(fn, wait)
      }
    },
    // 点击置顶事件
    backtopHandle (e) {
      this.$emit('click', e, this.target)
      clearInterval(this.timer)
      var target
      if (!this.target) {
        target = document.documentElement || document.body
      } else {
        if (/^\./.test(this.target)) {
          target = document.getElementsByClassName(this.target.substring(1))[0]
        } else if (/^#/.test(this.target)) {
          target = document.getElementById(this.target.substring(1))
        }
      }
      const _this = this
      if (target.offsetTop < document.documentElement.scrollTop) {
        this.timer = window.setInterval(() => {
          document.documentElement.scrollTop -= this.controllNum
          if (document.documentElement.scrollTop <= target.offsetTop) {
            _this.$emit('backtop', e, _this.target)
            window.clearInterval(_this.timer)
          }
        }, _this.intervalDelay)
      } else {
        this.timer = window.setInterval(() => {
          document.documentElement.scrollTop += this.controllNum
          if (document.documentElement.scrollTop >= target.offsetTop) {
            _this.$emit('backtop', e, _this.target)
            window.clearInterval(_this.timer)
          }
        }, _this.intervalDelay)
      }
    },
    // 滚动事件
    scrollHandle () {
      const scrolltop = document.documentElement.scrollTop
      if (scrolltop >= this.visibilityHeight) {
        this.isShowBackTop = true
      } else {
        this.isShowBackTop = false
      }
    },
  },
}
</script>
<style scoped>
.vp-backtop {
  cursor: pointer;
  position: fixed;
  z-index: 999;
  right: 120px;
  bottom: 80px;
  padding: 8px 8px;
  border: 1px solid #42b983;
  border-radius: 50%;
  background-color: #42b983;
  color: #fff;
}

@media screen and (max-width: 999px) {
  .vp-backtop {
    right: 8px;
  }
}
</style>
