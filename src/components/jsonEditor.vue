<template>
  <vue-json-editor
    v-model="editorJson"
    class="json-editor-container"
    :show-btns="false"
    :mode="'code'"
    lang="en"
    @json-change="onJsonChange"
    @json-save="onJsonSave"
    @has-error="onError"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

import vueJsonEditor from 'vue-json-editor'

import { haaConfig } from '@/haaConfigTypes'

@Component({
  components: {
    vueJsonEditor
  }
})
export default class JsonEditor extends Vue {
  public editorJson: any = {}

  private defaultJson = {
    default: 'json'
  }

  @Prop({ type: Object, required: false }) private readonly value: any

  @Watch('value', { immediate: true, deep: true })
  onJsonChanged(json: any) {
    console.log(json)

    this.editorJson = { ...json } || this.defaultJson
  }


  onJsonChange(value: any) {
    console.log('value:', value)
    this.$emit('input', value)
  }
  onJsonSave(value:any) {
    console.log('value:', value)
  }
  onError(value:any) {
    console.log('value:', value)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.jsoneditor div.jsoneditor-menu {
  background-color: #252525;
  border: black;
}

.json-editor-container {
  height: 700px;
  width: 100%;
}

.jsoneditor-vue {
  width: 100%;
}

.jsoneditor.jsoneditor-mode-code {
  border-color: white;
}
</style>
