<template>
  <div class="vuelog" :class="routeClass">
    <transition name="fade" mode="out-in" appear>
      <vuelog-header :key="active"></vuelog-header>
    </transition>
    <div class="vuelog-body">
      <transition name="fade" mode="out-in" @before-leave="closeSideMenu" @before-enter="resetScroll" appear>
        <router-view :key="routeKey"></router-view>
      </transition>
    </div>
    <transition name="fade" mode="out-in" appear>
      <vuelog-footer v-if="footerVisible" :key="active"></vuelog-footer>
    </transition>
  </div>
</template>

<script>
import VuelogHeader from './components/VuelogHeader'
import VuelogFooter from './components/VuelogFooter'

export default {
  name: 'vuelog',

  components: {
    VuelogHeader,
    VuelogFooter
  },

  computed: {
    active () {
      return this.$store.getters.lang
    },

    config () {
      return this.$store.getters.config
    },

    title () {
      return this.$store.getters.title
    },

    footerVisible () {
      return (this.$route.path !== this.config.homePath) || this.config.homeFooter
    },

    routeClass () {
      var rootRoute = this.$route.name.replace('-more', '')
      return `vuelog-${rootRoute}-view`
    },

    routeKey () {
      // Avoid router-view reload when routing from one part to another in a multiple parts page or post.
      var path = this.$route.path.replace(/\/$/, '')
      if (this.$route.name === 'page-more' || this.$route.name === 'post-more') {
        // By removing the `part` param, different parts of a multiple parts page or post will share the same key.
        return path.replace(/\/\d+$/, '')
      }
      var contentRoutes = ['posts', 'posts-more', 'category', 'category-more', 'post', 'post-more', 'page', 'page-more']
      if (contentRoutes.indexOf(this.$route.name) > -1) {
        return path
      }
      return path + '@' + this.active
    }
  },

  metaInfo () {
    return {
      title: this.title,
      htmlAttrs: {
        lang: this.active
      }
    }
  },

  methods: {
    closeSideMenu () {
      this.$store.dispatch('sideMenu', false)
    },

    setLanguage (lang) {
      this.$store.dispatch('systemLanguage', lang)
    },

    resetScroll () {
      window.scrollTo(0, 0)
    }
  },

  created () {
    if (this.$route.query.lang) {
      this.setLanguage(this.$route.query.lang)
    }
  },

  watch: {
    $route (to, from) {
      if (to.query.lang !== from.query.lang) {
        this.setLanguage(to.query.lang)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .vuelog
    min-height 100%
    display flex
    flex-direction column
    align-items center

  .vuelog-body
    flex 1
    display flex
    flex-direction column
    width 100%
    max-width: 1140px;
    padding 100px 20px 15px

  @media screen and (max-width: 1200px)
    .vuelog-body
      max-width: 1140px;
      padding-top 60px

  @media screen and (max-width: 992px)
    .vuelog-body
      max-width: 960px;
      padding-top 50px

  @media screen and (max-width: 768px)
    .vuelog-body
      max-width: 720px;
      padding-top 50px

  @media screen and (max-width: 576px)
    .vuelog-body
      max-width: 540px;
      padding-top 50px

</style>
