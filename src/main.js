import Vue from 'vue'
import VueSwal from 'vue-swal'

import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueSwal)

Vue.filter('trans', (value) => {
  return store.state.dict[value] || value
})

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    this.$store.dispatch('loadConfig')
  },
}).$mount('#app')
