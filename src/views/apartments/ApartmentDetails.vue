<template>
  <div>
    <v-tabs>
      <v-tab> <v-icon>mdi-clipboard-text-search</v-icon> Résumé</v-tab>
      <v-tab><v-icon>mdi-cube</v-icon>Pièces</v-tab>
      <v-tab><v-icon>mdi-currency-eur</v-icon>Coûts</v-tab>
      <v-tab> <v-icon>mdi-chart-pie</v-icon> Analyse</v-tab>
      <v-tab> <v-icon>mdi-comment</v-icon> Commentaires</v-tab>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class ApartmentDetails extends Vue {
  public apartmentId: string | null = null;

  getCurrentApartment() {
    const apartmentId = this.$route.params.apartmentId;
    if (apartmentId) {
      this.$store
        .dispatch("getApartmentDetails", apartmentId)
        .then((response) => {
          console.log(response);
        });
    }
  }

  mounted() {
    this.getCurrentApartment();
  }
}
</script>