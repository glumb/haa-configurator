<template>
  <div class="basic">
    <b-field label="Reboot State" horizontal>
      <b-select v-model="value.s" placeholder="Reboot State">
        <option v-for="option in rebootStates" :key="option.id" :value="option.id">{{ option.name }}</option>
      </b-select>
    </b-field>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'


@Component({})
export default class FormRebootStateConfig extends Vue {

  @Prop({ type: Array, required: true, default: ()=>[] }) public readonly rebootStates!: {id:number,name:string}[]
  @Prop({ type: Object, required: true, default: ()=>[] }) public readonly value!:any
  
}
</script>


<style >

</style>
