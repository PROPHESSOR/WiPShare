import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ready: false,
  },

  mutations: {
    ready(state, mode) {
      state.ready = mode;
    },
  },

  actions: {
    ready(store, mode) {
      if (typeof mode !== 'boolean') throw new TypeError('mode must be a Boolean value');

      store.commit('ready', mode);
    },
  },
});
