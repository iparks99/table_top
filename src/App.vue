<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  created: function() {
    axios.defaults.baseURL = 'http://localhost:3000'
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
