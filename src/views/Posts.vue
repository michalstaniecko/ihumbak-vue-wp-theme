<template>
  <div>
    <h2>Recent Posts</h2>
    <div v-if="posts.length">

      <div v-for="post in posts">
        <b-card v-if="post.featured_media.media_details" :img-src="post.featured_media.media_details.sizes.medium.source_url" img-alt="" img-left class="mb-3">
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
    mounted() {
      api.getPosts(10, (posts) => {
        let _posts = posts.map((post) => {
          if (post.featured_media) {
            api.getMediaById(post.featured_media, (media) => {
              post.featured_media = media
            })
          }
          return post
        })
        this.posts = _posts;
      })
    }
  }
</script>

<style scoped>

</style>
