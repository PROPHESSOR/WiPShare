import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

import App from './App.vue';

Vue.use(VueOnsen);

window.WiPShare = new Vue({
  el: '#app',
  data() {
    return {
      ready: false,
    };
  },
  beforeCreate() {
    this.$ons.platform.select('android');
  },
  methods: {
    initialize() {
      this.ready = true;
    },
  },
  render: h => h(App),
});

document.addEventListener('deviceready', () => {
  window.WiPShare.initialize();
});
