<template>
  <div>apartment details {{ apartmentId }}</div>
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