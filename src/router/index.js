import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/first',
      name: 'first',
      component: () => import('@/components/first')
    },
    {
      path: '/second',
      name: 'second',
      component: () => import('@/components/second')
    }

  ]
})
