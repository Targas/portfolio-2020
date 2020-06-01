import Vue from 'vue'
import App from './App.vue'

// Custom CSS
import './main.scss'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// Other
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')