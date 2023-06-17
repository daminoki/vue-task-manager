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
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    editTask(state, editedTask) {
      state.tasks.splice(
        state.tasks.findIndex((task) => task.id === editedTask.id),
        1,
        editedTask,
      );
    },
    toggleFinishTask(state, task) {
      state.tasks.splice(
        state.tasks.findIndex((item) => item.id === task.id),
        1,
        task,
      );
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    deleteTask({ commit }, taskId) {
      commit('deleteTask', taskId);
    },
    editTask({ commit }, editedTask) {
      commit('editTask', editedTask);
    },
    toggleFinishTask({ commit }, task) {
      commit('toggleFinishTask', task);
    },
  },
});
