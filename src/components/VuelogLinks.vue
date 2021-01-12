<template>
  <div class="links">
    <div class="site-content">
      <div class="statement">
        <h1 v-text="$t('home.category')"></h1>
      </div>
      <hr />
      <div class="links-list animate">
        <div
          class="links-item"
          v-for="(category, index) in postsByCategory"
          :key="index"
        >
          <router-link
            class="site-name"
            :to="{
              name: 'archive-category',
              params: { category: category.slug },
            }"
            v-text="i18nify(category.title) + '(' + category.posts.length + ')'"
          ></router-link>
          <div class="site-detail" v-text="i18nify(category.summary)"></div>
        </div>
      </div>
      <div class="statement">
        <h1 v-text="$t('home.page')"></h1>
      </div>
      <hr />
      <div class="links-list animate">
        <div class="links-item" v-for="(page, index) in pages" :key="index">
          <router-link
            :to="{ name: 'page', params: { page: page.slug } }"
            v-text="i18nify(page.title)"
          ></router-link>
          <div class="site-detail" v-text="i18nify(page.summary)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { retrieveByLanguage } from '../utils'

export default {
  name: 'vuelog-links',

  props: ['type', 'metadata'],

  computed: {
    active () {
      return this.$store.getters.lang
    },

    config () {
      return this.$store.getters.config
    },

    postsByCategory () {
      return this.$store.getters.postsByCategory
    },

    pages () {
      return this.$store.getters.pages.filter((page) => !page.exclude)
    },
  },

  methods: {
    i18nify (content) {
      return retrieveByLanguage(content, this.active, this.config.defaultLang)
    },
  },
}
</script>

<style scoped lang="stylus">
.links {
  padding-top: 10px;
}

.links-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  font-weight: 400;

  .title {
    font-size: 20px;
  }

  .apply:hover {
    color: #ff6d6d;
  }
}

.statement {
  text-align: center;
}

.links-list {
  width: 100%;

  .links-item {
    display: inline-block;
    width: 30%;
    margin: 0 5% 20px 0;
    padding: 10px 30px;
    border: 1px solid #ECECEC;
    border-radius: 3px;

    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    &:nth-of-type(3n) {
      margin-right: 0;
    }

    .site-name, .site-detail {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-bottom: 10px;
      line-height: 1.5rem;
    }

    .site-name {
      color: #42b983;
      border-bottom: 1px dotted #ECECEC;
    }

    .site-detail {
      font-size: 13px;
      padding-top: 10px;
    }
  }
}

@media (max-width: 999px) {
  .links-header {
    margin-top: 0;
  }

  .links-list {
    .links-item {
      width: 45%;

      &:nth-of-type(2n) {
        margin-right: 0;
      }

      &:nth-of-type(3n) {
        margin-right: 5%;
      }
    }
  }
}

@media (max-width: 600px) {
  .links-list {
    .links-item {
      display: block;
      width: 90%;
      margin: 0 auto 20px auto;

      &:nth-of-type(2n) {
        margin-right: auto;
      }

      &:nth-of-type(3n) {
        margin-right: auto;
      }
    }
  }
}
</style>
