<template>
  <div class="basic">
    <b-field label grouped>
      <b-field label="GPIO">
        <b-numberinput v-model="value.g" min="0" max="1024" controls-position="compact" />
      </b-field>

      <b-field label="Active Low">
        <b-checkbox v-model="value.v" :true-value="1" :false-value="0" />
      </b-field>

      <b-field label="Reset Time [s]">
        <b-field v-if="'i' in value" grouped>
          <b-numberinput v-model="value.i" min="0" max="10000000" controls-position="compact" step="0.01" />
          <b-button @click="()=>Remove('i')">Rem Time</b-button>
        </b-field>
        <b-button v-else @click="()=>Add('i',1)">Add</b-button>
      </b-field>


      <b-field label="Actions">
        <b-button type="is-danger" @click="()=>$emit('remove')">Remove</b-button>
      </b-field>
    </b-field>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

import { digitalInputConfig, digitalOutputConfig } from '@/haaConfigTypes'

@Component
export default class DigitalOutputConfig extends Vue {


  @Prop({ type: Object, required: false }) private readonly value!: digitalOutputConfig;

  @Watch('value', { immediate: true, deep: true })
  onValueChanged(value: any) {
    this.$emit('input', value)
  }

  public Add(prop: string | number, value: any) {
    this.$set(this.value, prop, value)
  }
  public Remove(prop: string | number) {
    this.$delete(this.value, prop)
  }

}
</script>


<style scoped>
</style>
