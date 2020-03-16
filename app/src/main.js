import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

import store from './Store';

import App from './App.vue';

Vue.use(VueOnsen);

window.WiPShare = new Vue({
  el: '#app',
  store,

  beforeCreate() {
    this.$ons.platform.select('android');
  },

  render: h => h(App),
});

document.addEventListener('deviceready', () => {
  window.WiPShare.$store.dispatch('ready');
});
