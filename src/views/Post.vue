<template>
  <div v-if="post">
    <h1>{{post.title.rendered}}</h1>
    <div v-html="post.content.rendered">
    </div>
  </div>
</template>

<script>
  import api from '../api/index'
  export default {
    name: "Post",
    data(){
      return {
        post: false
      }
    },
    mounted() {
      if (this.$route.params.post){

        this.post = this.$route.params.post
      } else {
        api.getPostBySlug(this.$route.params.slug, (post)=>{
          this.post = post
        })
      }
    }
  }
</script>

<style scoped>

</style>
