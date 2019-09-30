import Vue from 'vue'
import App from './App.vue'
import ScrollLoader from 'vue-scroll-loader'

Vue.use(ScrollLoader)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

