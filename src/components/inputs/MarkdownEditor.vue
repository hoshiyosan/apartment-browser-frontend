<template>
  <main>
    <v-btn
      fab
      small
      @click="save()"
      v-if="isEditing"
      color="orange"
      style="position: absolute; right: 2em; z-index: 9999; margin-top: 2em"
    >
      <v-icon>mdi-content-save</v-icon></v-btn
    >
    <v-btn
      fab
      small
      @click="toggleMode()"
      v-if="!isEditing"
      color="blue"
      style="position: absolute; right: 2em; z-index: 9999; margin-top: 2em"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <textarea ref="markdown-editor"> </textarea>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import SimpleMDE from "simplemde";

@Component({})
export default class MarkdownEditor extends Vue {
  @Prop({ required: true }) private markdown!: string;

  @Watch("markdown", { immediate: true, deep: true })
  markdownChanged(value: string) {
    this.setMarkdown(value);
  }

  // @ts-ignore: Unreachable code error
  private editor!: any;
  private isEditing = true;

  toggleMode() {
    if (this.editor) {
      this.editor.togglePreview();
      this.isEditing = !this.isEditing;
    }
  }

  setMarkdown(markdown: string) {
    if (this.editor && markdown) {
      this.editor.value(markdown);
    }
  }

  mounted() {
    const textarea = document.querySelector("textarea");
    if (textarea) {
      // instanciate markdown editor on textarea
      // https://github.com/sparksuite/simplemde-markdown-editor
      this.editor = new SimpleMDE({
        element: textarea,
        toolbar: true, // quick fix (toolbar need to be truth-worthy to use togglePreview)
      });
      // set initial value from eventually
      this.setMarkdown(this.markdown);
      this.toggleMode();
    }
  }

  beforeDestroy() {
    if (this.editor.element) {
      this.$el.removeChild(this.editor.element);
    }
  }

  save() {
    this.$emit("save", this.editor.value());
    this.toggleMode();
  }
}
</script>