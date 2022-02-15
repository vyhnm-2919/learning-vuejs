const auth = {
  namespaced: true,
  state: () => ({
    isAuthenticated: false
  }),
  mutations: {
    TOGGLE_AUTH: state => {
      state.isAuthenticated = !state.isAuthenticated
    }
  },
  actions: {
    toggleAuth({ commit }) {
      commit('TOGGLE_AUTH')
    },
  },
  getters: {
  }
}

export default auth
