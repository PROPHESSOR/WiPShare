import Vue from 'vue';
import App from './App.vue';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import VueOnsen from 'vue-onsenui';

Vue.use(VueOnsen);

window.WiPShare = new Vue({
  el: '#app',
  beforeCreate() {
    this.$ons.platform.select('android');
  },
  render: h => h(App),
});
