<template>
  <div v-if="selectedApartment" :set="(apartment = selectedApartment)">
    apartment summary {{ apartment }}
    <v-text-field v-model="apartment.title" label="Titre"></v-text-field>
    <google-place-autocomplete label="Adresse" v-model="place" />
    <google-map :place="place" :center="rennes" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Component from "vue-class-component";
import { GPlace, GLocation } from "@/types/location";

@Component({
  computed: { ...mapState("apartments", ["selectedApartment"]) },
})
export default class ApartmentComment extends Vue {
  private rennes: GLocation = {
    lat: 48.117266,
    lng: -1.6777926,
  };

  private place: GPlace | null = { name: "rennes", location: this.rennes };
}
</script>