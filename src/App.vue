<template>
  <div id="app">
    <div class="container">
      <Main msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Main from './components/Main.vue'

@Component({
  components: {
    Main
  }
})
export default class App extends Vue { }
</script>

<style>
#app {
  margin-top: 60px;
}
.container{
  padding: 1rem;
}
</style>
