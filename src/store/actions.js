import types from "./mutation-types";

// 获取全局的信息
const getGlobalInfo = function({ commit, dispatch }) {
  return service
    .get({
      url: ""
    })
    .then(data => {
      commit(types.SET_GLOBAL_INFO, data);
      commit(types.SET_STORAGE_DATA, data);
    })
    .catch(e => {
      console.log(e);
    });
};

export default {
  getGlobalInfo
};
