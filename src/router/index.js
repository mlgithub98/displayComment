import Vue from 'vue'
import Router from 'vue-router'
import displayComment from '@/components/displayComment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'displayComment',
      component: displayComment
    }
  ]
})
