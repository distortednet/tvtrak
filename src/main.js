import Vue from 'vue'
import App from './App.vue'
import Resource from 'vue-resource'
Vue.use(Resource)

import {store} from './store';

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
