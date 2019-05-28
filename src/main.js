import Vue from 'vue'
import './plugins/vuetify'
import './plugins/enotservice'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.config.keyCodes.f2 = 113


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
