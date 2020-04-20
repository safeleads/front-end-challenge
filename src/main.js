import './assets/sass/style.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Plugins from './global/plugins';

Vue.use(Plugins);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
