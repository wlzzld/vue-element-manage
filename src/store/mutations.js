import types from "./mutation-types";

const mutaions = {
  [types.SET_LIST](state, data = []) {
    state.list = data;
  }
};

export default mutations;
