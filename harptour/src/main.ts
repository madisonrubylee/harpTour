import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router/router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  render: h => h(App),
  router,
  vuetify
}).$mount('#app')
