import Vue from 'vue'
import App from './App.vue'
import router from './router'
require(`@/plugins/element-ui`)
require(`@/plugins/clipboard`)
require(`@/plugins/base64`)
require(`@/plugins/particles`)
require(`@/plugins/axios`)
require(`@/plugins/device`)

import './assets/css/light.css'
import './assets/css/dark.css'
import '@/icons' // icon

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')