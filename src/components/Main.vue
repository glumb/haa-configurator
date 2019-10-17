<template>
  <div class="hello">
    <h1 class="title is-2">HAA Json Configurator</h1>

    <b-field label="sample config" horizontal>
      <b-field>
        <b-select v-model="selectedConfig" placeholder="Configuration">
          <option v-for="(option,i) in configs" :key="i" :value="i">{{ option.title }}</option>
        </b-select>

        <p class="control">
          <b-button type="is-primary" @click="()=>value = configs[selectedConfig].config">Use Config</b-button>
        </p>
      </b-field>
      <div class="descriptipn">
      
        {{ configs[selectedConfig].description }}
      </div>
    </b-field>

    <h3 class="title is-3">General Config</h3>
    <GeneralConfig v-model="value.c" />
    <hr />
    <h1 class="title is-3">Accessory Config</h1>
    <BaseAccessoryConfig
      v-for="(accessory,i) in value.a"
      :key="i"
      v-model="value.a[i]"
      class="accessory-config-container"
      @remove="()=>RemoveEl(value.a,i)"
    />
    <b-field>
      <b-select v-model="type" placeholder="Switch">
        <option v-for="option in types" :key="option.id" :value="option.id">{{ option.name }}</option>
      </b-select>

      <p class="control">
        <b-button
          type="is-primary"
          @click="()=>AddEl(value.a,value.a.length,{t:type})"
        >Add Accessory</b-button>
      </p>
    </b-field>
    <hr />
    <jsonEditor v-model="value" />

    <hr style="margin-bottom:300px;" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

import { haaConfig } from '@/haaConfigTypes'
import jsonEditor from '@/components/jsonEditor.vue'
import GeneralConfig from '@/components/GeneralConfig.vue'
import BaseAccessoryConfig from '@/components/BaseAccessoryConfig.vue'

import { types } from '@/accessoryTypes'
import { configurations } from '@/exampleConfigs'

@Component({
  components: {
    jsonEditor,
    GeneralConfig,
    BaseAccessoryConfig
  }
})
export default class Main extends Vue {
  public value: any = { c: {}, a: {} };

  get types(){
    return types.filter(t=>t.name)
  } 
  public configs = configurations

  public selectedConfig = 0
  public type = 1

  @Watch('value', { immediate: true, deep: true })
  onValueChanged(value: any) {

  }


  mounted() {
    this.value = { c: { o: 0 }, a: [] }
  }

  public Add(prop: string | number, value: any) {
    this.$set(this.value, prop, value)
  }
  public AddEl(arr: any[], index: number, value: any) {
    this.$set(arr, index, value)
  }
  public RemoveProp(prop: string | number) {
    this.$delete(this.value, prop)
  }
  public RemoveEl(arr: any[], index: number) {
    this.$delete(arr, index)
  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.accessory-config-container {
  border: 1px solid #d2d2d2;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}
.descriptipn{
  margin: .5em;
  font-size: small;
}
</style>
