import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// register plugins
import vuetify from './plugins/vuetify';
import VueGoogleComponents from './plugins/vuetify-google-components'

Vue.use(VueGoogleComponents, {
  apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
  libraries: {
    places: true
  }
})

// configure vue app
Vue.config.productionTip = false

// instanciate vue app
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
