<template>
  <v-list-item>
    <v-list-item-icon><v-icon>mdi-home-city</v-icon></v-list-item-icon>
    <v-list-item-content @click="openApartmentDetails()">
      <v-list-item-title v-text="apartment.place.name"></v-list-item-title>
      <v-list-item-subtitle v-text="apartment.title"></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <ConfirmationDialog
        btn-color="red"
        btn-icon="mdi-delete"
        @agree="deleteApartment()"
      />
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ApartmentSimple } from "@/types/apartment";
import ConfirmationDialog from "./dialogs/ConfirmationDialog.vue";

@Component({
  components: { ConfirmationDialog },
})
export default class ApartmentsListItem extends Vue {
  @Prop({ required: true })
  private apartment!: ApartmentSimple;

  private openApartmentDetails() {
    this.$router.push({
      name: "ApartmentSummary",
      params: { apartmentId: this.apartment._id },
    });
  }

  private deleteApartment() {
    this.$store.dispatch("deleteApartment", this.apartment._id);
  }
}
</script>