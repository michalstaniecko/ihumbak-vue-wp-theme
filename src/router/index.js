import Vue from 'vue'
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Page from "../views/Page.vue"
import Posts from "../views/Posts.vue"
import Page_404 from "../views/_404.vue"
import Post from "../views/Post.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/post(s)?',
    name: 'posts',
    component: Posts
  },
  {
    path: '/post/:slug',
    name: 'post',
    component: Post
  },
  {
    path: '/:page',
    name: 'page',
    component: Page
  },
  {
    path:'*',
    name: '404',
    component: Page_404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: "",
  routes
})

export default router
