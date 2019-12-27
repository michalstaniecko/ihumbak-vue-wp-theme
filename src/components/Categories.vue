<template>
  <div>
    <b-card title="Categories">
      <b-card-text>
        <ul>
          <li
            v-bind:v-if="categories.length"
            v-for="category in categories"
          >
            {{category.name}}
          </li>
        </ul>
      </b-card-text>
    </b-card>
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
      api.getCategories()
        .then((categories) => {
          this.categories = categories
        })
    }
  }
</script>

<style scoped>

</style>
