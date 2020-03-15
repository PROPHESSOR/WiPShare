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
import WifiListItem from './WifiListItem';

export default {
  name: 'app',

  components: {
    WifiListItem
  },

  data () {
    return {
      networks: [
        {
          bssid: '00:00:00:00:00:00',
          password: '12345678'
        },
        {
          bssid: '00:00:00:00:00:01',
          password: '12345679'
        },
      ]
    }
  }
}
</script>

<style>
</style>
