<template>
  <div>
    <h2>Recent Posts</h2>
    <div v-if="(posts.length)">

      <div v-for="post in posts">
        <b-card
          :img-src="postImage(post)"
          img-alt=""
          img-left
          class="mb-3">
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
  import API from '../api/index'

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
      postImage(post) {
        let img = post.featured_media.media_details ? post.featured_media.media_details.sizes.medium.source_url : this.imgPlaceholder
        return img
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
