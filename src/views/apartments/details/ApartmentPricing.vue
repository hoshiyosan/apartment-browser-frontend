<template>
  <div>
    <h2>Dépenses</h2>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Libellé</th>
            <th class="text-left">Montant</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cost in selectedApartment.costs" :key="cost.name">
            <td>{{ cost.name }}</td>
            <td>{{ cost.amount }} €</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-text-field
      v-for="cost in selectedApartment.costs"
      :key="cost.name"
      :label="cost.name"
      v-model="cost.amount"
      hide-details="auto"
    ></v-text-field>
    <v-btn color="primary" @click="addCost()">Ajouter un cout</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Component from "vue-class-component";
import { Apartment } from "@/types/apartment";

@Component({
  computed: { ...mapState("apartments", ["selectedApartment"]) },
})
export default class ApartmentComment extends Vue {
  private selectedApartment!: Apartment;

  addCost() {
    const name = prompt("Nom de la dépense?");
    if (name) {
      this.selectedApartment.costs.push({ name, amount: 0 });
    }
    console.log(name);
  }
}
</script>