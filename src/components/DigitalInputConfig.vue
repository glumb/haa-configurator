<template>
  <b-field label grouped>
    <b-field label="GPIO">
      <b-numberinput v-model="value.g" min="0" max="1024" controls-position="compact" />
    </b-field>

    <b-field label="PullUp">
      <b-checkbox v-model="value.p" :true-value="1" :false-value="0" />
    </b-field>
    <b-field label="Invert">
      <b-checkbox v-model="value.i" :true-value="1" :false-value="0" />
    </b-field>
    <b-field label="Type">
      <b-select v-model="value.t" placeholder="Single activation">
        <option v-for="option in types" :key="option.id" :value="option.id">{{ option.name }}</option>
      </b-select>
    </b-field>
    <b-field label="Actions">
      <b-button type="is-danger" @click="()=>$emit('remove')">Remove</b-button>
    </b-field>
  </b-field>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

import { digitalInputConfig } from '@/haaConfigTypes'

@Component
export default class DigitalInputConfig extends Vue {

  public types = [
    {
      id: 0,
      name: 'Single activation. Falling Edge'
    },
    {
      id: 1,
      name: 'Default. Single activation.'
    },
    {
      id: 2,
      name: 'Double activation.'
    },
    {
      id: 3,
      name: 'Long activation.'
    },
    {
      id: 4,
      name: 'Very long activation.'
    },
    {
      id: 5,
      name: 'Hold activation.'
    }
  ]

  @Prop({ type: Object, required: false }) private readonly value!: digitalInputConfig;

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
