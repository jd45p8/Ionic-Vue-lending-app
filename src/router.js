import Vue from "vue";
import { IonicVueRouter } from "@ionic/vue";
import Home from "./views/Home.vue";

import app from "./feathers";

Vue.use(IonicVueRouter);

let logged = false;

app.on("logout", () => (logged = false));
app.on("authenticated", () => (logged = true));

const router = new IonicVueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("./views/UserDashboard.vue"),
      children: [
        {
          path: "/lending",
          name: "user-lending",
          component: () => import("./views/UserLending.vue")
        },
        {
          path: "/settings",
          name: "user-settings",
          component: () => import("./views/UserSettings.vue")
        }
      ],
      meta: {
        auth: true
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import("./views/SignUp.vue")
    },
    {
      path: '/info',
      name: 'infouser',
      component: () => import("./views/InfoUser.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.auth)) {
    if (!logged) {
      next({
        name: "login",
        query: {
          to: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;