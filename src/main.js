import Vue from 'vue';
import Root from './Root.vue';

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  render: (h) => h(Root),
  el: 'div#app',
});
