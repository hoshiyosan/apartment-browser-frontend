<template>
  <div>
    <MarkdownEditor
      v-if="selectedApartment"
      :markdown="selectedApartment.comment"
      @save="onSave"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Component from "vue-class-component";
import MarkdownEditor from "@/components/inputs/MarkdownEditor.vue";

@Component({
  components: { MarkdownEditor },
  computed: { ...mapState("apartments", ["selectedApartment"]) },
})
export default class ApartmentComment extends Vue {
  private onSave(markdown: string) {
    console.log(this.$store.state);
    console.log("saved", markdown);
  }
}
</script>