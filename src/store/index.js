import Vue from "vue";
import Vuex from "vuex";

import account from "./modules/account";
import setting from "./modules/setting";
import cache from "./modules/cache";
import state from "./state";
import getters from "./getters";
import mutaions from "./mutations";
import actions from "./actions";

Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  getters,
  mutaions,
  actions,
  modules: {
    account,
    setting,
    cache
  }
});

export default store;
