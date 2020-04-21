import { currency } from '~/filters/currency';

const filters = {
  install(Vue) {
    Vue.filter('currency', currency);

    Vue.prototype.$filters = Vue.options.filters;
  }
};

export default filters;
