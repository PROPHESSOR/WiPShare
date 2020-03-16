<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">WiPShare</div>
    </v-ons-toolbar>

    <v-ons-list>
      <v-ons-list-header>Известные WIFI сети</v-ons-list-header>
      <WifiListItem v-for="wlan in networks" :key="wlan.bssid" :wlan="wlan" />
    </v-ons-list>
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
    };
  },

  mounted() {
    // FIXME: 
    if (window.WiPShare.ready) this.rescan();
  },

  methods: {
    async rescan() {
      console.log('Prepare to rescan');

      const wlan = cordova.require('wifiwizard2.WifiWizard2');

      console.log('wlan module attached', wlan);

      await wlan.startScan();

      console.log('scan ended');

      const networks = await wlan.getScanResults();

      console.log('networks', networks);

      this.networks = networks;
    }
  },
};
</script>

<style></style>
