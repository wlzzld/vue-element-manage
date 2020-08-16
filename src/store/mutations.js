import types from "./mutation-types";

const mutations = {
  [types.SET_LIST](state, data = []) {
    state.list = data;
  }
};

export default mutations;
