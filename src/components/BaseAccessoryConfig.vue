<template>
  <div class="basic">
    <h3 class="title is-4">{{ types[(type-1)].name }} Accessory Config</h3>

    <hr />

    <b-notification aria-close-label="Close notification">
      {{ description }}
      <b-tag v-for="state in acessoryStates" :key="state.id" type="is-primary">{{ state.name }}</b-tag>
    </b-notification>

    <b-field v-if="'inching' in acessoryType" label="Default State Time [s]" horizontal>
      <b-field v-if="'i' in value" grouped>
        <b-numberinput
          v-model="value.i"
          min="0"
          max="10000000"
          controls-position="compact"
          step="0.01"
        />
        <b-button @click="()=>RemoveProp('i')">Rem Time</b-button>
      </b-field>
      <b-button v-else @click="()=>AddProp('i',1)">Add</b-button>
    </b-field>

    <FormRebootStateConfig v-model="value" :reboot-states="rebootStates" />
    <FormIOs v-model="value" :acessory-states="acessoryStates" />

    <b-button type="is-danger" @click="()=>$emit('remove')">Remove Accessory</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

import DigitalInputConfig from '@/components/DigitalInputConfig.vue'
import DigitalOutputConfig from '@/components/DigitalOutputConfig.vue'
import FormIOs from '@/components/FormIOs.vue'
import FormRebootStateConfig from '@/components/FormRebootStateConfig.vue'

import { haaConfig, generalConfig, baseAccessoryConfig, switchAccessoryConfig } from '@/haaConfigTypes'
import { types } from '@/accessoryTypes'

@Component({
  components: {
    DigitalInputConfig,
    FormRebootStateConfig,
    FormIOs,
    DigitalOutputConfig
  }
})
export default class BaseAccessoryConfig extends Vue {

  public types = types

  get type() {
    return this.value.t || 1
  }

  get acessoryType() {

    switch (this.type) {
      case 1:
        return {
          states: [
            { id: 0, name: 'ON' },
            { id: 1, name: 'OFF' }
          ],
          reboot: [
            { id: 0, name: 'Default - OFF.' },
            { id: 1, name: 'ON.' },
            { id: 4, name: 'Defined by fixed inputs.' },
            { id: 5, name: 'Last state.' },
            { id: 6, name: 'Opposite to last state.' }
          ],
          defaults: {
            b: [],
            s: 0
          },
          inching: true,
          description: 'Type Switch has the states: '
        }
      case 2:
        return {
          states: [
            { id: 0, name: 'ON' },
            { id: 1, name: 'OFF' }
          ],
          reboot: [
            { id: 0, name: 'Default - OFF.' },
            { id: 1, name: 'ON.' },
            { id: 4, name: 'Defined by fixed inputs.' },
            { id: 5, name: 'Last state.' },
            { id: 6, name: 'Opposite to last state.' }
          ],
          defaults: {
            b: [],
            s: 0
          },
          inching: true,
          description: 'An Outlet has the states '
        }
      case 3:
        return {
          states: [
            { id: 0, name: 'Singlepress' },
            { id: 1, name: 'Doublepress' },
            { id: 2, name: 'Longpress' }
          ],
          reboot: [

          ],
          defaults: {
            b: [],
            s: 0
          },
          description: 'A stateless HomeKit button.'
        }
      case 4:
        return {
          states: [
            { id: 0, name: 'UNLOCK' },
            { id: 1, name: 'LOCK' }
          ],
          reboot: [
            { id: 0, name: 'UNLOCKED.' },
            { id: 1, name: 'Default - LOCKED.' },
            { id: 4, name: 'Defined by fixed inputs.' },
            { id: 5, name: 'Last state.' },
            { id: 6, name: 'Opposite to last state.' }
          ],
          defaults: {
            b: [],
            s: 0
          },
          inching: true,
          description: 'A lock mechanism has the states '
        }

      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        return {
          states: [
            { id: 0, name: 'disabled. Default' },
            { id: 1, name: 'enabled' }
          ],
          reboot: [

          ],
          defaults: {
            b: [],
            s: 0
          },
                    inching: true,
          description: ''
        }
      default:
        return { states: [], reboot: [], description: '', defaults: {} }
    }

  }

  @Prop({ type: Object, required: true, default: ()=>{} }) private readonly value!: baseAccessoryConfig


  get acessoryStates() {
    return this.acessoryType.states
  }
  get rebootStates() {
    return this.acessoryType.reboot
  }
  get description() {
    return this.acessoryType.description
  }

  private addPropertyIfNotExists(target: any, source: any) {
    for (const key in source) {
      if (source.hasOwnProperty(key) && !target.hasOwnProperty(key)) {
        this.$set(target, key, source[key])
      }
    }
  }

  @Watch('value', { immediate: true, deep: true })
  onValueChanged(value: any, oldValue: any) {
    console.log('val changed', value)
    this.addPropertyIfNotExists(value, this.acessoryType.defaults)
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

span.tag.is-primary {
  margin-left: 0.5rem;
}
</style>
