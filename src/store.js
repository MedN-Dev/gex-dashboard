import Vue from "vue";
import Vuex from "vuex";
import axios from "./api/axios.js";

Vue.use(Vuex);

export default new Vuex.Store({
  // -------------------------------удалить в prod
  strict: true,
  state: {
    users: []
  },
  getters: {
    USERS(state) {
      return state.users;
    }
  },
  actions: {
    GET_USERS: async context => {
      await axios
        .get("/users.json")
        .then(response => {
          if (response.status === 200) {
            context.commit("GET_USERS", response.data);
          }
        })
        .catch(error => console.error(error));
    },
    DELETE_USER({ commit }, user) {
      commit("DELETE_USER", user);
    }
  },
  mutations: {
    GET_USERS(state, users) {
      state.users = users;
    },
    DELETE_USER(state, user) {
      state.users = state.users.filter(item => item.id !== user.id);
    }
  }
});
