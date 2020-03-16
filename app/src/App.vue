<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">WiPShare v{{ $store.state.version }}</div>
    </v-ons-toolbar>

    <v-ons-progress-bar v-if="!(networks && knownNetworks)" indeterminate />
    <div v-else class="content">
      <v-ons-list>
        <v-ons-list-header>Доступные WIFI сети</v-ons-list-header>
        <WifiListItem v-for="wlan in networks" :key="wlan.bssid" :wlan="wlan" />
      </v-ons-list>

      <v-ons-list>
        <v-ons-list-header>Известные WIFI сети</v-ons-list-header>
        <v-ons-list-item v-for="(name, index) in knownNetworks" :key="name + index">
          {{ name }}
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
import WifiListItem from './WifiListItem.vue';

export default {
  name: 'App',

  components: {
    WifiListItem,
  },

  computed: {
    networks() {
      return this.$store.state.availableNetworks;
    },

    knownNetworks() {
      return this.$store.state.knownNetworks;
    },
  },

  mounted() {
    if (this.$store.state.ready) this.rescan();
    else document.addEventListener('deviceready', () => this.rescan());
  },

  methods: {
    async rescan() {
      console.log('Prepare to rescan');

      const wlan = cordova.require('wifiwizard2.WifiWizard2');

      console.log('wlan module attached', wlan);

      if (!(await wlan.isWifiEnabled())) {
        console.log('Wifi disabled! Trying to enable...');
        const result = await wlan.enableWifi();

        console.log('result', result);

        if (result !== 'OK') console.warn('Result is not OK!'); // TODO: Handle
      }

      wlan
        .scan()
        .then(networks => {
          console.log('networks', networks);
          this.$store.dispatch('set_available_networks', networks);
        })
        .catch(console.error);

      console.log('Getting known networks');

      wlan
        .listNetworks()
        .then(knownNetworks => {
          console.log('knownNetworks', knownNetworks);
          this.$store.dispatch('set_known_networks', knownNetworks);
        })
        .catch(console.error);
    },
  },
};
</script>

<style></style>
