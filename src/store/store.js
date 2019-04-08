import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// example: import MODULE_NAME from './modules/module_name';
import user_module from './modules/user';

export default new Vuex.Store({
  modules: {
    user_module,
  }
});
