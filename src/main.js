// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/index.js'
Vue.use(Mint)
Vue.prototype.$http = axios;
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
let IsSuccssd = new Vue();