import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(axios)
axios.defaults.baseURL="http://localhost:6033/";
Vue.config.productionTip = false
Vue.prototype.$message =ElementUI.Message;
Vue.prototype.$http =axios;


new Vue({
  render: h => h(App),
}).$mount('#app')
