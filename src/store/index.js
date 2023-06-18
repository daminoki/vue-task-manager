import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')),
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    editTask(state, editedTask) {
      state.tasks.splice(
        state.tasks.findIndex((task) => task.id === editedTask.id),
        1,
        editedTask,
      );
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleFinishTask(state, task) {
      state.tasks.splice(
        state.tasks.findIndex((item) => item.id === task.id),
        1,
        task,
      );
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
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
