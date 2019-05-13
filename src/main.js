import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Ionic from '@ionic/vue'
import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic)
Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'ion-app',
  'ion-header',
  'ion-toolbar',
  'ion-item',
  'ion-card',
  'ion-card-title',
  'ion-card-subtitle',
  'ion-card-header',
  'ion-card-content',
  'ion-icon',
  'ion-content',
  'ion-label',
  'ion-button',
  'ion-router-outlet',
  'ion-refresher-content',
  'ion-refresher'
]

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
