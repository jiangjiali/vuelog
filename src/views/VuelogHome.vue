<template>
  <div class="home">
    <img src="../assets/img/vuelog.svg">
    <h1 v-text="$t('home.title')"></h1>
    <p v-text="$t('home.description')"></p>
    <vuelog-links></vuelog-links>
  </div>
</template>

<script>
import VuelogLinks from '../components/VuelogLinks'
import { retrieveByLanguage } from '../utils'

export default {
  name: 'home',

  components: {
    VuelogLinks
  },

  computed: {
    active () {
      return this.$store.getters.lang
    },

    config () {
      return this.$store.getters.config
    },

    about () {
      return '/#/page/about'
    },

    archive () {
      return '/#/archive'
    },

    title () {
      var title = this.$t('home.title')
      var brand = retrieveByLanguage(this.config.brand, this.active, this.config.defaultLang)
      if (this.config.brandTrailing) {
        return title + ' | ' + brand
      } else {
        return brand + ' | ' + title
      }
    }

  },

  created () {
    this.$store.dispatch('documentTitle', this.title)
  },

  watch: {
    $route (to, from) {
      if (to.query.lang !== from.query.lang) {
        this.$store.dispatch('documentTitle', this.title)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    text-align center

  img
    display inline-block
    height 256px
    width 256px
    margin-top 25px

  h1
    font-weight 600
    font-size 60px
    margin-top 16px
    margin-bottom 36px

  p
    color #7f8c8d
    font-size 20px
    margin-bottom 24px

  @media screen and (max-width: 999px)
    img
      height 192px
      width 192px
      margin-top 32px

    h1
    p
      margin-top 15px
      margin-bottom 15px
</style>
