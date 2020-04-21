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
  FormGroupPlugin,
  BadgePlugin
} from 'bootstrap-vue';

import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/pt-br';

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
    Vue.use(BadgePlugin);

    Vue.use(VueMoment, { moment });
  }
};

export default plugins;
