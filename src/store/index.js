import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    authenticated: false
  },
  actions: {
    login (context) {
      context.commit('login')
    }
  },
  mutations: {
    login (state) {
      state.authenticated = true
    },
    logout (state) {
      state.authenticated = false
    }
  },
  getters: {
    isAuthenticated: state => {
      return state.authenticated
    }
  }
})

export default store