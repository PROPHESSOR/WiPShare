<template>
  <v-ons-list-item expandable :expanded.sync="isExpanded">
    {{ wlan.bssid }}
    <div class="expandable-content">{{ wlan.password }}</div>
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
