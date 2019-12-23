<template>
  <div>
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template v-slot:header>Vue Wordpress Theme Boilerplate</template>

      <template v-slot:lead>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
        featured content or information.
      </template>

      <hr class="my-4">

      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
  import api from './../api/index'
  export default {
    name: "Home",
    mounted() {

    }
  }
</script>

<style scoped>

</style>
