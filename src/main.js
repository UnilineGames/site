import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import * as uiv from 'uiv';
import './assets/libs/stars';
import i18n from './i18n';

import '../styles/main.scss';
Vue.config.productionTip = false;
Vue.use(uiv);
Vue.use(BootstrapVue);

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app');
