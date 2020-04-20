import {
  LayoutPlugin,
  ButtonPlugin,
  SidebarPlugin,
  NavPlugin,
  ImagePlugin
} from 'bootstrap-vue';

const plugins = {
  install(Vue) {
    Vue.use(LayoutPlugin);
    Vue.use(ButtonPlugin);
    Vue.use(SidebarPlugin);
    Vue.use(NavPlugin);
    Vue.use(ImagePlugin);
  }
};

export default plugins;
