<template>
  <div class="basic">
    <h3 class="title is-4">{{ types[(type-1)].name }} Accessory Config</h3>

    <hr />

    <b-notification v-if="description" aria-close-label="Close notification">{{ description }}</b-notification>

    <!-- Garaga -->
    <b-field v-if="type == 40" label="Door obstruction Detection Time" horizontal>
      <b-field v-if="'e' in value" grouped>
        <b-numberinput v-model="value['e']" min="1" max="65535" controls-position="compact" step="0.01" />
        <b-button @click="()=>RemoveProp('e')">Rem Detection</b-button>
      </b-field>
      <b-button v-else @click="()=>AddProp('e',0)">Add</b-button>
    </b-field>
    
    <b-field v-if="type == 40" label="Door Working Time" horizontal>
      <b-numberinput v-model="value['d']" min="1" max="65535" controls-position="compact" step="0.01" />
    </b-field>

    <!-- Water Valve -->
    <b-field v-if="'valveTypes' in acessoryType" label="Valve Type" horizontal>
      <b-select v-model="value.w" placeholder="Water Valve">
        <option
          v-for="option in acessoryType.valveTypes"
          :key="option.id"
          :value="option.id"
        >{{ option.name }}</option>
      </b-select>
    </b-field>

    <!-- External Sensor -->

    <b-field v-if="'sensorTypes' in acessoryType" label="Sensor Type" horizontal>
      <b-select v-model="value.n" placeholder="Sensor Type">
        <option
          v-for="option in acessoryType.sensorTypes"
          :key="option.id"
          :value="option.id"
        >{{ option.name }}</option>
      </b-select>
    </b-field>

    <b-field v-if="'sensorInput' in acessoryType" label="Sensor Input" horizontal>
      <b-field label="GPIO">
        <b-numberinput v-model="value.g" min="0" max="1024" controls-position="compact" />
      </b-field>
    </b-field>

    <b-field v-if="'poll' in acessoryType" label="Sensor poll interval [s]" horizontal>
      <b-field v-if="'j' in value" grouped>
        <b-numberinput v-model="value.j" min="3" max="65535" controls-position="compact" step="1" />
        <b-button @click="()=>RemoveProp('j')">Rem Poll</b-button>
      </b-field>
      <b-button v-else @click="()=>AddProp('j',30)">Add</b-button>
    </b-field>

    <!-- Thermostat -->

    <b-field v-if="'thermostatTypes' in acessoryType" label="Thermostat Type" horizontal>
      <b-select v-model="value.w" placeholder="Thermostat Type">
        <option
          v-for="option in acessoryType.thermostatTypes"
          :key="option.id"
          :value="option.id"
        >{{ option.name }}</option>
      </b-select>
    </b-field>

    <b-field v-if="'temperatureOffset' in acessoryType" label="Temperature Offset" horizontal>
      <b-field v-if="'z' in value" grouped>
        <b-numberinput v-model="value.z" min="-100" max="100" controls-position="compact" step="0.01" />
        <b-button @click="()=>RemoveProp('z')">Rem Offset</b-button>
      </b-field>
      <b-button v-else @click="()=>AddProp('z',0)">Add</b-button>
    </b-field>

    <b-field v-if="'humidityOffset' in acessoryType" label="Humidity Offset" horizontal>
      <b-field v-if="'h' in value" grouped>
        <b-numberinput v-model="value.h" min="-100" max="100" controls-position="compact" step="0.01" />
        <b-button @click="()=>RemoveProp('h')">Rem Offset</b-button>
      </b-field>
      <b-button v-else @click="()=>AddProp('h',0)">Add</b-button>
    </b-field>

    <b-field v-if="'temperature' in acessoryType" label="min Temperature [°C]" horizontal>
      <b-field v-if="'m' in value" grouped>
        <b-numberinput
          v-model="value.m"
          min="-100"
          max="100"
          controls-position="compact"
          step="0.01"
        />
        <b-button @click="()=>RemoveProp('m')">Rem Temp</b-button>
      </b-field>
      <b-button v-else @click="()=>AddProp('m',10)">Add</b-button>
    </b-field>

    <b-field v-if="'temperature' in acessoryType" label="max Temperature [°C]" horizontal>
      <b-field v-if="'x' in value" grouped>
        <b-numberinput
          v-model="value.x"
          min="-100"
          max="100"
          controls-position="compact"
          step="0.01"
        />
        <b-button @click="()=>RemoveProp('x')">Rem Temp</b-button>
      </b-field>
      <b-button v-else @click="()=>AddProp('x',10)">Add</b-button>
    </b-field>

    <b-field v-if="'temperature' in acessoryType" label="Temperature deadband [°C]" horizontal>
      <b-field v-if="'d' in value" grouped>
        <b-numberinput
          v-model="value.d"
          min="-100"
          max="100"
          controls-position="compact"
          step="0.01"
        />
        <b-button @click="()=>RemoveProp('d')">Rem Temp</b-button>
      </b-field>
      <b-button v-else @click="()=>AddProp('d',10)">Add</b-button>
    </b-field>

    <!-- Inching -->

    <div class="basic">
      <b-field v-if="value.t == 20" label="Maximum On Time [s]" horizontal>
        <b-field v-if="'d' in value" grouped>
          <b-numberinput
            v-model="value.d"
            min="0"
            max="10000000"
            controls-position="compact"
            step="1"
          />
          <b-button @click="()=>value.d = 0">Disable Time</b-button>
        </b-field>
        <b-button v-else @click="()=>AddProp('d',3600)">Add</b-button>
      </b-field>

      <b-field v-if="'inching' in acessoryType" label="Reset to Default State Time [s]" horizontal>
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

      <FormRebootStateConfig
        v-if="'reboot' in acessoryType"
        v-model="value"
        :reboot-states="rebootStates"
      />

      <!-- Autodimmer -->

      <div v-if="'autodimmer' in acessoryType" class="basic">
        <h5 class="title is-5">RGB GPIO</h5>

        <b-notification aria-close-label="Close notification">
          2-channels selectable temperature color: declare "v" for cool white and "w" for warm white.
          <br />RGB: declare "r", "g" and "v" for Red, Green and Blue colors.
          <br />RGBW: declare "r", "g", "v" and "w" for Red, Green, Blue and White colors.
        </b-notification>

        <b-field
          v-for="(name ,channel) in {'r':'r','g':'g','v':'b','w':'w'}"
          :key="channel"
          :label="name.toUpperCase() + ' Channel'"
          horizontal
        >
          <b-field v-if="channel in value" grouped>
            <b-field label="GPIO">
              <b-numberinput
                v-model="value[channel]"
                min="0"
                max="254"
                controls-position="compact"
                step="1"
              />
            </b-field>
            <b-field label="Factor">
              <b-numberinput
                v-model="value[`f${channel}`]"
                min="0.01"
                max="1000"
                controls-position="compact"
                step="0.01"
              />
            </b-field>
            <b-field label="Action">
              <b-button @click="()=>{RemoveProp(channel);RemoveProp(`f${channel}`)}">Rem Channel</b-button>
            </b-field>
          </b-field>
          <b-button v-else @click="()=>{AddProp(channel,10);AddProp(`f${channel}`,1)}">Add</b-button>
        </b-field>

        <b-field label="Step Value" horizontal>
          <b-numberinput
            v-model="value.p"
            min="1"
            max="65535"
            controls-position="compact"
            step="1"
          />
        </b-field>
        <b-field label="Step Delay [s]" horizontal>
          <b-numberinput
            v-model="value.d"
            min="0.01"
            max="65.5"
            controls-position="compact"
            step="0.01"
          />
        </b-field>
        <b-field label="Autodimmer Step %" horizontal>
          <b-numberinput v-model="value.e" min="1" max="50" controls-position="compact" step="1" />
        </b-field>
      </div>

      <div v-if="'cyclic' in acessoryType" class="basic">
        <h5 class="title is-5">Cyclic Inputs</h5>

        <b-notification
          aria-close-label="Close notification"
        >Cyclic Inputs advance the accessory state on activation. State Inputs change the acessory state to the target state.</b-notification>

        <b-field label="States" horizontal>
          <b-taglist>
            <b-tag
              v-for="state in acessoryStates"
              :key="state.id"
              type="is-primary"
            >{{ state.name }}</b-tag>
          </b-taglist>
        </b-field>

        <b-field label="Cyclic - Inputs" horizontal class="buttons-container">
          <div v-for="(b, i) in value.b" :key="i">
            <DigitalInputConfig v-model="value.b[i]" @remove="()=>RemoveEl(value.b, i)" />

            <hr />
          </div>

          <b-button @click="()=>AddEl(value.b, value.b.length, { g:0, t:1 })">Add Cyclic Input</b-button>
        </b-field>
      </div>

      <FormIOs
        v-model="value"
        :action-inputs="acessoryType.stateInputs || acessoryType.states"
        :action-outputs="acessoryType.states"
      />

      <b-button type="is-danger" @click="()=>$emit('remove')">Remove Accessory</b-button>
    </div>
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
          description: 'Type Switch',
          cyclic: true
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
          description: 'An Outlet',
          cyclic: true
        }
      case 3:
        return {
          states: [
            { id: 0, name: 'Singlepress' },
            { id: 1, name: 'Doublepress' },
            { id: 2, name: 'Longpress' }
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
          description: 'A lock mechanism',
          cyclic: true
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
          defaults: {
            s: 0
          },
          inching: true,
          description: ''
        }
      case 20:
        return {
          states: [
            { id: 0, name: 'disabled. Default' },
            { id: 1, name: 'enabled' }
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
            s: 0,
            w: 0,
            d: 3600
          },
          valveTypes: [
            { id: 0, name: 'Default. Water Valve' },
            { id: 1, name: 'Sprinkler' },
            { id: 2, name: 'Shower' },
            { id: 3, name: 'Tap' }
          ],
          inching: true,
          description: '',
          cyclic: true
        }

      case 21:
        return {
          states: [
            { id: 0, name: 'Total OFF' },
            { id: 1, name: 'Thermostat ON, but heating OFF' },
            { id: 2, name: 'Thermostat ON, cooling OFF' },
            { id: 3, name: 'Heating ON' },
            { id: 4, name: 'Cooling ON' },
            { id: 5, name: 'Sensor error' }
          ],
          temperatureOffset: true,
          sensorInput: true,
          sensorTypes: [
            { id: 1, name: 'DHT11' },
            { id: 2, name: 'DHT22 - Default' },
            { id: 3, name: 'DS18B20' },
            { id: 4, name: 'Si7021 (not recommended)' }
          ],
          humidityOffset: true,
          temperature: true,
          poll: true,
          thermostatTypes: [
            { id: 1, name: 'Heater - Default' },
            { id: 2, name: 'Cooler' },
            { id: 3, name: 'Heater & Cooler' }
          ],
          reboot: [
            { id: 0, name: 'Default - OFF' },
            { id: 1, name: 'Heating' },
            { id: 2, name: 'Cooling' },
            { id: 4, name: 'Defined by fixed inputs' },
            { id: 5, name: 'Last state' }
          ],
          stateInputs: [
            { id: '0', name: 'Set mode OFF' },
            { id: '1', name: 'Set mode heater' },
            { id: '2', name: 'Set mode cooler' },
            { id: '3', name: 'Change target temperature by +0.5º' },
            { id: '4', name: 'Change target temperature by -0.5º' }
          ],
          defaults: {
            b: [],
            g: 0,
            n: 2
          },
          description: 'A HomeKit Thermostat. It requires a compatible sensor.',
          cyclic: true
        }

      case 22:
        return {
          states: [
            { id: 5, name: 'Sensor error' }
          ],
          sensorInput: true,
          sensorTypes: [
            { id: 1, name: 'DHT11' },
            { id: 2, name: 'DHT22 - Default' },
            { id: 3, name: 'DS18B20' },
            { id: 4, name: 'Si7021 (not recommended)' }
          ],
          temperatureOffset: true,
          poll: true,
          defaults: {
            b: []
          },
          stateInputs: [],
          description: 'A HomeKit Thermometer. It requires a compatible sensor.'
        }
      case 23:
        return {
          states: [
            { id: 5, name: 'Sensor error' }
          ],
          sensorInput: true,
          sensorTypes: [
            { id: 1, name: 'DHT11' },
            { id: 2, name: 'DHT22 - Default' },
            { id: 3, name: 'DS18B20' },
            { id: 4, name: 'Si7021 (not recommended)' }
          ],
          humidityOffset: true,
          poll: true,
          defaults: {
            b: []
          },
          stateInputs: [],
          description: 'A HomeKit Humidity Sensor. It requires a compatible sensor.'
        }
      case 24:
        return {
          states: [
            { id: 5, name: 'Sensor error' }
          ],
          sensorInput: true,
          sensorTypes: [
            { id: 1, name: 'DHT11' },
            { id: 2, name: 'DHT22 - Default' },
            { id: 3, name: 'DS18B20' },
            { id: 4, name: 'Si7021 (not recommended)' }
          ],
          temperatureOffset: true,
          humidityOffset: true,
          poll: true,
          defaults: {
            b: []
          },
          stateInputs: [],
          description: 'A HomeKit Thermometer & Humidity Sensor. It requires a compatible sensor.'
        }
      case 30:
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
          autodimmer: true,
          cyclic: true,
          defaults: {
            s: 0,
            p: 1024,
            d: 1,
            e: 10,
            fr: 1,
            fg: 1,
            fv: 1,
            b: []
          },
          stateInputs: [
            { id: 0, name: 'Turns off lightbulb' },
            { id: 1, name: 'Turns on lightbulb' },
            { id: 2, name: 'Increase brightness by 10%' },
            { id: 3, name: 'Decrease brightness by 10%' }
          ],
          description: 'A HomeKit Dimmable Lightbulb with auto-dimmer managed by external switches/buttons. It can be Single Color, 2-channels selectable temperature color, RGB or RGBW. Hardware must be PWM controlled. Max total channels are 8.'
        }
      case 40:
        return {
          states: [
            { id: 0, name: 'Door is opened and receives closing order' },
            { id: 1, name: 'Door is closed and receives opening order' },
            { id: 2, name: 'Door is opening and receives closing order' },
            { id: 3, name: 'Door is closing and receives opening order' },
            { id: 4, name: 'Sensor detects opened door' },
            { id: 5, name: 'Sensor detects closed door' },
            { id: 6, name: 'Sensor detects opening door' },
            { id: 7, name: 'Sensor detects closing door' },
            { id: 8, name: 'Obstruction not detected' },
            { id: 9, name: 'Obstruction detected' },
            { id: 10, name: 'Emergency stop' }
          ],
          reboot: [
            { id: 0, name: 'Open' },
            { id: 1, name: 'Closed (default)' },
            { id: 5, name: 'Last state before restart' },
            { id: 6, name: 'Opposite to last state before restart' }
          ],
          cyclic: true,
          defaults: {
            s: 0,
            d: 30,
            b: []
          },
          stateInputs: [
            { id: 0, name: 'Set garage door to open' },
            { id: 1, name: 'Set garage door to close' },
            { id: 2, name: 'Indicates that garage door is open' },
            { id: 3, name: 'Indicates that garage door is closed' },
            { id: 4, name: 'Indicates that garage door is opening' },
            { id: 5, name: 'Indicates that garage door is closing' },
            { id: 6, name: 'Indicates that there is not obstruction' },
            { id: 7, name: 'Indicates that there is obstruction' },
            { id: 8, name: 'Emergency stop' }
          ],
          description: `A HomeKit Garage Door accessory. This can be used to manage your actual garage door driver, or be a stand-alone fully working driver.

If you don't use any sensor, or use only one, Door Working Time will be used to determine door state. If you use both sensors (for open and close: "f2" to "f5"), Door Working Time will be used as security measure alerting like a obstruction is detected if door does not complete operation before working time expires. If you also define an Obstruction Detection Time then the sum of the Working Time and Obstruction Detection Time is used.

When an obstruction is detected, the door cannot be operated until the obstruction is removed.`
        }
      default:
        return { states: [], reboot: [], description: '', defaults: {} }
    }
  }

  @Prop({ type: Object, required: true, default: () => { } }) private readonly value!: baseAccessoryConfig


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
.basic {
  margin-top: 2rem;
}

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
