<template>
  <div class="basic">
    <b-field label="UART" horizontal>
      <b-checkbox v-model="value.o" :true-value="1" :false-value="0" />
    </b-field>
    <b-field label="LED Pin" horizontal>
      <b-field v-if="'l' in value" grouped>
        <b-numberinput v-model="value.l" min="0" max="1024" controls-position="compact" />
        <b-button @click="()=>Remove('l')">remove</b-button>
      </b-field>
      <b-button v-else @click="()=>Add('l',13)">Add</b-button>
    </b-field>

    <b-field v-if="value.l" label="Inverted LED" horizontal>
      <b-checkbox v-model="value.i" :true-value="1" :false-value="0" />
    </b-field>

    <b-field label="Filter " horizontal>
      <b-field v-if="'f' in value" grouped>
        <b-numberinput v-model="value.f" min="10" max="210" controls-position="compact" />
        <b-button @click="()=>Remove('f')">remove</b-button>
      </b-field>
      <b-button v-else @click="()=>Add('f',10)">Add</b-button>
    </b-field>

    <b-field label="Custom PWM f" horizontal>
      <b-field v-if="'q' in value" grouped>
        <b-numberinput v-model="value['q']" min="1" max="65535" controls-position="compact" />
        <b-button @click="()=>Remove('q')">remove</b-button>
      </b-field>
      <b-button v-else @click="()=>Add('q',10)">Add</b-button>
    </b-field>

    <b-field label="Setup Mode Time [s]" horizontal>
      <b-field v-if="'m' in value" grouped>
        <b-numberinput v-model="value.m" min="0" max="999999" controls-position="compact" />
        <b-button @click="()=>Remove('m')">remove</b-button>
      </b-field>
      <b-button v-else @click="()=>Add('m',0)">Add</b-button>
    </b-field>

    <b-field v-if="value.h" label="Enable HomeKit" horizontal>
      <b-checkbox v-model="value.h" :true-value="1" :false-value="0" />
    </b-field>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

import { haaConfig, generalConfig } from '@/haaConfigTypes'

@Component
export default class GeneralConfig extends Vue {

  public generalConfig: generalConfig = {}

  @Prop({ type: Object, required: false }) private readonly value!: generalConfig;

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

  mounted() {
    const a: generalConfig = {
      o: 1,
      l: 13,
      i: 1
    }
  }
}
</script>


<style scoped>
</style>
