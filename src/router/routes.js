import { validationSession } from './validations-router'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/calen',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/calen.vue'),
        beforeEnter: validationSession
      }
    ]
  },
  {
    path: '/calif',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/calif.vue'),
        beforeEnter: validationSession
      }
    ]
  },
  {
    path: '/asig',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/asig.vue'),
        beforeEnter: validationSession
      }
    ]
  },
  {
    path: '/selecAsig',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/selecAsig.vue'),
        beforeEnter: validationSession
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
