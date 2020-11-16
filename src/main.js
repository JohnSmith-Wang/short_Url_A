import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'

import axios from 'axios' /*啟用axios */
import VueAxios from 'vue-axios' /*啟用axios */

import Loading from 'vue-loading-overlay' /*新增Loading套件，另外他是個元件，所以需要額外啟用*/
import 'vue-loading-overlay/dist/vue-loading.css' /*新增Loading的CSS */

import 'bootstrap'

Vue.config.productionTip = false


Vue.use(VueAxios, axios) /*啟用axios */

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zhTW'
})

Vue.use(VeeValidate, {
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
})

Vue.component('Loading',Loading)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
