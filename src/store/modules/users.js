import axios from "../../api/axios.js";

const state = {
  users: [],
  starter: true
};

const getters = {
  USERS(state) {
    return state.users;
  }
};

const actions = {
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
  },
  ADD_USER({ commit }, user) {
    commit("ADD_USER", user);
  },
  UPDATE_NAME_USER({ commit }, obj) {
    commit("UPDATE_NAME_USER", obj);
  },
  UPDATE_EMAIL_USER({ commit }, obj) {
    commit("UPDATE_EMAIL_USER", obj);
  },
  UPDATE_DEV_USER({ commit }, obj) {
    commit("UPDATE_DEV_USER", obj);
  },
  UPDATE_COUNTRY_USER({ commit }, obj) {
    commit("UPDATE_COUNTRY_USER", obj);
  }
};

const mutations = {
  GET_USERS(state, users) {
    state.users = users;
  },
  DELETE_USER(state, user) {
    state.users = state.users.filter(item => item.id !== user.id);
  },
  ADD_USER(state, user) {
    state.users.push(user);
  },
  UPDATE_NAME_USER(state, obj) {
    state.users[obj.id].name = obj.value;
  },
  UPDATE_EMAIL_USER(state, obj) {
    state.users[obj.id].email = obj.value;
  },
  UPDATE_DEV_USER(state, obj) {
    state.users[obj.id].dev = obj.value;
  },
  UPDATE_COUNTRY_USER(state, obj) {
    state.users[obj.id].country = obj.value;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
