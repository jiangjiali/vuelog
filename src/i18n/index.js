import Vue from 'vue'
import VueI18n from 'vue-i18n'
import database from '../../data'
import { locales } from './locales'

Vue.use(VueI18n)

export default new VueI18n({
  locale: database.config.defaultLang,
  messages: locales
})
