<template>
  <v-app-bar app color="dark" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn text to="/apartments/browse"> Appartements </v-btn>
    <v-btn text to="/settings"> Settings </v-btn>
  </v-app-bar>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  data: () => ({
    dark: true,
  }),
})
export default class AppNavigation extends Vue {}
</script>


<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
