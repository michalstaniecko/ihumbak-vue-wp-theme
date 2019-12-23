import Vue from 'vue'
import router from './router'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import './assets/scss/index.scss'


new Vue({
  router,
  render: h=>h(App)
}).$mount('#app')
