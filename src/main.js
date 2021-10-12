import Vue from 'vue'
import VueAnimXYZ from '@animxyz/vue'
import '@animxyz/core' // Import css here if you haven't elsewhere

Vue.use(VueAnimXYZ)
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
