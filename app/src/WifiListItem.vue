<template>
  <v-ons-list-item expandable :expanded.sync="isExpanded">
    {{ wlan.SSID || wlan.BSSID }}
    <div class="expandable-content">{{ JSON.stringify(wlan) }}</div>
  </v-ons-list-item>
</template>

<script>
export default {
  props: {
    wlan: Object,
  },

  data() {
    return {
      isExpanded: false,
    };
  },
};
</script>

<style></style>
