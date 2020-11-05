import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleRight, faTh, faPlus, faProjectDiagram, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowCircleRight, faTh, faPlus, faProjectDiagram, faEllipsisH)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
