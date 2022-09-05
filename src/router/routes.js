
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/track',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/trackOrder.vue') }
    ]
  },
  {
    path: '/faqs',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/faqs.vue') }
    ]
  },
  {
    path: '/account',
    component: () => import('layouts/AccountLayout.vue'),
    meta:{
      requiresAuth: true
    },
    children: [
      { path: '/account', component: () => import('pages/accountPage.vue') }
    ]
  },
  {
    path: '/categories',
    component: () => import('layouts/shopLayout.vue'),
    children: [
      { path: '/categories/:category', component: () => import('pages/categories.vue') }
    ]
  },
  {
    path: '/product',
    component: () => import('layouts/shopLayout.vue'),
    props: true,
    children: [
      { path: '/product/:id', name:'id', props: true, component: () => import('pages/productPage.vue') },
    ]
  },
  {
    path: '/cart',
    component: () => import('layouts/shopLayout.vue'),
    children: [
      { path: '/cart', component: () => import('pages/cartPage.vue') },
    ]
  },
  {
    path: '/checkout',
    component: () => import('layouts/shopLayout.vue'),
    children: [
      { path: '/checkout', component: () => import('pages/checkout.vue') },
    ]
  },
  {
    path: '/reviews',
    component: () => import('layouts/shopLayout.vue'),
    children: [
      { path: '/reviews', component: () => import('pages/reviews.vue') },
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '/admin/products', component: () => import('pages/adminProducts.vue') },
      { path: '/admin/users', component: () => import('pages/users.vue') },
      { path: '/admin/coupons', component: () => import('pages/coupons.vue') },
      { path: '/admin/orders', component: () => import('pages/Orders.vue') },
    ],
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/signup',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '/signup', component: () => import('pages/signUp.vue') },
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/login.vue') },
    ]
  },
  {
    path: '/Auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '/Auth/RecoverPassword', component: () => import('pages/recoverPass.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
