<template>
  <div>
    <h2>Recent Posts</h2>
    <div>

      <div v-for="post in posts">
        <b-card img-src="https://placekitten.com/300/300" img-alt="" img-left class="mb-3">
          <b-card-text>
            <router-link :to="{name:'post', params: {slug:post.slug, post:post}}"><h3>{{post.title.rendered}}</h3>
            </router-link>
            <div v-html="post.excerpt.rendered"></div>
            <div class="text-right">

              <router-link :to="{name:'post', params: {slug:post.slug, post:post}}">Read more...</router-link>
            </div>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../api/index'

  export default {
    name: "Posts",
    data() {
      return {
        posts: [],
        counter: 0
      }
    },
    methods: {
      getPost(id) {

        api.getPostById(id, (post) => {
          console.log(post);
        })
      }
    },
    mounted() {
      api.getPosts(10, (posts) => {
        this.posts = posts
      })
    }
  }
</script>

<style scoped>

</style>
