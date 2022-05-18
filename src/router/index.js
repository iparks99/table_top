import { createWebHistory, createRouter } from "vue-router"
import Login from "@/pages/Login.vue"
import Register from "@/pages/Register.vue"
import NotFound from "@/pages/404.vue"
import store from '@/store/index'

const routes = [
  {
    path: "/",
    name: "Home",
    component: NotFound
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

const protectedRoutes = ['Home']

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href

router.beforeEach(async (to) => {
  let isAuthenticated = store.getters.isAuthenticated
  console.log(isAuthenticated)

  if (protectedRoutes.includes(to.name) && !isAuthenticated) {
    return '/login'
  }
})

export default router