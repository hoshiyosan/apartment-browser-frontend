<template>
  <v-app>
    <AppNavigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import AppNavigation from "./AppNavigation.vue";

@Component({
  components: { AppNavigation },
})
export default class App extends Vue {}
</script>
