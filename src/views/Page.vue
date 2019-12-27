<template>
  <div>
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
      API.getPostBySlug(this.$route.params.page, 'pages', (page) => {
        this.page = page
      })
    }
  }
</script>

<style scoped>

</style>
