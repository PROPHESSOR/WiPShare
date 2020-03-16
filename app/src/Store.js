import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ready: false,
    version: process.env.PACKAGE_VERSION || '?',
    availableNetworks: null,
    knownNetworks: null,
  },

  mutations: {
    ready(state, mode) {
      state.ready = mode;
    },

    /**
     *
     * @param {Array<WLAN>} networks
     */
    set_available_networks(state, networks) {
      Vue.set(state, 'availableNetworks', networks);
    },

    /**
     *
     * @param {Array<string>} networks
     */
    set_known_networks(state, networks) {
      Vue.set(state, 'knownNetworks', networks);
    },
  },

  actions: {
    ready(store, mode) {
      if (typeof mode !== 'boolean') throw new TypeError('mode must be a Boolean value');

      store.commit('ready', mode);
    },

    /**
     *
     * @param {Array<WLAN>} networks
     */
    set_available_networks(store, networks) {
      if (!networks.every(net => 'BSSID' in net && 'SSID' in net))
        throw new Error('networks must be an array of WLANs');

      store.commit('set_available_networks', networks);
    },

    /**
     *
     * @param {Array<string>} networks
     */
    set_known_networks(store, networks) {
      if (!networks.every(net => typeof net === 'string'))
        throw new Error('networks must be an array of Strings');

      store.commit('set_known_networks', networks);
    },
  },
});
