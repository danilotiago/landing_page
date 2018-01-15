import Vue from 'vue'
import App from './App.vue'
import VeeValidate, { Validator } from 'vee-validate';
import VeeValidateMessagesBR from 'vee-validate/dist/locale/pt_BR';

Validator.localize('pt_BR', VeeValidateMessagesBR);

Vue.use(VeeValidate, {
  locale: 'pt_BR'
});

new Vue({
  el: '#app',
  render: h => h(App)
});


