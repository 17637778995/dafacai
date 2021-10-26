import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/reset.css'
import './utils/rem.js'
import autoUseComponent from './plugins/autoUseComponent'
import api from './api'
import scrollMixin from './mixins/scroll'
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(autoUseComponent)
Vue.use(scrollMixin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
