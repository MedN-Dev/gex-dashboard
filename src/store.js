import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // удалить в prod
  strict: true,
  state: {
    users: []
  },
  getters: {
    users(state) {
      return state.users;
    }
  },
  actions: {
    downloadUsers({ commit }, users) {
      commit("DOWNLOAD_USERS", users);
    },
    deleteUser({ commit }, user) {
      commit("DELETE_USER", user);
    }
  },
  mutations: {
    DOWNLOAD_USERS(state, users) {
      state.users = users;
    },
    DELETE_USER(state, user) {
      state.users = state.users.filter(item => item.id !== user.id);
    }
  }
});
