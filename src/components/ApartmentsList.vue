<template>
  <div>
    <div v-for="apartment in apartments" :key="apartment._id">
      <ApartmentsListItem :apartment="apartment" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ApartmentSimple } from "@/types/apartment";
import ApartmentsListItem from "./ApartmentsListItem.vue";

@Component({
  components: { ApartmentsListItem },
})
export default class ApartmentsList extends Vue {
  @Prop({ required: true })
  private apartments!: ApartmentSimple[];
}
</script>