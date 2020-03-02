
const routes = [
  {
    path: '/calen',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/calen.vue') }
    ]
  },
  {
    path: '/calif',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/calif.vue') }
    ]
  },
  {
    path: '/asig',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/asig.vue') }
    ]
  },
  {
    path: '/selecAsig',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/selecAsig.vue') }
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
