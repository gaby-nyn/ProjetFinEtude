<template>
  <div id="app">
    <NavBar/>
    <section class="section container is-fluid">
      <router-view/>
    </section>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import '@/assets/bulma.sass';

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.section {
  padding-top: 80px;
}
</style>
