import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowCircleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
