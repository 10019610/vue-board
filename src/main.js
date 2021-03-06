import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routes';


Vue.config.productionTip = true;
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App)
  ,router  //라우터 뷰에 설정
}).$mount('#app')
