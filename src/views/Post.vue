<template>
  <div v-if="post">
    <b-card
      overlay
      v-if="post"
      :img-src="postImageURL(post)"
      img-alt="Card Image"
      text-variant="white"
      :title="post.title.rendered"
    >
      <b-card-text v-html="post.excerpt.rendered">

      </b-card-text>
    </b-card>
    <div v-html="post.content.rendered" class="mt-3">
    </div>
  </div>
</template>

<script>
  import api from '../api/index'
  import postHelpers from '../helpers/post'
  import axios from 'axios'

  export default {
    name: "Post",
    data() {
      return {
        post: false
      }
    },
    methods: {
      postImageURL(post) {
        return postHelpers.postImageUrl(post, 'large')
      }
    },
    mounted() {
      if (this.$route.params.post) {

        this.post = this.$route.params.post
      } else {
        api.getPostBySlug(this.$route.params.slug, 'posts')
          .then((post) => {
            return post
          })
          .then(post => {
            if (typeof post.featured_media == 'number') {
              new Promise((resolve, reject)=> {
                resolve(api.getMediaById(post.featured_media)
                  .then((media) => {
                    post.featured_media = media
                    return post
                  }))
              })
              .then(response=>{
                this.post=response
              })
            }

          })


      }
      /*
            function loadPosts(src) {
              return new Promise((resolve, reject) => {
                axios(src)
                  .then((response) => {
                    resolve(response.data)
                  })
              })
            }

            function loadMedia(posts) {
              return new Promise((resolve, reject) => {
                resolve(
                  posts.map(post => {
                    if (post.featured_media) {
                      api.getMediaById(post.featured_media, media => {
                        post.featured_media = media
                        return post
                      })
                    }
                    return post
                  })
                )
              })
            }

            let promise = loadMedia(loadPosts('http://vue.wp.testuj.website/wp-json/wp/v2/posts'));

            promise
              .then(response => {
                console.log(response);
              })*/
    }
  }
</script>

<style scoped>

</style>
