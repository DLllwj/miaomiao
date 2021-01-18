import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import Scroll from "@/components/Scroll"
Vue.component('Scroll', Scroll)

import Loading from "@/components/Loading"
Vue.component("Loading", Loading)

Vue.prototype.axios = axios;//在原型上调用，使其在每个Vue中都可以用this调用
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
