<template>
  <div>
    <Header/>
    <b-container class="mt-5">
      <b-row>
        <b-col class="col-sm-9">

          <router-view/>
        </b-col>
        <b-col class="col-sm-3">
          <sidebar/>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Sidebar from "./components/Sidebar.vue";

  export default {
    components: {
      Header,
      Sidebar
    }
  }
</script>

<style scoped>

</style>
