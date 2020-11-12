<template>
  <v-app-bar app color="dark" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/apartment.svg"
        transition="scale-transition"
        width="40"
      />

      <h1>Appartement</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn text to="/apartments/browse">
      Favoris
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn text to="/settings">
      Paramètres
      <v-icon>mdi-cog</v-icon>
    </v-btn>
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
