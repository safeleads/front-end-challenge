import Vue from 'vue';
import Vuex from 'vuex';
import * as tasks from './modules/tasks.modules.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasks
  }
});
