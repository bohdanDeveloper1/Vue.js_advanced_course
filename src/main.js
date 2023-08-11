import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.directive('shadow', {
  bind(el, binding){
    el.style.boxShadow = '21px 18px 10px -9px rgba(199,177,199,1)';

    if(binding.modifiers['fiolet']){
      el.style.boxShadow = '22px -20px 17px -9px rgba(219,20,219,1)';
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
