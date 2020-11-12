<template>
  <v-app>
    <AppNavigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>


<script lang="ts">
import AppNavigation from "./AppNavigation.vue";
import Vue from "vue";
export default Vue.extend({
  components: { AppNavigation },
});
</script>
