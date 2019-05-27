import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import { Ripple } from 'vuetify/lib/directives'
Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#00763E'
  },
  directives: {
    Ripple
  }
})
