<template>
  <div v-show="show" class="vp-backtop" @click.stop="getTop">
    <slot>UP</slot>
  </div>
</template>

<script>
export default {
  name: 'vuelog-backtop',
  data () {
    return {
      show: false
    }
  },
  methods: {
    scroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 150) {
        this.show = true
      } else {
        this.show = false
      }
    },
    getTop () {
      const timer = setInterval(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        const speed = Math.ceil(scrollTop / 3)
        document.documentElement.scrollTop = scrollTop - speed
        if (scrollTop === 0) {
          clearInterval(timer)
        }
      }, 20)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scroll)
  }
}
</script>

<style scoped lang="stylus">
.vp-backtop {
  cursor: pointer;
  position: fixed;
  z-index: 999;
  right: 16px;
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
