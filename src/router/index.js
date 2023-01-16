import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { useCounterStore } from "stores/counter"
import { LocalStorage } from 'quasar'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,


    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)


  })

  Router.beforeEach((to, from) => {
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)

     const isLoggedIn = LocalStorage.getItem('isLoggedIn')
     const user = JSON.parse(localStorage.getItem('UserDetails'))
     if (to.meta.requiresAuth && !isLoggedIn) {
       // this route requires auth, check if logged in
       // if not, redirect to login page.
       return {
          path: '/login',

          // save the location we were at to come back later
          query: { redirect: to.fullPath },
       }
     }

     if (!to.meta.requiresAuth && isLoggedIn) {
      return false

     }

 })

  // Router.beforeEach((to,from, next) => {
  //   to.matched.some( route =>{
  //     const Store = useCounterStore();
  //     const logged = LocalStorage.getItem('isLoggedIn')
  //     const logAuth = LocalStorage.getItem('logger')
  //     if(route.meta.requiresAuth && !logged){
  //       // if(!Store.isLoggedIn ){
  //         next({ path: '/login' })
  //       // }
  //     }
  //     // if(route.meta.requiresAdmin && !logAuth){

  //     //     next({path: '/'})

  //     // }

  //     // if(route.meta.requiresUser){
  //     //   if(!isUser()){
  //     //     next({path: '/'})
  //     //   }
  //     // }

  //   })
  //   next()

  // })




  // Router.beforeEach((to, from, next) => {
  //   if (route.meta.requiresAuth && !Store.isLoggedIn) next({ path: '/login' })
  //   else next()
  // })


  return Router
})
