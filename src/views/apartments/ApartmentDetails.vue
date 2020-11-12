<template>
  <div>
    <v-tabs v-if="apartmentId">
      <v-tab :to="{ name: 'ApartmentSummary', params: { apartmentId } }">
        <v-icon>mdi-clipboard-text-search</v-icon> Résumé</v-tab
      >
      <v-tab :to="{ name: 'ApartmentRooms', params: { apartmentId } }"
        ><v-icon>mdi-cube</v-icon>Pièces</v-tab
      >
      <v-tab :to="{ name: 'ApartmentPricing', params: { apartmentId } }"
        ><v-icon>mdi-currency-eur</v-icon>Coûts</v-tab
      >
      <v-tab
        :to="{
          name: 'ApartmentAnalysis',
          params: { apartmentId },
        }"
      >
        <v-icon>mdi-chart-pie</v-icon> Analyse</v-tab
      >
      <v-tab :to="{ name: 'ApartmentComment', params: { apartmentId } }">
        <v-icon>mdi-comment</v-icon> Commentaires</v-tab
      >
    </v-tabs>

    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class ApartmentDetails extends Vue {
  public apartmentId: string | null = null;

  setSelectApartment() {
    this.apartmentId = this.$route.params.apartmentId;
    if (this.apartmentId) {
      this.$store
        .dispatch("apartments/selectApartment", this.apartmentId)
        .then((response) => {
          console.log(response);
        });
    }
  }

  openTab(name: string) {
    if (this.apartmentId) {
      this.$router.push({
        name,
        params: { apartmentId: this.apartmentId },
      });
    }
  }

  mounted() {
    this.setSelectApartment();
  }
}
</script>