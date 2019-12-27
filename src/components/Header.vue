<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>

        <b-navbar-brand to="/">Vue Boilerplate</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>


          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/posts">Posts</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>


        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
