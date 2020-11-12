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
    apartments: [],
  }),
  components: {
    ApartmentsList,
  },
})
export default class BrowseApartments extends Vue {
  private apartments: ApartmentSimple[] = [];

  mounted() {
    this.$store.dispatch("apartments/browseApartments").then((apartments) => {
      this.apartments = apartments;
    });
  }
}
</script>
