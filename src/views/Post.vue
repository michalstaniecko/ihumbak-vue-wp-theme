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
        api.getPostBySlug(this.$route.params.slug, 'posts', (post) => {
          this.post = post
          if (this.post.featured_media) {
            api.getMediaById(this.post.featured_media, (media) => {
              this.post.featured_media = media
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
