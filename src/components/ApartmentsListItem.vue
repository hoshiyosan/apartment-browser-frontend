<template>
  <div>
    apartment item
    {{ apartment.title }}
    {{ apartment.url }}
    {{ apartment.place.name }}
    <button @click="openDetails()">openDetails</button>
  </div>
</template>

<script lang="ts">
import { ApartmentSimple } from "@/types/apartment";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class ApartmentsListItem extends Vue {
  @Prop({ required: true })
  private apartment!: ApartmentSimple;

  private openDetails() {
    this.$router.push({
      name: "ApartmentDetails",
      params: { apartmentId: this.apartment._id },
    });
  }
}
</script>