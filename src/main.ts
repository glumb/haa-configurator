import Vue from 'vue'
import Buefy from 'buefy'

import 'buefy/dist/buefy.css'

import { library } from '@fortawesome/fontawesome-svg-core'
// internal icons
import {
  faCheck,
  faCheckCircle,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faCaretDown,
  faCaretUp,
  faUpload,
  faMinus,
  faPlus
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faMinus,
  faPlus,
  faCheck,
  faCheckCircle,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faCaretDown,
  faCaretUp,
  faUpload
)
Vue.component('vue-fontawesome', FontAwesomeIcon)

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
