import { FETCH_TASKS } from '~/services/api';

export const namespaced = true;

export const state = {
  tasks: []
};

export const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks;
  },
  addTask(state, task) {
    const taskSelected = state.tasks.find(t => t.id === task.id);
    taskSelected.data.push({
      ...task.data,
      id: taskSelected.last_id++
    });
  },
  removeTask(state, task) {
    state.tasks.data.slice(state.tasks.findIndex(task.id), 1, task.data);
  }
};

export const actions = {
  async fetch({ commit }) {
    try {
      const { data } = await FETCH_TASKS();
      commit('setTasks', data.tarefas);
    } catch (error) {
      throw new Error(error.data.message);
    }
  },
  async post({ commit }, payload) {
    commit('addTask', payload);
  }
};
