const state = {
  starter: true
};

const getters = {
  STARTER(state) {
    return state.starter;
  }
};

const actions = {
  UPDATE_STARTER({ commit }) {
    commit("UPDATE_STARTER");
  }
};

const mutations = {
  UPDATE_STARTER(state) {
    state.starter = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
