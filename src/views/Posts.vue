<template>
  <div>
    <h1>
      Post
    </h1>
    <div>
      <categories/>
    </div>
    <div>
      <h2>lista postów</h2>
      <ul>
        <li v-for="post in posts" >

          <router-link :to="{name:'post', params: {slug:post.slug, post:post}}"><h3>{{post.title.rendered}}</h3></router-link>
          <div v-html="post.excerpt.rendered"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Categories from "../components/Categories.vue"
  import api from '../api/index'
  export default {
    name: "Posts",
    components:{
      Categories
    },
    data() {
      return {
        posts: [],
        counter: 0
      }
    },
    methods: {
      getPost(id) {

        api.getPostById(id, (post)=>{
          console.log(post);
        })
      }
    },
    mounted() {
      api.getPosts(10, (posts)=>{
        this.posts = posts
      })
    }
  }
</script>

<style scoped>

</style>
