<template>
  <div class="basic">
    <h5 class="title is-5">Cyclic Inputs</h5>

    <b-notification
      aria-close-label="Close notification"
    >Cyclic Inputs advance the accessory state on activation. State Inputs change the acessory state to the target state.</b-notification>

    <b-field label="Cyclic - Inputs" horizontal class="buttons-container">
      <div v-for="(b, i) in value.b" :key="i">
        <DigitalInputConfig v-model="value.b[i]" @remove="()=>RemoveEl(value.b, i)" />

        <hr />
      </div>

      <b-button @click="()=>AddEl(value.b, value.b.length, { g:0, t:1 })">Add Cyclic Input</b-button>
    </b-field>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

import DigitalInputConfig from '@/components/DigitalInputConfig.vue'

@Component({
  components: {
    DigitalInputConfig
  }
})
export default class FormCyclicInput extends Vue {

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
