import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login/login'
import rule from '@/page/challenge-rule/challenge-rule'
import grade from '@/page/challenge-grade/challenge-grade'
import answer from '@/page/answer/answer'
import practice from '@/page/practice/practice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login

    }
    ,
    {
      path: '/rule',
      name: 'rule',
      component: rule
    }
    ,
    {
      path: '/grade',
      name: 'grade',
      component: grade,
    }
    ,
    {
      path: '/answer',
      name: 'answer',
      component: answer
    },
    {
      path: '/practice',
      name: 'practice',
      component: practice

    },

  ]
})
