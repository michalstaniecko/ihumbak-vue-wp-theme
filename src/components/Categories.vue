<template>
  <div>
    <ul>
      <li
        v-bind:v-if="categories.length"
        v-for="category in categories"
      >
        {{category.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import api from './../api/index'

  export default {
    name: "Categories",
    data() {
      return {
        categories: []
      }
    },
    mounted() {
      api.getCategories((categories) => {
        this.categories = categories
      })
    }
  }
</script>

<style scoped>

</style>
