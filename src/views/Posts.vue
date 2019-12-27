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
        imgPlaceholder: 'http://placekitten.com/300/200'
      }
    },
    methods: {
      postImageURL(post) {
        return postHelpers.postImageUrl(post, 'medium')
      }
    },
    mounted() {
      API.getPosts(10, (posts) => {
        this.posts = posts.map(post=> {
          if (post.featured_media) {
            API.getMediaById(post.featured_media, media=>{
              post.featured_media = media
            })
          }
          return post
        })
      })

    }
  }
</script>

<style scoped>

</style>
