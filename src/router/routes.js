const routes = [
  {
    path: '/',
    name: 'name',
    component: () => import('../views/index.vue')
  },
  {
    path: '/share',
    name: 'share',
    component: () => import('../views/others/zhuli.vue')
  }
]

export default routes
