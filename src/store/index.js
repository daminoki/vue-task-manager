import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
  },
});
