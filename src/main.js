import Vue from 'vue'
import App from './App.vue'
import VeeValidate, { Validator } from 'vee-validate';
import VeeValidateMessagesBR from 'vee-validate/dist/locale/pt_BR';
import VueTheMask from 'vue-the-mask';

Vue.use(VueTheMask);

Validator.localize('pt_BR', VeeValidateMessagesBR);
Vue.use(VeeValidate, {
  locale: 'pt_BR'
});

export const STORAGE_KEY = 'landing_page_app-';

new Vue({
  el: '#app',
  render: h => h(App)
});


