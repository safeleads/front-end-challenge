import axios from 'axios';

export const FETCH_TASKS = async () => {
  return await axios.get('./tarefas.json');
};
