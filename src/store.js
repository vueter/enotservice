import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var user = null
var isGuest = true

if(localStorage !== undefined){
  if(localStorage.user){
    user = JSON.parse(localStorage.getItem('user'))
    isGuest = false
  }
}

export default new Vuex.Store({
  state: {
    isAdmin: false,
    isGuest: isGuest,
    user: user
  },
  mutations: {
    adminLogout(state){
      state.isAdmin = false
    },
    adminLogin(state){
      state.isAdmin = true
    },
    updateUser(state, paylod){
      state.user = paylod
      localStorage.setItem('user', JSON.stringify(paylod))
    },
    login(state){
      state.isGuest = false
    },
    logout(state){
      state.isGuest = true
    }
  },
  actions: {

  }
})
