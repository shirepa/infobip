import Vue from 'vue'
import Router from 'vue-router'
import LeaderBoard from '../components/LeaderBoard'
import Rounds from '../components/Rounds'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: LeaderBoard,
      redirect: '/info/table'
    },
    {
      path: '/info',
      component: LeaderBoard,
      redirect: '/info/table'
    },
    {
     path: '/info/table',
          name: 'LeaderBoard',
          component: LeaderBoard
        },
    {
      path: '/info/rounds',
      name: 'Rounds',
      component: Rounds
    }
  ]
})
