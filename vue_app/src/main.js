import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-github-api'
import GitHubAPI from 'vue-github-api'
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(GitHubAPI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

