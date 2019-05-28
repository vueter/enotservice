import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAdmin: false,
    isGuest: true,
    user: null
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
