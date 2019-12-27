<template>
  <div>
    <h2>Recent Posts</h2>
    <div v-if="(posts.length)">

      <div v-for="post in posts">
        <b-card
          :img-src="postImageURL(post)"
          img-alt=""
          img-left
          class="mb-3">
          <b-card-text>
            <router-link :to="'/post/'+post.slug"><h3>{{post.title.rendered}}</h3>
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
  import API from '../api/index'
  import postHelpers from '../helpers/post'

  export default {
    name: "Posts",
    data() {
      return {
        posts: [],
        counter: 0,
      }
    },
    methods: {
      postImageURL(post) {
        return postHelpers.postImageUrl(post, 'medium')
      }
    },
    mounted() {

      API.getPostsWithMedia(10)
        .then(response => {
          this.posts= response
        })
      API.getPosts(10)
        .then(posts => {


        })

    }
  }
</script>

<style scoped>

</style>
