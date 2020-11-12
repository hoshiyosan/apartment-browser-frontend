<template>
  <v-row justify="center">
    <v-dialog v-model="showDialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-on="on"
          v-bind="attrs"
          :color="btnColor"
          :icon="btnIcon && !btnText"
        >
          <v-icon v-if="btnIcon">{{ btnIcon }}</v-icon>
          {{ btnText }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>
        <v-card-text
          >Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="cancel()">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text @click="agree()"> Agree </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class ConfirmationDialog extends Vue {
  private showDialog = false;

  @Prop()
  private btnIcon!: string;

  @Prop()
  private btnText!: string;

  @Prop()
  private btnColor!: string;

  private cancel() {
    this.$emit("cancel");
    this.showDialog = false;
  }
  private agree() {
    this.$emit("agree");
    this.showDialog = false;
  }
}
</script>