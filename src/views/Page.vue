<template>
  <div v-if="page">
    <h1>
      {{page.title.rendered}}
    </h1>
    <div v-html="page.content.rendered">
    </div>
  </div>
</template>

<script>
  import API from '../api/'

  export default {
    name: "Page",
    data() {
      return {
        page: false
      }
    },
    mounted() {
      API.getPostBySlug(this.$route.params.page, 'pages')
        .then((page) => {
          this.page = page
        })
    }
  }
</script>

<style scoped>

</style>
