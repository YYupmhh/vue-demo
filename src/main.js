import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/router'
import axios from './http'
import '@/assets/css/style.css'
import moment from 'moment'
Vue.use(axios)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.filter("fromdata", (value) => {
  return moment(value).format("YYYY-MM-DD");

})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
