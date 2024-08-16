import Home from '@/views/Home.vue'

import users from './modules/user'
import login from './modules/login'
import content from './modules/content'

const Index = () =>
  import(/* webpackChunkName: 'index' */ '@/views/candy/Index.vue')
const candyCompany = () => import('@/views/company/Index.vue')
const candyUsers = () => import('@/views/users/Index.vue')
const Template1 = () =>
  import(/* webpackChunkName: 'template1' */ '@/views/channels/Template1.vue')
const NoFound = () =>
  import(/* webpackChunkName: 'notfound' */ '@/views/NotFound.vue')

export default {
  linkExactActiveClass: 'layui-this',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'index',
          component: Index
        },
        {
          path: '/index/:catalog',
          name: 'catalog',
          component: Template1
        }
      ]
    },
    {
      path: 'candy',
      component: Home,
      children: [
        {
          path: '',
          name: 'candy',
          component: Index
        },
        {
          path: 'candy',
          name: 'candy',
          component: Index
        }
      ]
    },
    {
      path: 'candyCompany',
      component: Home,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'candyCompany',
          component: candyCompany
        },
        {
          path: 'candyCompany',
          name: 'candyCompany',
          component: candyCompany
        }
      ]
    },
    {
      path: 'candyUsers',
      name: 'candyUsers',
      component: candyUsers
    },
    ...content,
    ...login,
    ...users,
    {
      path: '/404',
      name: '404',
      component: NoFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
}
