<template>
  <div class="basic">
    <h5 v-if="actionInputs.length > 0" class="title is-5">Digital Inputs</h5>

    <div v-for="s in actionInputs" :key="s.id + '-state'" class="acessory-states">
      <b-field :label="`${s.name} State - Input`" horizontal class="buttons-container">
        <div v-for="(b, i) in value[`f${s.id}`]" :key="s.id+'-'+i">
          <DigitalInputConfig
            v-model="value[`f${s.id}`][i]"
            @remove="()=>RemoveEl(value[`f${s.id}`], i)"
          />

          <hr />
        </div>

        <b-button
          v-if="value[`f${s.id}`]"
          @click="()=>AddEl(value[`f${s.id}`], value[`f${s.id}`].length, { g:0, t:1 })"
        >Add {{ s.name }} State - Input</b-button>
        <b-button
          v-else
          @click="()=>{
            AddProp(`f${s.id}`, [])
            AddEl(value[`f${s.id}`], value[`f${s.id}`].length, { g:0, t:1 }) 
          }"
        >Add {{ s.name }} State - Input</b-button>
      </b-field>
      <hr />
    </div>

    <h5 class="title is-5">Digital Outputs</h5>

    <div v-for="s in actionOutputs" :key="s.id+'-output'" class="acessory-states">
      <b-field :label="`${s.name} - Outputs`" horizontal class="buttons-container">
        <div v-if="value[s.id] && value[s.id].r">
          <div v-for="(b, i) in value[s.id].r" :key="s.id+'-'+i">
            <DigitalOutputConfig
              v-model="value[s.id].r[i]"
              @remove="()=>RemoveEl(value[s.id].r, i)"
            />
            <hr />
          </div>
        </div>

        <b-button
          v-if="value[s.id] && value[s.id].r"
          @click="()=>AddEl(value[s.id].r, value[s.id].r.length, { g:0, v:0 })"
        >Add {{ s.name }} State - Outputs</b-button>
        <b-button
          v-else
          @click="()=>{
            AddProp(s.id, {r:[]})
            AddEl(value[s.id].r, value[s.id].r.length, { g:0, v:0 }) 
          }"
        >Add {{ s.name }} State - Outputs</b-button>
      </b-field>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

import DigitalInputConfig from '@/components/DigitalInputConfig.vue'
import DigitalOutputConfig from '@/components/DigitalOutputConfig.vue'

import { haaConfig, generalConfig, baseAccessoryConfig, switchAccessoryConfig } from '@/haaConfigTypes'

@Component({
  components: {
    DigitalInputConfig,
    DigitalOutputConfig
  }
})
export default class ButtonsAndState extends Vue {

  @Prop({ type: Array, required: true, default: () => [] }) public readonly actionOutputs!: { id: number, name: string }[]
  @Prop({ type: Array, required: true, default: () => [] }) public readonly actionInputs!: { id: number, name: string }[]


  @Prop({ type: Object, required: true }) private readonly value!: any;


  @Watch('value', { immediate: true, deep: true })
  onValueChanged(value: any, oldValue: any) {

    this.$emit('input', value)
  }

  public AddProp(prop: string | number, value: any) {
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


<style >
.buttons-container .field-body {
  flex-wrap: wrap;
}

.buttons-container .field-body > .field {
  width: 100%;
}

.button-remove {
  margin-top: 1rem;
}

.acessory-states {
  margin-bottom: 0.75rem;
}
</style>
