import Vue from 'vue'

import App from './App.vue'
import Resource from 'vue-resource'
import {store} from './store'
Vue.use(Resource)



new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
