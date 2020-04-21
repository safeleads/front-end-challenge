import {
  LayoutPlugin,
  ButtonPlugin,
  SidebarPlugin,
  NavPlugin,
  ImagePlugin,
  NavbarPlugin,
  TabsPlugin,
  CardPlugin,
  FormRadioPlugin,
  FormGroupPlugin
} from 'bootstrap-vue';

const plugins = {
  install(Vue) {
    Vue.use(LayoutPlugin);
    Vue.use(ButtonPlugin);
    Vue.use(SidebarPlugin);
    Vue.use(NavPlugin);
    Vue.use(ImagePlugin);
    Vue.use(NavbarPlugin);
    Vue.use(TabsPlugin);
    Vue.use(CardPlugin);
    Vue.use(FormRadioPlugin);
    Vue.use(FormGroupPlugin);
  }
};

export default plugins;
