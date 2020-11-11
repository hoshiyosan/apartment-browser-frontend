<template>
  <div class="home">
    <ApartmentsList :apartments="apartments" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ApartmentsList from "@/components/ApartmentsList.vue"; // @ is an alias to /src
import { ApartmentSimple } from "@/types/apartment";
///import { ApartmentSimple } from "@/types/apartment";

@Component({
  data: () => ({
    apartments: [
      {
        _id: "d4fez4f165ez4f",
        title: "yolo",
        url: "http://leboncoin.fr/apartmentments/565f89ez74f987z",
        place: { name: "Rennes", location: { lat: 1, lng: 2 } },
      },
    ],
  }),
  components: {
    ApartmentsList,
  },
})
export default class BrowseApartments extends Vue {
  private apartments: ApartmentSimple[] = [];

  mounted() {
    this.$store.dispatch("browseApartments").then((apartments) => {
      this.apartments = apartments;
    });
  }
}
</script>
