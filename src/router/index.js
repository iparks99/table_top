import { createWebHistory, createRouter } from "vue-router"
import Login from "@/pages/Login.vue"
import Register from "@/pages/Register.vue"
import NotFound from "@/pages/404.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: null
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  { // Any other pages result in 404 page.
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href

export default router