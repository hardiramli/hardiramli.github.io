import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/centerContentViews/Home.vue";
import loginPage from "@/views/loginPage.vue";

import store from "@/store/index.ts"


Vue.use(VueRouter);

const routes = [
      {
        path: "/",
        name: "Home",
        component: Home,
        beforeEnter (to, from, next) {
          if (store.getters.isAuthenticated) {
            next()
          } else {
            next('/login')
          }
        }
      },
      {
        path: "/login",
        name: "Login",
        component: loginPage
      },
      {
        path: "/fundtransfer",
        name: "Transfer",
        component: () =>
          import(/*webpackChunkName: "fundtransfer"*/ "@/views/centerContentViews/fundtransfer.vue")
      },
      {
        path: "/prepaidreloads",
        name: "Prepaid Reloads",
        component: () =>
          import(
            /*webpackChunkName: "prepaidreloads"*/ "@/views/centerContentViews/prepaidreloads.vue"
          )
      },
      {
        path: "/accounts",
        name: "Saldo & Mutasi",
        component: () =>
          import(/*webpackChunkName: "account"*/ "@/views/centerContentViews/account.vue")
      },
      {
        path: "/new-account",
        name: "Buka Rekening",
        component: () =>
          import(/*webpackChunkName: "payment"*/ "@/views/centerContentViews/new-account.vue")
      },
      {
        path: "/payments",
        name: "Pembayaran & Top Up",
        component: () =>
          import(/*webpackChunkName: "payment"*/ "@/views/centerContentViews/payment.vue")
      },
      {
        path: "/investations",
        name: "Investasi",
        component: () =>
          import(/*webpackChunkName: "payment"*/ "@/views/centerContentViews/investation.vue")
      },
      {
        path:"/balance/:jenis/:id",
        name:"Detail Saldo",
        component: () =>
          import(/*webpackChunkName: "payment"*/ "@/views/centerContentViews/balance.vue"),
        props: true
      }

];
export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });

  // router.beforeEach((to, from, next) => {
  //   return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
  // })

