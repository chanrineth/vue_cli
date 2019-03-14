import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import VueToastr from '@deveodk/vue-toastr'


Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(VueToastr, {
    defaultPosition: 'toast-top-right',
    defaultType: 'info',
    defaultTimeout: 1000
})

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
