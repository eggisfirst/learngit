import Vue from 'vue'
import App from './App.vue'
import Nav from './Nav.vue'
import Pic from './Pic.vue'
import Content from './Content.vue'


Vue.component("app-nav",Nav)
Vue.component('app-pic',Pic)
Vue.component("app-content",Content)

new Vue({
  el: '#app',
  render: h => h(App)
})
