<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">WiPShare</div>
    </v-ons-toolbar>

    <div class="content">
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

  data() {
    return {
      networks: [
        {
          BSSID: '00:00:00:00:00:00',
          password: '12345678',
        },
        {
          BSSID: '00:00:00:00:00:01',
          password: '12345679',
        },
      ],
      knownNetworks: [],
    };
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

      const networks = await wlan.scan();

      console.log('networks', networks);

      this.networks = networks;

      console.log('Getting known networks');

      const knownNetworks = await wlan.listNetworks();

      console.log('knownNetworks', knownNetworks);

      this.knownNetworks = knownNetworks;
    },
  },
};
</script>

<style></style>
