<template>
  <div :set="(apartment = selectedApartment)">
    apartment summary {{ apartment }}
    <v-text-field v-model="apartment.title" label="Titre"></v-text-field>
    <v-text-field
      v-model="apartment.place.name"
      label="Adresse"
      readonly
    ></v-text-field>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import Component from "vue-class-component";

@Component({
  computed: { ...mapState("apartments", ["selectedApartment"]) },
})
export default class ApartmentComment extends Vue {}
</script>