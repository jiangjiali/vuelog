<template>
    <div class="friend">
        <div class="site-content">
            <div class="statement">
                <h1>分类</h1>
            </div>
            <hr/>
            <div class="friend-list animate">
                <div class="friend-item" v-for="(category, index) in postsByCategory" :key="index">
                <router-link class="site-name" :to="{name: 'archive-category', params: {category: category.slug}}" v-text="i18nify(category.title)"></router-link>
                <div class="site-detail" v-text="i18nify(category.summary)"></div></div>
            </div>
            <div class="statement">
                <h1>页面</h1>
            </div>
            <hr/>
            <div class="friend-list animate">
                <div class="friend-item" v-for="(page, index) in pages" :key="index">
                <router-link :to="{name: 'page', params: {page: page.slug}}" v-text="i18nify(page.title)"></router-link>
                <div class="site-detail" v-text="i18nify(page.summary)"></div></div>
            </div>
        </div>
    </div>
</template>

<script>
import { retrieveByLanguage } from '../utils'

export default {
  name: 'vuelog-links',

  computed: {
    displayType () {
      return this.$route.name
    },

    active () {
      return this.$store.getters.lang
    },

    config () {
      return this.$store.getters.config
    },

    postsByCategory () {
      return this.$store.getters.postsByCategory
    },

    postsByYear () {
      return this.$store.getters.postsByYear
    },

    pages () {
      return this.$store.getters.pages.filter(page => !page.exclude)
    },

    archive () {
      switch (this.displayType) {
        case 'archive-category':
          return this.getPostsInCategory(this.$route.params.category)
        case 'archive-year':
          return this.getPostsInYear(+this.$route.params.year)
        case 'archive':
          return this.getAllPostsAndPages()
        default:
          return this.getAllPostsAndPages()
      }
    }
  },

  methods: {
    oops () {
      this.$router.replace('/oops')
    },

    i18nify (content) {
      return retrieveByLanguage(content, this.active, this.config.defaultLang)
    },

    getPostsInCategory (slug) {
      for (var i = 0; i < this.postsByCategory.length; i++) {
        if (this.postsByCategory[i].slug === slug) {
          return this.postsByCategory[i]
        }
      }
      this.oops()
      return { posts: [], slug: '', title: '' }
    },

    getPostsInYear (year) {
      if (Number.isNaN(year)) {
        this.oops()
        return { posts: [], year }
      }
      for (var i = 0; i < this.postsByYear.length; i++) {
        if (this.postsByYear[i].year === year) {
          return this.postsByYear[i]
        }
      }
      return { posts: [], year }
    },

    getAllPostsAndPages () {
      return {
        postsByCategory: this.postsByCategory,
        postsByYear: this.postsByYear,
        pages: this.pages
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

<style scoped lang="stylus">
    .friend{
        padding-top: 40px;
    }
    .friend-header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 80px;
        font-weight: 400;
        .title{
            font-size: 20px;
        }
        .apply:hover{
            color: #ff6d6d;
        }
    }
    .statement{
        text-align: center;
    }
    .friend-list{
        width: 100%;
        .friend-item{
            display: inline-block;
            width: 30%;
            /*height: 100px;*/
            margin: 0 5% 20px 0;
            padding: 10px 30px;
            border: 1px solid #ECECEC;
            border-radius: 3px;
            &:hover{
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            }
            &:nth-of-type(3n){
                margin-right: 0;
            }
            .site-name,.site-detail{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-bottom: 10px;
                line-height: 1.5rem;
            }
            .site-name{
                color: #42b983;
                border-bottom: 1px dotted #ECECEC;
            }
            .site-detail{
                font-size: 13px;
                padding-top: 10px;
            }
        }
    }
    /*******/
    @media (max-width: 999px) {
        .friend-header{
            margin-top: 0;
        }
        .friend-list{
            .friend-item{
                width: 45%;
                &:nth-of-type(2n){
                    margin-right: 0;
                }
                &:nth-of-type(3n){
                    margin-right: 5%;
                }
            }
        }
    }
    @media (max-width: 600px){
        .friend-list{
            .friend-item{
                display: block;
                width: 90%;
                margin: 0 auto 20px auto;
                &:nth-of-type(2n){
                    margin-right: auto;
                }
                &:nth-of-type(3n){
                    margin-right: auto;
                }
            }
        }
    }
</style>
