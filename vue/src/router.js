
import VueRouter from "vue-router"
import jobDetails from './jobDetails.vue'
import Content from './Content.vue'

const routes = [
 {
  path : '/Content',
  components : Content,
  children : [
    {
      path :'/jobDetails',
      components : jobDetails
    }
  ]
 },
]

const router = new VueRouter({
  routes
})

export default routes;