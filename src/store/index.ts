import Vue from 'vue'
import Vuex from 'vuex'

import ApartmentModule from './apartments'
import SettingsModule from './settings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    apartment: ApartmentModule,
    settings: SettingsModule
  }
})
