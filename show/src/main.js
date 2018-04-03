import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuer from 'vue-resource'

Vue.use(vuer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
