import { LayoutPlugin, ButtonPlugin } from 'bootstrap-vue';

const plugins = {
  install(Vue) {
    Vue.use(LayoutPlugin);
    Vue.use(ButtonPlugin);
  }
};

export default plugins;
